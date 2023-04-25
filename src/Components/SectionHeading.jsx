import React from 'react'
import { Grid, Box, Typography, Paper } from '@mui/material'
import Button from '@mui/material/Button';
import { blue } from '@mui/material/colors'
import { styled } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';



const ColorButton = styled(Button)(({ theme }) => ({
  color: theme.palette.getContrastText(blue[500]),
  backgroundColor: blue[500],
  '&:hover': {
    backgroundColor: blue[700],
  },
}));


const SectionHeading = ({number}) => {
  
  const navigate= useNavigate()
  
  const handleClick=()=>{
    navigate('/Mi Perfil')
  }
  return (
    <Paper  sx={{ mt:3}}>

    <Grid 
      container
      alignItems='center'
      sx={{ my:1}}
     
    >
       

        <Grid 
        item
        xs={8} 
        display='flex'
        justifyContent="flex-start"
        alignItems="center" 
        
        >
            <Box  sx={{mx:5}}> 
                <Typography variant="h6" color='primary.contrastText'>Perfiles  </Typography>
                
            </Box>

            <Box>
            <Typography variant="p" color='error'> {number}  </Typography>
            </Box> 
 

        </Grid>


        <Grid
        item
        xs={2} 
        alignItems="center"
        >
          <Box >

              <ColorButton 
                variant="contained"
                size="small"
                sx={{px:4, my:1}}
                onClick={handleClick}
                >
                
                Crear
              </ColorButton>
          </Box>
          
        </Grid>

    </Grid>
  </Paper>
  )
}

export default SectionHeading