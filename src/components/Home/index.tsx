import { light } from '@fortawesome/fontawesome-svg-core/import.macro';
import React, { useEffect, useState } from 'react';

import { ContainerCenter } from '../../style/Layout';
import LoadingPlaceholder from './shared/LoadingPlaceholder';
import SchoolRow from './rows/school';

import { getSchools } from '../../firebase/api';
import { School } from '../../firebase/interfaces';

export const Home = () => {
  const [schools, setSchools] = useState<School[] | undefined>(undefined);

  useEffect(() => {
    getSchools().then(data => setSchools(data));
  }, []);

  const SchoolWrapper = LoadingPlaceholder(
    light('graduation-cap'),
    'Schools',
    schools,
    1,
  )(SchoolRow);

  return (
    <ContainerCenter>
      <SchoolWrapper />
    </ContainerCenter>
  );
};

export default Home;
