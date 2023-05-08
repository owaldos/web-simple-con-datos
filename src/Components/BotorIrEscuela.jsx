import React from 'react'
import { Grid, Box, ListItem,ListItemButton, ListItemText, ListItemIcon} from '@mui/material'
import { useNavigate } from 'react-router-dom';
import { ArrowBack } from '@mui/icons-material';




const BotonIrEscuela = ({number}) => {
  
  const navigate= useNavigate()
  
  const handleClick=()=>{
    navigate('/faceschool')
  }
  return (
   

    <Grid 
      container
      alignItems='center'
     
     
    >
       

        <Grid 
        item
        xs={12} 
        display='flex'
        justifyContent="flex-start"
        alignItems="center" 
        
        >
            
            <ListItem disablePadding onClick={handleClick}>
              <ListItemButton sx={{width:'100%', paddingY:'0', paddingLeft:3}}>
                <ListItemIcon alignItems='center' sx={{minWidth:40}}>
                 <ArrowBack color='primary.contrastText'  />
                </ListItemIcon>
                <ListItemText secondary={'Ir a la escuela'} />
              </ListItemButton>
            </ListItem>
                
           

          

        </Grid>



    </Grid>
 
  )
}

export default BotonIrEscuela