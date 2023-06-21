import React,{useContext}from 'react'
import { Context } from '../store/appContext' 
import { Box , IconButton, Avatar, Grid} from '@mui/material'


const CuadroDialogo = ({datos}) => {
    const {store}= useContext(Context)
   
  return (
    <Grid Container display='flex' alignItems='end' spacing={2}>
        <Grid item   xs={2}>
            <IconButton  sx={{ p: 0 }} >
               <Avatar alt="foto usuario" src={datos.avatar}/>
           </IconButton>

        </Grid>
        <Grid item xs={8} >

            <Box sx={{maxWidth:'90%',background:'#C1C5CA ', padding:'10px',borderRadius:2, margin:1}}>

            {datos.contenido}  
            </Box>
        </Grid>
       
  
    
    </Grid>
  )
}

export default CuadroDialogo