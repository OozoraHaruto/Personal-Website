import { light } from '@fortawesome/fontawesome-svg-core/import.macro';
import React, { useEffect, useState } from 'react';

import { ContainerCenter } from '../../style/Layout';
import LoadingPlaceholder from './shared/LoadingPlaceholder';
import ProjectRow from './rows/project';
import SchoolRow from './rows/school';

import { getProjects, getSchools } from '../../firebase/api';
import { Project, School } from '../../firebase/interfaces';

export const Home = () => {
  const [schools, setSchools] = useState<School[] | undefined>(undefined);
  const [projects, setProjects] = useState<Project[] | undefined>(undefined);

  useEffect(() => {
    getSchools().then(data => setSchools(data));
    getProjects().then(data => setProjects(data));
  }, []);

  const ProjectWrapper = LoadingPlaceholder(
    light('diagram-project'),
    'Projects',
    projects,
    2,
  )(ProjectRow);
  const SchoolWrapper = LoadingPlaceholder(
    light('graduation-cap'),
    'Schools',
    schools,
    1,
  )(SchoolRow);

  return (
    <ContainerCenter>
      <ProjectWrapper />
      <SchoolWrapper />
    </ContainerCenter>
  );
};

export default Home;
