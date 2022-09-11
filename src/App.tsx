import { CssVarsProvider } from '@mui/joy/styles';
import React from 'react';
import { Route, Routes } from 'react-router-dom';

import './App.scss';

import Error404 from './components/Others/Error404';
import Header from './components/Others/Header';
import Home from './components/Home';
import mainTheme from './style/theme';
import { ThemeProvider } from './Helpers/Theme';

// const RequireAuth = ({
//   children,
//   adminOnly = false,
//   defaultPermission = false,
//   allowedGroups = [],
// }: {
//   children: JSX.Element;
//   adminOnly?: Boolean;
//   defaultPermission?: Boolean;
//   allowedGroups?: string[];
// }) => {
//   const [ jwt, , checkGroup, checkDefaultPermission ] = useAuth();

//   useEffect(() => { }, [ jwt ]);

//   if (jwt) {
//     if (adminOnly) {
//       return jwt.admin ? children : <Error401 adminOnly={ true } />;
//     } else if (defaultPermission) {
//       return checkDefaultPermission() ? (
//         children
//       ) : (
//         <Error401 { ...{ allowedGroups } } />
//       );
//     } else {
//       return checkGroup(allowedGroups) ? (
//         children
//       ) : (
//         <Error401 { ...{ allowedGroups } } />
//       );
//     }
//   }

//   return <AuthLogin />;
// };

function App() {
  return (
    <CssVarsProvider theme={mainTheme}>
      <ThemeProvider>
        <Routes>
          <Route path="/" element={<Header />}>
            <Route index element={<Home />} />

            <Route path="*" element={<Error404 />} />
          </Route>
        </Routes>
      </ThemeProvider>
    </CssVarsProvider>
  );
}

export default App;
