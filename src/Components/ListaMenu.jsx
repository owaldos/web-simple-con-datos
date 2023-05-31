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
    <Grid className='aparecer'container p={2}>
          <Grid container item  rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} justifyContent='start'>
            
            
            {array.map((i, index)=>(
              
                  <Grid key={i} container item sm={4} xs={6} >
                    <ListItemButton  
                    sx={{ border:'1px solid #cfd8dc', borderRadius: '7px', background:'#ffff',display:'block' }}
                    onClick={()=>handleClick(index)}
                    >
                      <Grid item xs={12}> 
                        <ListItemIcon>
                            {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                          </ListItemIcon>
                        
                      </Grid>
                      <Grid item xs={12} display={'block'}> 
                        
                          <ListItemText primary={i} />
                        </Grid>
                    </ListItemButton>
                  </Grid>

            ))}

          </Grid>

         </Grid>  
  )
}

export default ListaMenu