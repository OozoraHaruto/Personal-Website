import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Chip, Sheet } from '@mui/joy';

import { Skill } from '../../../firebase/interfaces';
import {
  getCircleNumberIcon,
  getPillColor,
  getProgrammingLanguageIcon,
} from '../functions';

export const SkillChip = ({ data }: { data: Skill[] }) => (
  <Sheet sx={{ p: 2 }}>
    {data.map(skill => (
      <Chip
        key={`skill-${skill.name}`}
        color={getPillColor(skill.proficiency)}
        variant="soft"
        sx={{ mx: 1, mb: 1 }}
        startDecorator={getProgrammingLanguageIcon(skill.name)}
        endDecorator={
          <FontAwesomeIcon
            size="lg"
            icon={getCircleNumberIcon(skill.proficiency)}
          />
        }
      >
        {skill.name}
      </Chip>
    ))}
  </Sheet>
);

export default SkillChip;
