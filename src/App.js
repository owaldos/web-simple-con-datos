import React from 'react';
import injectContext from './store/appContext';
import Home from './Components/Home'
import EquipoTrabajo from './Components/EquipoTrabajo';
import Migrado from './Components/Migrado';
import Error from './Components/Error';
import MiMenu from './Components/MiMenu'
import SignIn from './Components/SignIn';
import SignUp from './Components/SignUp';
import './index.css';
import { Container, CssBaseline, ThemeProvider, createTheme } from '@mui/material';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Notificaciones from './Components/Notificaciones';


const theme= createTheme({
  
  palette: {
    mode: 'light',
    primary: {
      main: '#ffffff',
      contrastText: 'rgba(0,13,125,0.87)',
    },
    secondary: {
      main: '#888D9B',

    },
   
    background: {
      default: '#e8e8e8',
    }
  }  

})


const router = createBrowserRouter([

{
  path: '/faceschool',
  element:<Home/>,
  errorElement:<Error/>,

},
{
  path: '/equipoTrabajo',
  element:<EquipoTrabajo/>,
  
},
{
  path: '/miGrado',
  element:<Migrado/>
},
{
  path: '/notificaciones',
  element:<Notificaciones/>
},
{
  path: '/menu',
  element:<MiMenu/>
},

{
  path: '/Ingresar',
  element:<SignIn/>
},
{
  path: '/registrarme',
  element:<SignUp/>
},
{
  path: '/Mi Perfil',
  element:<Error/>
},


])


function App() {

 
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline/>
      <Container disableGutters maxWidth='md'>
        <RouterProvider router={router}/>
      </Container>
    </ThemeProvider>
   
    
  );
}

export default injectContext(App);
