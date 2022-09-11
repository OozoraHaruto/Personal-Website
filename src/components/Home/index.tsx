import { light } from '@fortawesome/fontawesome-svg-core/import.macro';
import { Sheet } from '@mui/joy';
import React, { useEffect, useState } from 'react';

import CertificateView from './Certification';
import LoadingPlaceholder from './shared/LoadingPlaceholder';
import { LoadingPlaceholderViewType } from './interface';
import ProjectRow from './rows/project';
import SchoolRow from './rows/school';
import { Certificate, Project, School } from '../../firebase/interfaces';
import { ContainerCenter, HomeSplit } from '../../style/Layout';
import { getCertifications, getProjects, getSchools } from '../../firebase/api';

export const Home = () => {
  const [certificates, setCertificates] = useState<Certificate[] | undefined>(
    undefined,
  );
  const [schools, setSchools] = useState<School[] | undefined>(undefined);
  const [projects, setProjects] = useState<Project[] | undefined>(undefined);

  useEffect(() => {
    getCertifications().then(data => setCertificates(data));
    getSchools().then(data => setSchools(data));
    getProjects().then(data => setProjects(data));
  }, []);

  const CertificateWrapper = LoadingPlaceholder(
    light('file-certificate'),
    'Certifications',
    LoadingPlaceholderViewType.ViewWrapper,
    certificates,
  )(CertificateView);
  const ProjectWrapper = LoadingPlaceholder(
    light('diagram-project'),
    'Projects',
    LoadingPlaceholderViewType.Rows,
    projects,
    2,
  )(ProjectRow);
  const SchoolWrapper = LoadingPlaceholder(
    light('graduation-cap'),
    'Schools',
    LoadingPlaceholderViewType.Rows,
    schools,
    1,
  )(SchoolRow);

  return (
    <ContainerCenter>
      <ProjectWrapper />
      <SchoolWrapper />
      <HomeSplit>
        <Sheet sx={{ width: '100%' }}>
          <CertificateWrapper />
        </Sheet>
      </HomeSplit>
    </ContainerCenter>
  );
};

export default Home;
