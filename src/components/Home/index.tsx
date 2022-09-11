import { light } from '@fortawesome/fontawesome-svg-core/import.macro';
import { Sheet } from '@mui/joy';
import React, { useEffect, useState } from 'react';

import CertificateView from './Certification';
import LanguageView from './rows/Language';
import LoadingPlaceholder from './shared/LoadingPlaceholder';
import { LoadingPlaceholderViewType } from './interface';
import ProjectRow from './rows/project';
import SchoolRow from './rows/school';
import SkillChip from './rows/skill';
import {
  Certificate,
  Language,
  Project,
  School,
  Skill,
} from '../../firebase/interfaces';
import { ContainerCenter, HomeSplit } from '../../style/Layout';
import {
  getCertifications,
  getLanguages,
  getProjects,
  getSchools,
  getSkills,
} from '../../firebase/api';

export const Home = () => {
  const [certificates, setCertificates] = useState<Certificate[] | undefined>(
    undefined,
  );
  const [languages, setLanguages] = useState<Language[] | undefined>(undefined);
  const [projects, setProjects] = useState<Project[] | undefined>(undefined);
  const [schools, setSchools] = useState<School[] | undefined>(undefined);
  const [skills, setSkills] = useState<Skill[] | undefined>(undefined);

  useEffect(() => {
    getCertifications().then(data => setCertificates(data));
    getLanguages().then(data => setLanguages(data));
    getProjects().then(data => setProjects(data));
    getSchools().then(data => setSchools(data));
    getSkills().then(data => setSkills(data));
  }, []);

  const CertificateWrapper = LoadingPlaceholder(
    light('file-certificate'),
    'Certifications',
    LoadingPlaceholderViewType.ViewWrapper,
    certificates,
  )(CertificateView);
  const LanguageWrapper = LoadingPlaceholder(
    light('globe'),
    'Language',
    LoadingPlaceholderViewType.ViewWrapper,
    languages,
  )(LanguageView);
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
  const SkillWrapper = LoadingPlaceholder(
    light('hand-paper'),
    'Skills',
    LoadingPlaceholderViewType.ViewWrapper,
    skills,
  )(SkillChip);

  return (
    <ContainerCenter>
      <ProjectWrapper />
      <SchoolWrapper />
      <HomeSplit>
        <SkillWrapper />
        <Sheet
          sx={{
            width: '100%',
            flexDirection: 'column',
            display: 'flex',
            gap: 2,
          }}
        >
          <CertificateWrapper />
          <LanguageWrapper />
        </Sheet>
      </HomeSplit>
    </ContainerCenter>
  );
};

export default Home;
