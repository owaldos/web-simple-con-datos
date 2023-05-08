import React,{ useContext} from 'react'
import {Context} from '../store/appContext'
import { Grid, Avatar, Typography, Divider, } from '@mui/material'
import { grey } from '@mui/material/colors'
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';


const ColorButton = styled(Button)(({ theme }) => ({
    color: theme.palette.getContrastText(grey[500]),
    backgroundColor: grey[500],
    '&:hover': {
      backgroundColor: grey[700],
    },
  }));



const EtiquetaNotificaciones = ({datos,index}) => {

  const {store, actions}= useContext(Context)

  const handleClick= ()=>{
    actions.setvistos(index)
  }
  
    
  return (
    <>
    <Grid 
      container 
      bgcolor={store.usuario[0].notificaciones[index].visto===false? '#EFF1F1 ':'#ffff'}   
      sx={{minWidth:350}}>
       <Grid item xs={3} sm={2} >
        <Avatar  src={datos.img||''} sx={{ width: 60, height: 60, m:2 }}/>
       </Grid>

       <Grid  container item xs={9}  sm={10} alignItems={'center'} pt={1}>

         <Grid container item xs={12} >
           <Grid item xs={8}>
           <Typography variant="h6" component="h6"> {datos.name}</Typography> 
           <Typography variant="body2" component="p" > {datos.cargo}</Typography> 
           </Grid>
           <Grid item xs={4} pr={2} display={'flex'} justifyContent={'end'} alignItems={'center'}>
             <Typography variant="body2" component="p" paragraph={true}>{datos.fecha}</Typography> 
           </Grid>
         </Grid>

         <Grid item xs={12} display={'flex'} justifyContent={'end'} pr={2} pb={1} alignItems={'start'}>
         <ColorButton 
                variant="contained"
                size="small"
                sx={{px:4}}
                onClick={handleClick}
                >
                
                Leer
              </ColorButton>
         </Grid>
         

       </Grid>

    </Grid>
    <Divider/>


    </>
  )
}

export default EtiquetaNotificaciones