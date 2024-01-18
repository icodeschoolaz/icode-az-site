import { createTheme, ThemeProvider } from '@mui/material/styles';
import GlobalStyles from '@mui/material/GlobalStyles';
import CssBaseline from '@mui/material/CssBaseline';
import AppHeader from './components/AppHeader';
import { Container } from '@mui/material';
import Router from './utils/Router';
import { BrowserRouter } from 'react-router-dom';
import { StrictMode } from 'react';

import './App.css';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import AppFooter from './components/AppFooter';

const defaultTheme = createTheme({
  palette: {
    primary: {
      main: "#000000"
    }
  }
});

const App = () => {
  return (
  <StrictMode>
    <BrowserRouter basename='icode-az-site'>
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyles styles={{ ul: { margin: 0, padding: 0, listStyle: 'none' } }} />
      <CssBaseline />
      <AppHeader/>
      <Container maxWidth="xl" disableGutters>
        <Router/>
      </Container>
      <AppFooter/>
    </ThemeProvider>
    </BrowserRouter>
    </StrictMode>
  );
}

export default App;
