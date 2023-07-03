import React, {useContext, useState} from 'react'
import {Context} from '../../store/appContext'
import SectionHeading from '../SectionHeading'
import { Box ,Typography ,Grid, Button , TextField, Container, Paper} from '@mui/material'
import { Link, useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import logo from '../../images/logopag.png.pagespeed.ce.AtdtHXJTVH.png'
import Autocomplete from '@mui/material/Autocomplete';
import {useFormik } from 'formik'

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
    const [img, setImg]=useState(null)
    const [categoria, setCategoria] = useState('');
    const [inputValue, setInputValue] = useState(null);

    const navigate= useNavigate()





    const uploadImage=  (files)=>{

      let file = files[0];
      let reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = function() {
        setImg(reader.result) 
      };
      reader.onerror = function() {
        alert(reader.error);
      };
    }

//  codigo formik usando useFormik
    const formik = useFormik({
     
      initialValues:{
        nombre:'',
        precio:'',
        disponibles:'',
        categorias:'',
        descripcion:'',
        
      },
      validate:(values)=>{
        const errors={}

        if(values.nombre===''){
          
           errors.nombre='El articulo debe tener un nombre'
          
           
        }
        if(values.precio===''){
         
          errors.precio='El articulo debe tener un valor'
         
        }
        if(values.disponibles===''){
          errors.disponibles='no tiene sentido publicar un articulo sin tenerlo disponible'
          
        }
        if(categoria===''|| categoria===null){
          errors.categorias='debe colocar una categoria '
          
          
        }
         return errors
      },
      onSubmit:(values,{resetForm})=>{
        if(img){

          values.img=img
          values.categorias=categoria 
          resetForm();
          setImg('')
          setCategoria('')
          alert('El articulo esta publicado')
          actions.articuloNuevo(values)
        } else alert('Debes ingresar una imagen')
      },
    
    });
    
    
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
            {img
                ? <img  style={{objectFit:'cover', width:'100%'}} src={img}  alt ='foto de articulo'/>
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
            {/* el componente from recibe la funcion handleSubmit de formik     */}
          <Box component="form" onSubmit={formik.handleSubmit}  sx={{ mt: 1 }}>
            <TextField
              fullWidth
              id="nombre"
              label="Nombre del Articulo"
              name="nombre"
              color='secondary'
              // codigo formik
              value={formik.values.nombre}
              onChange={formik.handleChange}
              error={formik.touched.nombre && Boolean(formik.errors.nombre)}
              helperText={formik.touched.nombre && formik.errors.nombre}
              onBlur={formik.handleBlur}
              // fin codigo formik
              />
             <Box display={'flex'} justifyContent={'center'}>


              <TextField
                margin="normal"
                name="precio"
                label="Precio"
                type="text"
                id="precio"
                color='secondary'
                sx={{marginRight:'5px', marginY:1}}
                value={formik.values.precio}
                onChange={formik.handleChange}
                error={formik.touched.precio && Boolean(formik.errors.precio)}
                helperText={formik.touched.precio && formik.errors.precio}
                onBlur={formik.handleBlur}
                />
                <TextField
                margin="normal"
                name="disponibles"
                label="  Disponibles ?"
                type="number"
                id="disponibles"
                color='secondary'nombre
                sx={{marginLeft:'5px', marginY:1}}
                value={formik.values.disponibles}
                onChange={formik.handleChange}
                error={formik.touched.disponibles && Boolean(formik.errors.disponibles)}
                helperText={formik.touched.disponibles && formik.errors.disponibles}
                onBlur={formik.handleBlur}
                />
              </Box>
            
             
             <StyledTextarea     
              placeholder='Descripción' 
              name='descripcion'
              id='descripcion'   
              value={formik.values.descripcion}
              onChange={formik.handleChange}
             
                    
            />


           <Autocomplete
            disablePortal
            id="categorias"
            name='categorias'
            options={store.listaCategorias}
            sx={{ width: 300 }}
            value={categoria}
            onChange={(e, newValue) => {
              setCategoria(newValue);
             
            }}
            inputValue={inputValue}
            onInputChange={(event, newInputValue) => {
              setInputValue(newInputValue);
             
            }}
            renderInput={(params) => 
            <TextField 
            {...params}  
            fullWidth
            id="categorias"
            name='categorias'
            label="Categoria"
            type="selected"
            color='secondary'
            value={formik.values.categorias}
            onChange={formik.handleChange}
            error={formik.touched.categorias && Boolean(formik.errors.categorias)}
            helperText={formik.touched.categorias && formik.errors.categorias}
            onBlur={formik.handleBlur}
            

            />}
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