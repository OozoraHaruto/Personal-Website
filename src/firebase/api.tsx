import { db } from './';
import {
  collection,
  DocumentData,
  getDocs,
  orderBy,
  query,
  QuerySnapshot,
} from 'firebase/firestore/lite';

import { School, SchoolCCA, SchoolSubjectWrapper } from './interfaces';

export const getSchools = () => {
  const col = collection(db, 'school');
  const ref = query(col, orderBy('timeFrom', 'desc'));
  const schools: School[] = [];

  return getDocs(ref)
    .then(snapshot => {
      const promises: Promise<any>[] = [];

      snapshot.forEach(schoolSnapshot => {
        const schSubCol = collection(
          db,
          `school/${schoolSnapshot.id}/Subjects`,
        );
        const schSubRef = query(schSubCol, orderBy('name'));
        const schCCARef = collection(db, `school/${schoolSnapshot.id}/CCA`);

        const school: School = schoolSnapshot.data() as School;
        school.id = schoolSnapshot.id;
        schools.push(school);

        promises.push(...[getDocs(schSubRef), getDocs(schCCARef)]);
      });

      return Promise.all(promises);
    })
    .then((subSnapshots: QuerySnapshot<DocumentData>[]) => {
      subSnapshots.forEach((doc, i) => {
        const index = i % 2;
        const idx = Math.floor(i / 2);
        const school = schools[idx];

        if (index === 0) {
          if (doc.size > 0) {
            const subjects: SchoolSubjectWrapper[] = [];
            doc.docs.forEach(data => {
              const schoolData = data.data() as SchoolSubjectWrapper;
              schoolData.id = data.id;
              subjects.push(schoolData);
            });
            school.subjects = subjects;
          }
        } else {
          if (doc.size > 0) {
            const ccas: SchoolCCA[] = [];
            doc.docs.forEach(data => {
              const subjectData = data.data() as SchoolCCA;
              subjectData.id = data.id;
              ccas.push(subjectData);
            });
            school.ccas = ccas;
          }
        }
      });

      return schools;
    });
};
