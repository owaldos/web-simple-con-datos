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
        alignitems="center" 
        
        >
            
            <ListItem disablePadding onClick={handleClick}>
              <ListItemButton sx={{width:'100%', paddingLeft:3, margin:4, background:'#C1C5CA '}}>
                <ListItemIcon alignitems='center' sx={{minWidth:40}}>
                 <ArrowBack color='secondary'  />
                </ListItemIcon>
                <ListItemText primary={'Ir a la escuela'} />
              </ListItemButton>
            </ListItem>
                
           

          

        </Grid>



    </Grid>
 
  )
}

export default BotonIrEscuela