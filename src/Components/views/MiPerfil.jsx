import React, {useContext, useEffect} from 'react';
import {Context} from '../../store/appContext'
import '../../App.css';
import { Box, Card, CardMedia, Typography, Avatar, Grid, ListItem, ListItemText,ListItemIcon, List} from '@mui/material';
import { useParams } from 'react-router-dom';
import { blue } from '@mui/material/colors'
import { grey } from '@mui/material/colors'
import MiCard from '../MiCard'
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';

import BotonRegresar from '../BotonRegresar'

import HomeIcon from '@mui/icons-material/Home';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import SchoolIcon from '@mui/icons-material/School';
import CakeIcon from '@mui/icons-material/Cake';
import WorkHistoryIcon from '@mui/icons-material/WorkHistory';
import FavoriteIcon from '@mui/icons-material/Favorite';
import Diversity3Icon from '@mui/icons-material/Diversity3';
import WorkIcon from '@mui/icons-material/Work';



const ColorButton = styled(Button)(({ theme }) => ({
  color: theme.palette.getContrastText(blue[500]),
  backgroundColor: blue[500],
  '&:hover': {
    backgroundColor: blue[700],
  },
}));

const ColorButtonGrey = styled(Button)(({ theme }) => ({
  color: theme.palette.getContrastText(grey[500]),
  backgroundColor: grey[500],
  '&:hover': {
    backgroundColor: grey[700],
  },
}));



function MiPerfil() {
  
  const {store }= useContext(Context)
  
  const params= useParams().indexPersonal
  const docente= store.perfilDocente[params]

  const publicacionDocente= store.escuela[0].publicaciones.filter(publicacion=> publicacion.name===docente.name)
  
  useEffect(() => {
    window.scrollTo(0,0)
  
  }, [])
  
  return (
    <Card className='aparecer' style={{maxWidth:750, minHeight:900}}>
      <BotonRegresar  bg='#ffff' ir='/equipoTrabajo' text=" Regresar"/>
       <Box sx={{ justifyContent:'center', }}>
       
        <CardMedia
          component='img' 
          img={<Avatar/>}
          alt="imagen de la  publicacion"
          src={docente.img  || store.escuela[0].sinFoto}
          sx={{maxHeight:450, objectFit:'contain'}}
          
        />
       
       
      <Typography variant="h5" mt={1} ml={2} mb={0} gutterBottom>
        {docente.name}
      </Typography>
      <Grid container  >
        <Grid item xs={12} justifyContent={'end'} p={0}display='flex' mr={2} mb={2}>
            {store.usuario[0].name===docente.name &&

            <ColorButtonGrey 
              variant="contained"
              size="small"
              sx={{px:4, mr:2}}
              
            >
              
              Editar
            </ColorButtonGrey>
            }

            <ColorButton 
              variant="contained"
              size="small"
              sx={{px:4}}
              // onClick={handleClick}
              >
              
              Escribir
            </ColorButton>
        </Grid>

      </Grid>
          <div style={{borderTop :'1px solid #ccc',borderBottom :'1px solid #ccc', marginLeft:'15px', marginRight:'15px'}}>

            <List color="primary.contrastText">
        
            <ListItem  disablePadding>
             
                <ListItemIcon sx={{minWidth:35}}>
                  <SchoolIcon />
                </ListItemIcon>
                <ListItemText primary={<spam>Titulos: <b>{docente.titulos}</b></spam>} />
             
            </ListItem>

            <ListItem  disablePadding>
              <ListItemIcon sx={{minWidth:35}}>
                <WorkIcon/> 
              </ListItemIcon>
              <ListItemText primary={<spam style={{margin:'0px'}}> Se desempeña como: <b>{docente.cargo}</b></spam>} />
            </ListItem>

            <ListItem  disablePadding>
              <ListItemIcon sx={{minWidth:35}}>
                <Diversity3Icon/>
              </ListItemIcon>
            <ListItemText primary={<spam>Atiende una Matricua de: <b>{docente.matricula}</b></spam>} />
            </ListItem>

            <ListItem  disablePadding>
              <ListItemIcon sx={{minWidth:35}}>
                <HomeIcon />
              </ListItemIcon>
              <ListItemText primary={<spam>Vive en: <b>{docente.vive}</b></spam>} />
            </ListItem>

            <ListItem  disablePadding>
              <ListItemIcon sx={{minWidth:35}}>
                <LocationOnIcon/> 
              </ListItemIcon>
              <ListItemText primary={<spam>Es de : <b>{docente.esDe}</b></spam>} />
            </ListItem>

            <ListItem  disablePadding>
              <ListItemIcon sx={{minWidth:35}}>
                <WorkHistoryIcon/>
              </ListItemIcon>
              <ListItemText primary={<spam>trabajó en: <b>{docente.trabajoEn}</b></spam>} />
            </ListItem>

            <ListItem  disablePadding>
              <ListItemIcon sx={{minWidth:35}}>
               <FavoriteIcon/>
              </ListItemIcon>
              <ListItemText primary={<spam>Estado civil: <b>{docente.estadoCivil}</b></spam>} />
            </ListItem>

            <ListItem  disablePadding>
              <ListItemIcon sx={{minWidth:35}}>
                <CakeIcon />
              </ListItemIcon>
              <ListItemText primary={<spam>Fecha de nacimiento: <b>{docente.fechaNacimiento}</b></spam>} />
            </ListItem>
         
        </List>
      </div>
      <div style={{borderBottom :'1px solid #ccc', marginLeft:'15px', marginRight:'15px'}}>

      <Typography variant='h5'component={'P'}  align="center" sx={{fontWeight:'bold'}}>
        PUBLICACIONES
      </Typography>
      </div>

      <Box sx={{ justifyContent:'center'}}>

      {publicacionDocente.length===0
      ?
        <p style={{textAlign:'center'}}>No tiene publicaciones</p>
      :
      publicacionDocente.map((publicacion, index)=>(
        
        <MiCard key={index} datos={publicacion} index={index}/>
        
      ))}
       
         
    </Box>
      </Box>
    </Card>
  );
}

export default MiPerfil;
