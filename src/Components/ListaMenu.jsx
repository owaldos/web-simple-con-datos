import React from 'react'
import { Grid} from '@mui/material'
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import "../App.css"

const ListaMenu = ({array, call}) => {

  
  const handleClick=(ruta)=>{
    
      call(ruta)
   
  }
  return (
    <Grid className='aparecer ' container p={1} >
          <Grid 
            container 
            item  
            rowSpacing={1} 
            columnSpacing={{ xs: 1, sm: 2, md: 3 }} 
            justifyContent='start'
           
            >
            
            
            {array.map((i, index)=>(
              
                  <Grid key={i} container item sm={4} xs={6} md={3}  >
                    <ListItemButton  
                   
                    sx={{ 
                      border:'1px solid #B2B2B2', 
                      borderRadius: '7px', 
                      background:'rgba(225,225,225,0.6)',
                      display:'flex',
                      paddingX:1,
                      backdropFilter:'blur(10px)'
                      
                     }}
                    onClick={()=>handleClick(index)}
                    >
                     
                      <Grid item xs={12} display={'inline'} justifyContent={'center'}> 
                        
                          <ListItemText 
                           
                           secondary={<p style={{color:'black',textShadow: '1px 1px 20px white ,-1px -1px 20px white', fontWeight:'bold', display:'inline'}}>{i}</p>}  />
                        </Grid>
                    </ListItemButton>
                  </Grid>

            ))}

          </Grid>

         </Grid>  
  )
}

export default ListaMenu