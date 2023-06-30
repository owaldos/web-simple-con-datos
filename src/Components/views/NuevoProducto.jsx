import React, {useContext} from 'react'
import {Context} from '../../store/appContext'
import SectionHeading from '../SectionHeading'
import { Box ,Typography ,Grid, Button , TextField, Container, Paper} from '@mui/material'
import { Link, useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import logo from '../../images/logopag.png.pagespeed.ce.AtdtHXJTVH.png'

const  StyledTextarea = styled.textarea`
width:100%;
height:100px; 
border:1px solid #888D9B ;
border-radius:5px;
padding:10px;
font-size:1em;

`;


const NuevoProducto = () => {
    const {store, actions}= useContext(Context)
    const navigate= useNavigate()

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


    const uploadImage=  (files)=>{

      let file = files[0];

      let reader = new FileReader();
    
      reader.readAsDataURL(file);
    
      reader.onload = function() {
        actions.fotoArticulo(reader.result);
      };
    
      reader.onerror = function() {
        console.log(reader.error);
      };
     


}

    
  return (
    <>
     <SectionHeading 
      name={store.config[0]} 
      color='#212F3D '
      regresar={true}
      ruta='/menu'
    />
    
      <Container sx={{display:'flex', justifyContent: 'center'}}>
        <Paper elevation={4} sx={{maxWidth:'490px' ,  marginTop:'10px'}}>


        
         <label  
            for='img'  
            style={{width:'100%', minHeight:'200px', maxHeight:'250px', border:'1px dotted #566573', display:'flex', justifyContent:'center', background: '#212F3D  '}}
            >
            {store.foto 
                ? <img  style={{objectFit:'cover', width:'100%'}} src={store.foto}  alt ='foto'/>
                : <div style={{display:'flex', justifyContent: 'center', flexDirection:'column', alignItems:'center', padding:5}}>
                    <CloudUploadIcon color="secondary"  style={{ fontSize:150}}/>
                    <Typography variant="text" color="primary" component={'p'}>Click para subir Imagen</Typography>
                </div>
            
              }
              
        </label>
            <input 
             id='img'
             type="file" 
             hidden
             onChange={e => uploadImage(e.target.files)} 
           
            />
          
          
            <Box
               sx={{
                 marginX: 2,
                 display: 'flex',
                 flexDirection: 'column',
                 alignItems: 'center',
               }}
               >
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              required
              fullWidth
              id="nombre"
              label="Nombre del Articulo"
              name="nombre"
              color='secondary'
              />
              <Box display='flex' justifyContent='space-around'  >

              <TextField
                margin="normal"
                required
                name="precio"
                label="Precio"
                type="text"
                id="precio"
                color='secondary'
                sx={{marginRight:'5px', marginY:1}}
                />
                <TextField
                margin="normal"
                required
                name="Disponibles"
                label="  Disponibles ?"
                type="number"
                id="Disponible"
                color='secondary'
                sx={{marginLeft:'5px', marginY:1}}
                
                />
              </Box>
             
             <StyledTextarea 
              required     
              placeholder='Descripción' 
                         
            />
            
          

            
           
            <Button
              type="submit"
              fullWidth
              color='secondary'
              variant="contained"
              sx={{ mt: 1, mb: 2 }}
              >
              Publicar
            </Button>
           
          </Box>
        </Box>
      </Paper>
      </Container>
    
    

    </>
  )
}

export default NuevoProducto