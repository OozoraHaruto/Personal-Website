import React from 'react';
import { Sheet } from '@mui/joy';

import { Skill } from '../../../../firebase/interfaces';
import SkillChip from './SkillChip';

export const SkillView = ({ data }: { data: Skill[] }) => (
  <Sheet sx={{ p: 2 }}>
    {data.map(skill => (
      <SkillChip key={`skill-${skill.name}`} {...skill} />
    ))}
  </Sheet>
);

export default SkillView;
