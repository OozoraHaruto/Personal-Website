import React from 'react';
import Box, { BoxProps } from '@mui/joy/Box';
import Button, { ButtonProps } from '@mui/joy/Button';
import Card, { CardProps } from '@mui/joy/Card';
import Chip, { ChipProps } from '@mui/joy/Chip';
import Link, { LinkProps } from '@mui/joy/Link';
import Sheet, { SheetProps } from '@mui/joy/Sheet';
import Typography, { TypographyProps } from '@mui/joy/Typography';

export const Root = (props: BoxProps) => (
  <Box
    {...props}
    sx={[
      {
        bgcolor: 'background.appBody',
        display: 'grid',
        gridTemplateRows: '64px 1fr',
        minHeight: '100vh',
      },
      ...(Array.isArray(props.sx) ? props.sx : [props.sx]),
    ]}
  />
);

export const Header = (props: SheetProps) => (
  <Sheet
    component="header"
    className="Header"
    {...props}
    sx={[
      {
        p: 2,
        gap: 2,
        bgcolor: 'background.componentBg',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        gridColumn: '1 / -1',
        borderBottom: '1px solid',
        borderColor: 'divider',
        position: 'sticky',
        top: 0,
        zIndex: 1100,
      },
      ...(Array.isArray(props.sx) ? props.sx : [props.sx]),
    ]}
  />
);

export const BoxFloatCenterWrapper = (props: BoxProps) => (
  <Box
    component="div"
    {...props}
    sx={[
      {
        p: 2,
        gap: 2,
        bgcolor: 'background.componentBg',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        gridColumn: '1 / -1',
      },
      ...(Array.isArray(props.sx) ? props.sx : [props.sx]),
    ]}
  />
);

export const BoxFloatCenterBox = (props: BoxProps) => (
  <Box
    component="div"
    {...props}
    sx={[
      {
        p: 2,
        gap: 2,
        bgcolor: 'background.componentBg',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'left',
        gridColumn: '1 / -1',
      },
      ...(Array.isArray(props.sx) ? props.sx : [props.sx]),
    ]}
  />
);

export const ContainerCenter = (props: BoxProps) => (
  <Box
    component="div"
    sx={[
      {
        p: 2,
        gap: 2,
        bgcolor: 'background.componentBg',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'flex-start',
        gridColumn: '1 / -1',
      },
    ]}
  >
    <Box
      component="div"
      {...props}
      sx={[
        {
          gap: 2,
          bgcolor: 'background.componentBg',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'flex-start',
          gridColumn: '1 / -1',
          width: {
            xs: '100%',
            sm: 540,
            md: 720,
            lg: 960,
            xl: 1140,
          },
        },
        ...(Array.isArray(props.sx) ? props.sx : [props.sx]),
      ]}
    />
  </Box>
);

export const SectionCard = (props: CardProps) => (
  <Card
    variant="outlined"
    {...props}
    sx={[
      {
        p: 0,
        width: '100%',
        '--Card-radius': theme => theme.vars.radius.sm,
      },
      ...(Array.isArray(props.sx) ? props.sx : [props.sx]),
    ]}
  />
);

export const SectionCardHeader = (props: SheetProps) => (
  <Sheet
    component="div"
    color="primary"
    variant="soft"
    {...props}
    sx={[
      {
        p: 1.5,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        gap: 1,
        alignItems: 'center',
        borderTopRightRadius: theme => theme.vars.radius.sm,
        borderTopLeftRadius: theme => theme.vars.radius.sm,
      },
      ...(Array.isArray(props.sx) ? props.sx : [props.sx]),
    ]}
  />
);

export const SectionCardHeaderTitle = (props: TypographyProps) => (
  <Typography
    level="body1"
    {...props}
    sx={[
      {
        fontWeight: 'light',
        display: 'flex',
        gap: 1,
        alignItems: 'center',
        fontSize: theme => theme.vars.fontSize.lg,
        color: theme => theme.vars.palette.primary.softColor,
      },
      ...(Array.isArray(props.sx) ? props.sx : [props.sx]),
    ]}
  />
);

export const SectionCardBody = (props: BoxProps) => (
  <Box
    {...props}
    sx={[
      {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        gap: 1,
        alignItems: 'stretch',
        width: '100%',
      },
      ...(Array.isArray(props.sx) ? props.sx : [props.sx]),
    ]}
  />
);

export const SectionCardRow = (props: BoxProps) => (
  <Box
    {...props}
    sx={[
      {
        p: 2,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'left',
        gap: 1,
        alignItems: 'center',
        transition: 'all 1s',
      },
      ...(Array.isArray(props.sx) ? props.sx : [props.sx]),
    ]}
  />
);

export const SectionCardShowMore = (props: SheetProps) => (
  <Sheet
    component="div"
    color="primary"
    variant="soft"
    {...props}
    sx={[
      {
        p: 1.5,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        gap: 1,
        alignItems: 'center',
        transition: 'all 1s',
        borderBottomRightRadius: theme => theme.vars.radius.sm,
        borderBottomLeftRadius: theme => theme.vars.radius.sm,
      },
      ...(Array.isArray(props.sx) ? props.sx : [props.sx]),
    ]}
  />
);

export const SectionCardShowMoreTitle = (props: LinkProps) => (
  <Link
    level="body1"
    overlay
    {...props}
    sx={[
      {
        fontWeight: 'light',
        display: 'flex',
        gap: 1,
        alignItems: 'center',
        textDecorationColor: theme => theme.vars.palette.primary.softColor,
        color: theme => theme.vars.palette.primary.softColor,
      },
      ...(Array.isArray(props.sx) ? props.sx : [props.sx]),
    ]}
  />
);

export const SectionCardRowHeaderWImage = (props: BoxProps) => (
  <Box
    {...props}
    sx={[
      {
        px: 2,
        py: 0.5,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'left',
        gap: 2,
        alignItems: 'flex-start',
        width: '100%',
      },
      ...(Array.isArray(props.sx) ? props.sx : [props.sx]),
    ]}
  />
);

export const ProjectCardSectionChip = (props: ChipProps) => (
  <Chip
    variant="soft"
    size="sm"
    {...props}
    sx={[...(Array.isArray(props.sx) ? props.sx : [props.sx])]}
  />
);

export const ProjectCardSectionButton = (props: ButtonProps) => (
  <Button
    variant="plain"
    component="a"
    target="_blank"
    size="sm"
    {...props}
    sx={[
      {
        gap: 1,
      },
      ...(Array.isArray(props.sx) ? props.sx : [props.sx]),
    ]}
  />
);

export const HomeSplit = (props: BoxProps) => (
  <Box
    {...props}
    sx={[
      {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'left',
        gap: 2,
        alignItems: 'flex-start',
        width: '100%',
      },
      ...(Array.isArray(props.sx) ? props.sx : [props.sx]),
    ]}
  />
);
