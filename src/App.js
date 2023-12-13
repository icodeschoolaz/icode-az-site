
import { createTheme, ThemeProvider } from '@mui/material/styles';
import GlobalStyles from '@mui/material/GlobalStyles';
import CssBaseline from '@mui/material/CssBaseline';

import './App.css';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import AppHeader from './components/app-header';
import AppHero from './components/app-hero';

const defaultTheme = createTheme({
  palette: {
    primary: {
      main: "#000000"
    }
  }
});

const App = () => {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyles styles={{ ul: { margin: 0, padding: 0, listStyle: 'none' } }} />
      <CssBaseline />
      <AppHeader/>
      <AppHero/>
    </ThemeProvider>
  );
}

export default App;
