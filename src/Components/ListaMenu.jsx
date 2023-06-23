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
                      background:'rgba(225,225,225,0.9)',
                      display:'flex',
                      paddingX:1,
                      backdropFilter:'blur(10px)'
                      
                     }}
                    onClick={()=>handleClick(index)}
                    >
                      <Grid item xs={2} sx={{display:'flex', marginRight:1}}> 
                        <ListItemIcon  >
                          {index % 2 === 0 
                          ? 
                          <InboxIcon  color='black' /> 
                          : <MailIcon color='black' />}
                        </ListItemIcon>
                        
                      </Grid>
                      <Grid item xs={10} display={'inline'}> 
                        
                          <ListItemText 
                            secondary={<p style={{color:'black',textShadow: '1px 1px 30px #3FE800 ,-1px -1px 1em white', fontWeight:'bold'}}>{i}</p>}  />
                        </Grid>
                    </ListItemButton>
                  </Grid>

            ))}

          </Grid>

         </Grid>  
  )
}

export default ListaMenu