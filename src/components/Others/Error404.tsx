import { createBrowserHistory } from 'history';
import React from 'react';
import { Typography } from '@mui/joy';

import {
  SheetFloatCenterSheet,
  SheetFloatCenterWrapper,
} from '../../style/Layout';

const Error404 = () => {
  const history = createBrowserHistory();
  const { pathname, search, hash } = history.location;

  return (
    <SheetFloatCenterWrapper>
      <SheetFloatCenterSheet component="div">
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
      </SheetFloatCenterSheet>
    </SheetFloatCenterWrapper>
  );
};

export default Error404;
