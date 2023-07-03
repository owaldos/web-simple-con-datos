import  React, {useContext, useState} from 'react';
import {Context} from '../store/appContext'
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import {   Button,  CardHeader,  Divider, IconButton} from '@mui/material';
import '../App.css'
import { useNavigate } from 'react-router-dom';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';






export default function RecipeReviewCard ({datos, index, categoria}) {
  const {store, actions}= useContext(Context)
  const [open, setOpen]= useState(false)
  const navigate= useNavigate()

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };


  const handleClick=()=>{
    if(store.modoBorrar){
      handleClickOpen()
    } else  navigate(`/web-simple-con-datos/producto/${categoria}/${index}`)
  }

  const handleBorrar =()=>{
    handleClose()
    actions.borrarArticulo(categoria,index)

  }
  

  const handleCancelar =()=>{
    handleClose()
    actions.modoBorrar(false)
    navigate('/menu')
  }
  
  return (
    <>
    <Button onClick={handleClick}>

    <Card  className='aparecer '   raised={true} sx={{ width:150 , marginX:'auto', marginY: 1}} >
        
        <CardMedia
          component='img' 
          // image={datos.img}
          alt="imagen de la  publicacion"
          src={datos.img}
          
          sx={{height:120 , objectFit:'cover'}}
          
          />
       
       <Divider/>

    

   
      <CardContent sx={{paddingX:0}}>
        <Typography variant="body1" color="black" sx={{  fontWeight:'bold'}}>
            
          USD$ {datos.precio}
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{fontSize:'10px'}}>
        {datos.nombre.slice(0,35)}...
        
        </Typography>
      </CardContent>
       
    </Card>
    </Button>
        <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        >
        <DialogTitle id="alert-dialog-title">
         ALERTA 
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Estas seguro que quieres borrar  el articulo {datos.nombre}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button variant= 'contained' onClick={handleBorrar}>Borrar</Button>
          <Button  variant= 'contained'onClick={handleCancelar} autoFocus>
            Cancelar
          </Button>
        </DialogActions>
      </Dialog>
   </>
  );
};