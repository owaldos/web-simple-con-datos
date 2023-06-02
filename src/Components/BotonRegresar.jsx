import React from 'react'
import { Grid,  ListItem,ListItemButton, ListItemText, ListItemIcon} from '@mui/material'
import { useNavigate } from 'react-router-dom';
import ReplyAllIcon from '@mui/icons-material/ReplyAll';




const BotonRegresar = ({ml,mr,mt,mb,mx,my,m,bg, ir,text}) => {
  
  const navigate= useNavigate()
  
  const handleClick=()=>{
    navigate(ir)
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
              <ListItemButton 
                sx={{
                  width:'100%', 
                  paddingLeft:3, 
                  margin:m,
                  marginX:mx,
                  marginY:my,
                  marginTop:mt,
                  marginBottom:mb, 
                  marginLeft:ml,
                  marginRight:mr,
                  background:bg

                  }}>
                <ListItemIcon alignitems='center' sx={{minWidth:40}}>
                 <ReplyAllIcon  color='primary.contrastText'  />
                </ListItemIcon>
                <ListItemText primary={text} />
        
              </ListItemButton>
            </ListItem>
                
           

          

        </Grid>



    </Grid>
 
  )
}

export default BotonRegresar