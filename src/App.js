import React, {useEffect} from 'react';
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
import { lime,lightGreen } from '@mui/material/colors';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Notificaciones from './Components/views/Notificaciones';
import Estudiantes from './Components/views/Estudiantes';
import ProyectosGrado from './Components/views/ProyectosGrado';
import NotificacionesGrado from './Components/views/NotificacionesGrado';
import MenuGrado from './Components/views/MenuGrado';
import Migrado from './Components/views/Migrado';
import MiPerfil from './Components/views/MiPerfil';
import ResponderNotificaciones from './Components/ResponderNotificaciones';

const theme= createTheme({

  
  
  
    palette: {
      primary: {
        main:'#ffff',
      },
      secondary: lightGreen,
    },
  

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
  path: '/responderNotificaciones/:donde/:index',
  element:<ResponderNotificaciones/>
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
  path: '/Registrarme',
  element:<SignUp/>
},
{
  path: '/Mi Perfil/:indexPersonal',
  element:<MiPerfil/>
},

// estos son los path del grado
{
  path: '/selecGrado',
  element: <SelecGrado/>
},
{
  path: '/miGrado/:gradoIndex',
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


const [isReadyForInstall, setIsReadyForInstall] = React.useState(false);

useEffect(() => {
  window.addEventListener("beforeinstallprompt", (event) => {
    // Prevent the mini-infobar from appearing on mobile.
    event.preventDefault();
    console.log("👍", "beforeinstallprompt", event);
    // Stash the event so it can be triggered later.
    window.deferredPrompt = event;
    // Remove the 'hidden' class from the install button container.
    setIsReadyForInstall(true);
  });
}, []);

async function downloadApp() {
  console.log("👍", "butInstall-clicked");
  const promptEvent = window.deferredPrompt;
  if (!promptEvent) {
    // The deferred prompt isn't available.
    console.log("oops, no prompt event guardado en window");
    return;
  }
  // Show the install prompt.
  promptEvent.prompt();
  // Log the result
  const result = await promptEvent.userChoice;
  console.log("👍", "userChoice", result);
  // Reset the deferred prompt variable, since
  // prompt() can only be called once.
  window.deferredPrompt = null;
  // Hide the install button.
  setIsReadyForInstall(false);
}
 
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
