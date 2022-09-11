import { AspectRatio, Box, Tab, TabList, Tabs, Typography } from '@mui/joy';
import React, { useState } from 'react';

import { renderDate } from '../../functions';
import { School } from '../../../../firebase/interfaces';
import SchoolCCAs from './SchoolCCA';
import { SchoolHiddenData } from '../../interface';
import SchoolSubjects from './SchoolSubjects';
import {
  SectionCardRow,
  SectionCardRowHeaderWImage,
} from '../../../../style/Layout';

export const SchoolRow = ({
  id,
  cert,
  grade,
  logo,
  name,
  timeFrom,
  timeTo,
  subjects,
  ccas,
}: School) => {
  const [index, setIndex] = useState<SchoolHiddenData>(SchoolHiddenData.Hidden);
  const haveSubject = subjects ? subjects.length > 0 : false;
  const haveCCA = ccas ? ccas.length > 0 : false;

  const TabView = () => (
    <Tabs
      size="sm"
      value={index}
      onChange={(event, value) => setIndex(value as SchoolHiddenData)}
      sx={{
        width: 'fit-content',
      }}
    >
      <TabList variant="outlined">
        <Tab
          variant={index === SchoolHiddenData.Hidden ? 'soft' : 'plain'}
          color="neutral"
        >
          Hidden
        </Tab>
        {haveSubject && (
          <Tab
            variant={index === SchoolHiddenData.Subjects ? 'soft' : 'plain'}
            color={index === SchoolHiddenData.Subjects ? 'primary' : 'neutral'}
          >
            Subject
          </Tab>
        )}
        {haveCCA && (
          <Tab
            variant={index === SchoolHiddenData.CCAs ? 'soft' : 'plain'}
            color={index === SchoolHiddenData.CCAs ? 'primary' : 'neutral'}
          >
            CCA
          </Tab>
        )}
      </TabList>
    </Tabs>
  );

  return (
    <SectionCardRow>
      <SectionCardRowHeaderWImage>
        <AspectRatio
          ratio="1"
          sx={{
            width: 120,
            backgroundColor: 'transparent',
          }}
          objectFit="contain"
        >
          <img src={logo} alt={`${name}'s logo`} />
        </AspectRatio>
        <Box>
          <Typography>
            <Typography level="h3" sx={{ marginRight: 1 }}>
              {name}
            </Typography>
            <Typography level="body3">{grade}</Typography>
          </Typography>
          <Typography component={'p'} level="body2">
            {cert}
          </Typography>
          <Typography component={'p'} level="body2">
            {renderDate(timeFrom, timeTo)}
          </Typography>
          <TabView />
        </Box>
      </SectionCardRowHeaderWImage>
      {subjects && index === SchoolHiddenData.Subjects && (
        <SchoolSubjects {...{ id, subjects }} />
      )}
      {ccas && index === SchoolHiddenData.CCAs && (
        <SchoolCCAs {...{ id, ccas }} />
      )}
    </SectionCardRow>
  );
};

export default SchoolRow;
