import React from 'react';
import injectContext from './store/appContext';
import Home from './Components/views/Home'
import Error from './Components/Error';
import MiMenu from './Components/views/MiMenu'
import SignIn from './Components/views/SignIn';
import SignUp from './Components/views/SignUp';
import NuevoProducto from './Components/views/NuevoProducto';
import './index.css';
import { Container, CssBaseline, ThemeProvider, createTheme } from '@mui/material';
import {lightGreen } from '@mui/material/colors';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import ListaProductos from './Components/ListaProductos';
import Producto from './Components/views/Producto';

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
  path: '/web-simple-con-datos',
  element:<Home/>,
  errorElement:<Error/>,

},
{
  path: '/web-simple-con-datos/lista-productos/:categoria',
  element:<ListaProductos/>,
  
},
{
  path: '/web-simple-con-datos/producto/:categoria/:index',
  element:<Producto/>
},



{
  path: '/menu',
  element:<MiMenu/>
},


{
  path: '/signIn',
  element:<SignIn/>
},
{
  path: '/Registrarme',
  element:<SignUp/>
},
{
  path: '/Publicar un Articulo',
  element:<NuevoProducto/>
},

{
  path: '/Editar Articulo',
  element:<Error/>
},
{
  path: '/Eliminar Articulo',
  element:<Error/>
},
{
  path: '/Modificar Articulo',
  element:<Error/>
},
{
  path: '/Otros',
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
