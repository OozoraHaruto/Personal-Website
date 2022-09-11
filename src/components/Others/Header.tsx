import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconDefinition } from '@fortawesome/fontawesome-common-types';
import React from 'react';
import { Box, Button, IconButton } from '@mui/joy';
import { duotone, light } from '@fortawesome/fontawesome-svg-core/import.macro';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
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

const NavBarExternalLink = ({
  startIcon,
  to,
}: {
  startIcon: IconDefinition;
  to: string;
}) => (
  <IconButton
    size="sm"
    component="a"
    variant="plain"
    sx={{ display: { xs: 'none', sm: 'inline-flex' } }}
    href={to}
    target="_blank"
  >
    <FontAwesomeIcon icon={startIcon} />
  </IconButton>
);

const Wrapper = () => {
  return (
    <React.Fragment>
      <Root>
        <Header>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              gap: 1.5,
            }}
          >
            <NavBarLink title="Home" startIcon={light('home')} to="/" />
          </Box>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              gap: 1.5,
            }}
          >
            <NavBarExternalLink
              startIcon={duotone('envelope')}
              to="mailto:malcolmchew1993@gmail.com"
            />
            <NavBarExternalLink
              startIcon={faGithub}
              to="https://github.com/OozoraHaruto/Personal-Website"
            />
            <NavBarExternalLink
              startIcon={faLinkedin}
              to="https://www.linkedin.com/in/malcolmchew"
            />
          </Box>
        </Header>

        <Outlet />
      </Root>
    </React.Fragment>
  );
};

export default Wrapper;
