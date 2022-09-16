import { duotone } from '@fortawesome/fontawesome-svg-core/import.macro';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import {
  AspectRatio,
  Box,
  Card,
  List,
  ListItem,
  ListItemDecorator,
  Typography,
} from '@mui/joy';

import CardSection from '../shared/CardSection';
import { Work } from '../../../../firebase/interfaces';
import { getProgrammingLanguageIcon, renderDate } from '../../functions';
import {
  ProjectCardSectionChip,
  SectionCardRow,
  SectionCardRowHeaderWImage,
} from '../../../../style/Layout';

export const WorkRow = ({
  id,
  company,
  logo,
  scope,
  skills,
  timeFrom,
  timeTo,
  title,
}: Work) => {
  return (
    <SectionCardRow>
      <SectionCardRowHeaderWImage>
        <AspectRatio
          ratio="1"
          variant="plain"
          sx={{
            width: 120,
            minWidth: 120,
            maxWidth: 120,
            borderRadius: 'md',
          }}
          objectFit="contain"
        >
          <img src={logo} alt={`${company}'s logo`} />
        </AspectRatio>
        <Box>
          <Typography level="h3" sx={{ marginRight: 1 }}>
            {company}
          </Typography>
          <Typography level="body1">{title}</Typography>
          <Typography level="body2">{renderDate(timeFrom, timeTo)}</Typography>
        </Box>
      </SectionCardRowHeaderWImage>
      <Box sx={{ p: 2, width: '100%' }}>
        <Card variant="outlined" sx={{ gap: 1 }}>
          {scope && scope.length > 0 && (
            <CardSection icon={duotone('laptop-file')} title="Work scope">
              <List size="md">
                {scope.map((data, i) => (
                  <ListItem key={`${id}-work-scrope-${i}`}>
                    <ListItemDecorator>
                      <FontAwesomeIcon icon={duotone('dash')} />
                    </ListItemDecorator>
                    {data}
                  </ListItem>
                ))}
              </List>
            </CardSection>
          )}
          {skills && skills.length > 0 && (
            <CardSection icon={duotone('code')} title="Skills">
              {skills.map(skill => (
                <ProjectCardSectionChip
                  key={`${id}-links-${skill}`}
                  startDecorator={getProgrammingLanguageIcon(skill)}
                >
                  {skill}
                </ProjectCardSectionChip>
              ))}
            </CardSection>
          )}
        </Card>
      </Box>
    </SectionCardRow>
  );
};

export default WorkRow;
