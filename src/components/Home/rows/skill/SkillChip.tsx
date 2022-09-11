import { Chip } from '@mui/joy';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

import { Skill } from '../../../../firebase/interfaces';
import {
  getCircleNumberIcon,
  getPillColor,
  getProgrammingLanguageIcon,
} from '../../functions';

export const SkillChip = ({ name, proficiency }: Skill) => (
  <Chip
    key={`skill-${name}`}
    color={getPillColor(proficiency)}
    variant="soft"
    sx={{ mx: 1, mb: 1 }}
    startDecorator={getProgrammingLanguageIcon(name)}
    endDecorator={
      <FontAwesomeIcon size="lg" icon={getCircleNumberIcon(proficiency)} />
    }
  >
    {name}
  </Chip>
);

export default SkillChip;
