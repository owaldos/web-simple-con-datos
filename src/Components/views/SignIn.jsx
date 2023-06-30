import React, { useEffect, useContext} from 'react';
import {Context} from '../../store/appContext'
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { Link, useNavigate } from 'react-router-dom';

import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import logo from '../../images/logopag.png.pagespeed.ce.AtdtHXJTVH.png'



function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link  href="" style={{textDecoration:'none', color:'black'}}>
        VIT BIKES
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}



export default function SignIn() {
 
  const {store, actions}=useContext(Context)
  const navigate = useNavigate()

  useEffect(() => {
    window.scrollTo(0,0)
  
  }, [])

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    let datos={
      usuario: data.get('usuario'),
      password: data.get('password'),
    };
    if(store.registro.usuario===datos.usuario & store.registro.password===datos.password){

      actions.login(datos)
      navigate('/web-simple-con-datos')
    }

  };

  return (
    
      <Container component="main" maxWidth="xs">
        
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <img src= {logo} alt="logo" width={80} />
          
          <Typography component="h1" variant="h5">
            Ingresar
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="usuario"
              label="Usuario es oswaldo"
              name="usuario"
              autoComplete="usuario"
              autoFocus
              color='secondary'
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password 123"
              type="password"
              id="password"
              autoComplete="current-password"
              color='secondary'
            />
           
            <Button
              type="submit"
              fullWidth
              color='secondary'
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Iniciar secion
            </Button>
            <Grid container>
              <Grid item xs>
                <Link to= '/web-simple-con-datos' style={{textDecoration:'none', color:'black'}}>
                ¿Has olvidado tu contraseña?
                </Link>
              </Grid>
              <Grid item>
                <Link to='/registrarme' style={{textDecoration:'none', color:'black'}}>
                    No estoy registrado
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Container>
   
  );
}



