import { Box } from '@mui/joy';
import React from 'react';

import { Skill } from '../../../../firebase/interfaces';
import SkillChip from './SkillChip';

export const SkillView = ({ data }: { data: Skill[] }) => (
  <Box sx={{ p: 2 }}>
    {data.map(skill => (
      <SkillChip key={`skill-${skill.name}`} {...skill} />
    ))}
  </Box>
);

export default SkillView;
