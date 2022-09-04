import { extendTheme } from '@mui/joy/styles';

export default extendTheme({
  typography: {
    code: {
      color: '#d63384',
      fontSize: '.875em',
      wordWrap: 'break-word',
    },
  },
});

declare module '@mui/joy/styles' {
  export interface TypographySystemOverrides {
    code: true;
  }
}
