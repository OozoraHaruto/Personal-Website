import React from 'react';
import { Typography } from '@mui/joy';

import { BoxFloatCenterBox, BoxFloatCenterWrapper } from '../../style/Layout';

const Error404 = () => {
  const { pathname, search, hash } = window.location;

  return (
    <BoxFloatCenterWrapper>
      <BoxFloatCenterBox component="div">
        <Typography>
          <Typography sx={{ paddingRight: 1 }} level="display2">
            404.
          </Typography>
          <Typography level="body2">That&apos;s an error.</Typography>
        </Typography>
        <Typography>
          The requested URL{' '}
          <Typography level="code">
            {pathname}
            {search}
            {hash}
          </Typography>{' '}
          was not found on this server. That&apos;s all we know.
        </Typography>
      </BoxFloatCenterBox>
    </BoxFloatCenterWrapper>
  );
};

export default Error404;
