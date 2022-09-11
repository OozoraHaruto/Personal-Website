import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import React from 'react';
import { Box, Typography } from '@mui/joy';

export const CardSection = ({
  icon,
  title,
  children,
}: {
  icon: IconDefinition;
  title: string;
  children: JSX.Element | JSX.Element[];
}) => (
  <>
    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
      <Typography
        textColor="primary"
        level="h5"
        sx={[
          {
            fontWeight: 'light',
            display: 'flex',
            gap: 1,
            alignItems: 'center',
            alignSelf: 'flex-start',
          },
        ]}
      >
        <FontAwesomeIcon icon={icon} />
        {title}
      </Typography>
    </Box>
    <Box sx={{ display: 'flex', flexDirection: 'row', gap: 1 }}>{children}</Box>
  </>
);

export default CardSection;
