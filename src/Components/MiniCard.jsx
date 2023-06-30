import  React from 'react';

import Card from '@mui/material/Card';

import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';

import Typography from '@mui/material/Typography';

import {   Button,  Divider, } from '@mui/material';

import '../App.css'
import { useNavigate } from 'react-router-dom';








export default function RecipeReviewCard ({datos, index, categoria}) {

  const navigate= useNavigate()
  
  return (
    <Button onClick={()=>navigate(`/web-simple-con-datos/producto/${categoria}/${index}`)}>

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
        {datos.name.slice(0,35)}...
        
        </Typography>
      </CardContent>
       
    </Card>
    </Button>
  );
};