import React from 'react';
import ReactDOM from 'react-dom/client';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Container, CssBaseline, ThemeProvider, createTheme } from '@mui/material';

const theme= createTheme({
  
    palette: {
      mode: 'light',
      primary: {
        main: '#ffffff',
        contrastText: 'rgba(0,13,125,0.87)',
      },
      secondary: {
        main: '#1672ff',
      },
      background: {
        default: '#e8e8e8',
      }
    }
  
})

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline/>
      <Container disableGutters maxWidth='md'>

        <App />
      </Container>

    </ThemeProvider>

  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
