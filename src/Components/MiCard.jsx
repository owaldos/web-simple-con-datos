import  React,{  useRef} from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';

import Typography from '@mui/material/Typography';

import '../App.css'





export default function RecipeReviewCard ({datos, index}) {

 
 
  const card= useRef(null)
 


  return (
    <Card  className='aparecer' ref={card}  raised={true} sx={{ Width:'100px' , marginX:'auto', marginY: 1}} >
   
        <CardMedia
          component='img' 
          // image={datos.img}
          alt="imagen de la  publicacion"
          src={datos.img}
           sx={{maxHeight:450, objectFit:'cover'}}
          
        />
        
          
     

    

   
      <CardContent sx={{paddingY:1}}>
        <Typography variant="h6" color="text.secondary">
          {datos.name}
        </Typography>
        <Typography variant="h4" color="black">
          USD ${datos.precio}
        </Typography>
      </CardContent>


    

          

             
     
      
    </Card>
  );
};