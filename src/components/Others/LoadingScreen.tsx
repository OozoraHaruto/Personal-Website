import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { light } from '@fortawesome/fontawesome-svg-core/import.macro';
import React from 'react';
import { Typography } from '@mui/joy';

import { BoxFloatCenterBox, BoxFloatCenterWrapper } from '../../style/Layout';

const LoadingScreen = () => {
  return (
    <BoxFloatCenterWrapper>
      <BoxFloatCenterBox
        sx={{
          alignItems: 'center',
        }}
      >
        <FontAwesomeIcon icon={light('loader')} size="8x" spin />
        <Typography component="h3" level="body1">
          Loading Data...
        </Typography>
      </BoxFloatCenterBox>
    </BoxFloatCenterWrapper>
  );
};

export default LoadingScreen;
