import React from 'react';
import injectContext from './store/appContext';
import Home from './Components/views/Home'
import EquipoTrabajo from './Components/views/EquipoTrabajo';
import SelecGrado from './Components/views/SelecGrado';
import Error from './Components/Error';
import MiMenu from './Components/views/MiMenu'
import SignIn from './Components/views/SignIn';
import SignUp from './Components/views/SignUp';
import './index.css';
import { Container, CssBaseline, ThemeProvider, createTheme } from '@mui/material';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Notificaciones from './Components/views/Notificaciones';
import Estudiantes from './Components/views/Estudiantes';
import ProyectosGrado from './Components/views/ProyectosGrado';
import NotificacionesGrado from './Components/views/NotificacionesGrado';
import MenuGrado from './Components/views/MenuGrado';
import Migrado from './Components/views/Migrado';


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

// estos son los path del grado
{
  path: '/selecGrado',
  element: <SelecGrado/>
},
{
  path: '/miGrado/:grado',
  element: <Migrado/>
},

{
  path: '/miGrado/:grado/estudiantes',
  element:<Estudiantes/>
},
{
  path: '/miGrado/:grado/proyectos',
  element:<ProyectosGrado/>
},
{
  path: '/miGrado/:grado/notificacionesGrado',
  element:<NotificacionesGrado/>
},
{
  path: '/miGrado/:grado/menuGrado',
  element:<MenuGrado/>
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
