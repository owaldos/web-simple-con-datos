import React from 'react'
import {  Box, Grid, IconButton, Typography, } from '@mui/material'
import ReplyAllIcon from '@mui/icons-material/ReplyAll';
import "../App.css"
import { useNavigate } from 'react-router-dom';



const SectionHeading = ({name, color, regresar, ruta}) => {
  const navigate= useNavigate()

  const handleClick = () => {
     navigate(ruta)
  }

  return (
    <Grid container className='aparecer'  sx={{ my:0, background:color, paddingY:1 , display: 'flex', justifyContent: 'center', alignItems: 'center'} } bg='secondary'>
      <Grid item xs={!regresar?0:1}>

          {regresar &&
          
            <IconButton onClick={handleClick}>
              <ReplyAllIcon  color='secondary'  />
            </IconButton>
          }
      </Grid>

      <Grid item xs={!regresar?12:10}>
        <Box justifyContent={'center'} display='flex'>

          <Typography variant="h6" color='secondary' > {name} </Typography>
        </Box>
      </Grid>




              
  </Grid>
  )
}

export default SectionHeading