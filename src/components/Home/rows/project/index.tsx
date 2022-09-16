import { duotone } from '@fortawesome/fontawesome-svg-core/import.macro';
import React from 'react';
import { AspectRatio, Box, Card, Typography } from '@mui/joy';

import CardSection from '../shared/CardSection';
import { Project } from '../../../../firebase/interfaces';
import { getProgrammingLanguageIcon, getURLIcon } from '../../functions';
import {
  ProjectCardSectionButton,
  ProjectCardSectionChip,
  SectionCardRow,
  SectionCardRowHeaderWImage,
} from '../../../../style/Layout';

export const ProjectRow = ({
  id,
  name,
  desc,
  languages,
  links,
  haveImage,
}: Project) => {
  return (
    <SectionCardRow>
      <SectionCardRowHeaderWImage>
        {haveImage && (
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
            <img
              src={`${process.env.PUBLIC_URL}/project-icons/${name}.png`}
              alt={`${name}'s logo`}
            />
          </AspectRatio>
        )}
        <Box>
          <Typography level="h3" sx={{ marginRight: 1 }}>
            {name}
          </Typography>
          <Typography level="body1">{desc}</Typography>
        </Box>
      </SectionCardRowHeaderWImage>
      <Box sx={{ p: 2, width: '100%' }}>
        <Card variant="outlined" sx={{ gap: 1 }}>
          {languages && languages.length > 0 && (
            <CardSection icon={duotone('code')} title="Languages">
              {languages.map(language => (
                <ProjectCardSectionChip
                  key={`${id}-links-${language}`}
                  startDecorator={getProgrammingLanguageIcon(language)}
                >
                  {language}
                </ProjectCardSectionChip>
              ))}
            </CardSection>
          )}
          {links && links.length > 0 && (
            <CardSection icon={duotone('link')} title="Links">
              {links.map(link => (
                <ProjectCardSectionButton
                  key={`${id}-links-${link.name}`}
                  {...{ href: link.url }}
                >
                  {getURLIcon(link.name)}
                  {link.name}
                </ProjectCardSectionButton>
              ))}
            </CardSection>
          )}
        </Card>
      </Box>
    </SectionCardRow>
  );
};

export default ProjectRow;
