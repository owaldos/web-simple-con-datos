import React, { useEffect, useContext} from 'react';
import {Context} from '../../store/appContext'
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
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



export default function SignUp() {

  const {store, actions}= useContext(Context)
  const navigate=useNavigate()


  useEffect(() => {
    window.scrollTo(0,0)
   
  
  
  }, [])
  

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    
    let datos={
      key: data.get('key'),
      usuario: data.get('usuario'),
      password: data.get('password'),
    };
    console.log(datos)
    actions.registro(datos)
    if(store.registro.key===datos.key){
      navigate('/signIn')
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
            Registro
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  name="key"
                  required
                  fullWidth
                  type="password"
                  id="key"
                  label="Clave para registro es 123456"
                  autoFocus
                  color= 'secondary'
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="usuario"
                  label="Usuario"
                  name="usuario"
                  autoComplete="family-name"
                  color= 'secondary'

                />
              </Grid>
             
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                  color='secondary'
                />
              </Grid>
              
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color='secondary'
              sx={{ mt: 3, mb: 2 }}
            >
              Registrarme
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link to={'/signIn'} style={{textDecoration:'none', color:'black'}} >
                Ya estas registrado? ingresa aquí.
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 5 }} />
      </Container>
   
  );
}
