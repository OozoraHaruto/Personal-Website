import { useColorScheme } from '@mui/joy/styles';
import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react';

const getMql = () =>
  window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)');

const getBrowserTheme = () => {
  const mql = getMql();
  return mql && mql.matches ? 'dark' : 'light';
};

// eslint-disable-next-line
const onBrowserThemeChanged = (callBack: Function) => {
  const mql = getMql();
  const mqlListener = (e: MediaQueryListEvent) =>
    callBack(e.matches ? 'dark' : 'light');
  mql && mql.addEventListener('change', mqlListener);
  return () => mql && mql.removeEventListener('change', mqlListener);
};

export const themes: { [index: string]: { [index: string]: string } } = {
  light: {
    bg: 'bg-white',
    border: 'border-default',
    card: '',
    cardSub: 'text-dark bg-light',
    jumbotron: 'bg-light',
    listGroupItem: '',
    listGroupHiddenItem: 'list-group-item-light',
    nav: 'navbar-light',
    navBg: 'bg-light',
    secondary: 'bg-light',
    table: '',
    text: 'text-dark',
  },
  dark: {
    bg: 'bg-dark',
    border: 'border-light',
    card: 'text-white bg-dark border-light',
    cardSub: 'text-white bg-secondary',
    jumbotron: 'bg-secondary',
    listGroupItem: 'list-group-item-dark',
    listGroupHiddenItem: 'list-group-item-secondary',
    nav: 'navbar-dark',
    navBg: 'bg-dark',
    secondary: 'bg-secondary',
    table: 'table-dark',
    text: 'text-white',
  },
};

const ThemeContext = createContext<
  readonly ['light' | 'dark', { [index: string]: string }]
>([getBrowserTheme(), themes[getBrowserTheme()]] as const);

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [theme, setTheme] = useState<'light' | 'dark'>(getBrowserTheme());
  const { mode, setMode } = useColorScheme();

  const updateTheme = useCallback(
    (newTheme: 'light' | 'dark') => {
      setTheme(newTheme);
      setMode(newTheme);
    },
    [setTheme],
  );

  useEffect(() => {
    setTheme(getBrowserTheme());
    setMode(getBrowserTheme());
    return onBrowserThemeChanged(updateTheme);
  }, [mode, updateTheme]);

  return (
    theme && (
      <ThemeContext.Provider value={[theme, themes[theme]]}>
        {children}
      </ThemeContext.Provider>
    )
  );
};

export const useTheme = () => useContext(ThemeContext);
