import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconDefinition } from '@fortawesome/fontawesome-common-types';
import { light } from '@fortawesome/fontawesome-svg-core/import.macro';
import React from 'react';
import { Button, Sheet } from '@mui/joy';
import { NavLink, Outlet } from 'react-router-dom';

import { Header, Root } from '../../style/Layout';

const NavBarLink = ({
  title,
  startIcon,
  to,
}: {
  title: string;
  startIcon?: IconDefinition;
  to: string;
}) => (
  <NavLink to={to} style={{ textDecoration: 'None' }}>
    {({ isActive }) => (
      <Button
        size="sm"
        variant={isActive ? 'soft' : 'plain'}
        sx={{ display: { xs: 'none', sm: 'inline-flex' } }}
        startIcon={startIcon && <FontAwesomeIcon icon={startIcon} />}
      >
        {title}
      </Button>
    )}
  </NavLink>
);

const Wrapper = () => {
  return (
    <React.Fragment>
      <Root>
        <Header>
          <Sheet
            sx={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              gap: 1.5,
            }}
          >
            <NavBarLink title="Home" startIcon={light('home')} to="/" />
          </Sheet>
        </Header>

        <Outlet />
      </Root>
    </React.Fragment>
  );
};

export default Wrapper;
