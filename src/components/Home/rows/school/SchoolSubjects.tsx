import React from 'react';
import {
  Chip,
  List,
  ListItem,
  ListItemContent,
  Tab,
  TabList,
  TabPanel,
  Tabs,
} from '@mui/joy';

import {
  SchoolSubject,
  SchoolSubjectWrapper,
} from '../../../../firebase/interfaces';

const SchoolSubjectsView = ({
  id,
  subjects,
}: {
  id: string;
  subjects: SchoolSubjectWrapper[];
}) => {
  const renderSideTabs = () => (
    <TabList>
      {subjects.map((subject, i) => (
        <Tab key={`${id}_${subject.id}_side`}>{subject.name}</Tab>
      ))}
    </TabList>
  );

  const renderGrades = (subjects: SchoolSubject[]) => (
    <List variant="outlined">
      {subjects.map(subject => (
        <ListItem key={`${id}_${subject.name}`}>
          <ListItemContent>{subject.name}</ListItemContent>
          <Chip size="sm" variant="soft" color="primary">
            {subject.grade}
          </Chip>
        </ListItem>
      ))}
    </List>
  );

  const renderGradeContainers = () => (
    <>
      {subjects.map((subject, i) => (
        <TabPanel value={i} key={`${id}_${subject.id}_grades`}>
          {renderGrades(subject.subjects)}
        </TabPanel>
      ))}
    </>
  );

  return (
    <Tabs
      orientation="vertical"
      defaultValue={0}
      sx={[
        {
          width: '100%',
        },
      ]}
    >
      {renderSideTabs()}
      {renderGradeContainers()}
    </Tabs>
  );
};

export default SchoolSubjectsView;
