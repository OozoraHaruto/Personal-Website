import * as React from 'react';
import Sheet, { SheetProps } from '@mui/joy/Sheet';

export const Root = (props: SheetProps) => (
  <Sheet
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

export const SheetFloatCenterWrapper = (props: SheetProps) => (
  <Sheet
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

export const SheetFloatCenterSheet = (props: SheetProps) => (
  <Sheet
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

export const Grid3 = (props: SheetProps) => (
  <Sheet
    {...props}
    sx={[
      {
        bgcolor: 'background.appBody',
        display: 'grid',
        gridTemplateColumns: {
          xs: '1fr',
          sm: 'minmax(64px, 200px) minmax(450px, 1fr)',
          md: 'minmax(160px, 300px) minmax(300px, 500px) minmax(500px, 1fr)',
        },
        gridTemplateRows: '64px 1fr',
        minHeight: '100vh',
      },
      ...(Array.isArray(props.sx) ? props.sx : [props.sx]),
    ]}
  />
);

export const SideNav = (props: SheetProps) => (
  <Sheet
    component="nav"
    className="Navigation"
    {...props}
    sx={[
      {
        p: 2,
        bgcolor: 'background.componentBg',
        borderRight: '1px solid',
        borderColor: 'divider',
        display: {
          xs: 'none',
          sm: 'initial',
        },
      },
      ...(Array.isArray(props.sx) ? props.sx : [props.sx]),
    ]}
  />
);

export const SidePane = (props: SheetProps) => (
  <Sheet
    className="Inbox"
    {...props}
    sx={[
      {
        bgcolor: 'background.componentBg',
        borderRight: '1px solid',
        borderColor: 'divider',
        display: {
          xs: 'none',
          md: 'initial',
        },
      },
      ...(Array.isArray(props.sx) ? props.sx : [props.sx]),
    ]}
  />
);

export const Main = (props: SheetProps) => (
  <Sheet
    component="main"
    className="Main"
    {...props}
    sx={[{ p: 2 }, ...(Array.isArray(props.sx) ? props.sx : [props.sx])]}
  />
);

export const SideDrawer = ({
  onClose,
  ...props
}: SheetProps & { onClose: React.MouseEventHandler<HTMLDivElement> }) => (
  <Sheet
    {...props}
    sx={[
      { position: 'fixed', zIndex: 1200, width: '100%', height: '100%' },
      ...(Array.isArray(props.sx) ? props.sx : [props.sx]),
    ]}
  >
    <Sheet
      role="button"
      onClick={onClose}
      sx={{
        position: 'absolute',
        inset: 0,
        bgcolor: theme =>
          `rgba(${theme.vars.palette.neutral.darkChannel} / 0.8)`,
      }}
    />
    <Sheet
      sx={{
        minWidth: 256,
        width: 'max-content',
        height: '100%',
        p: 2,
        boxShadow: 'lg',
        bgcolor: 'background.componentBg',
      }}
    >
      {props.children}
    </Sheet>
  </Sheet>
);

export default {
  SideNav,
  SidePane,
  SideDrawer,
  Main,
};
