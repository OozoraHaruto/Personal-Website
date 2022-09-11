import { db } from './';
import {
  collection,
  DocumentData,
  getDocs,
  orderBy,
  query,
  QuerySnapshot,
} from 'firebase/firestore/lite';

import {
  Certificate,
  Language,
  Project,
  School,
  SchoolCCA,
  SchoolSubjectWrapper,
  Skill,
} from './interfaces';

export const getCertifications = () => {
  const col = collection(db, 'certifications');
  const ref = query(col, orderBy('name', 'asc'));
  const certs: Certificate[] = [];

  return getDocs(ref).then(snapshot => {
    snapshot.forEach(certSnapshot => {
      const cert: Certificate = certSnapshot.data() as Certificate;
      cert.id = certSnapshot.id;
      certs.push(cert);
    });

    return certs;
  });
};

export const getProjects = () => {
  const col = collection(db, 'projects');
  const ref = query(col, orderBy('last Updated', 'desc'));
  const projects: Project[] = [];

  return getDocs(ref).then(snapshot => {
    snapshot.forEach(projectSnapshot => {
      const project: Project = projectSnapshot.data() as Project;
      project.id = projectSnapshot.id;
      projects.push(project);
    });

    return projects;
  });
};

export const getLanguages = () => {
  const col = collection(db, 'language');
  const ref = query(col, orderBy('listen', 'desc'));
  const languages: Language[] = [];

  return getDocs(ref).then(snapshot => {
    snapshot.forEach(languageSnapshot => {
      const language: Language = languageSnapshot.data() as Language;
      language.id = languageSnapshot.id;
      languages.push(language);
    });

    return languages;
  });
};

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

export const getSkills = () => {
  const col = collection(db, 'skills');
  const ref = query(col, orderBy('name', 'asc'));
  const skills: Skill[] = [];

  return getDocs(ref).then(snapshot => {
    snapshot.forEach(certSnapshot => {
      const skill: Skill = certSnapshot.data() as Skill;
      skill.id = certSnapshot.id;
      skills.push(skill);
    });

    return skills;
  });
};
