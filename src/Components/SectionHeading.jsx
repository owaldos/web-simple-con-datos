import React from 'react'
import { Grid, Box, Typography, Paper } from '@mui/material'
import Button from '@mui/material/Button';
import { blue } from '@mui/material/colors'
import { styled } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';
import "../App.css"


const ColorButton = styled(Button)(({ theme }) => ({
  color: theme.palette.getContrastText(blue[500]),
  backgroundColor: blue[500],
  '&:hover': {
    backgroundColor: blue[700],
  },
}));


const SectionHeading = ({number, name,boton}) => {
 
  const navigate= useNavigate()
  
  const handleClick=()=>{
    navigate('/Mi Perfil')
  }
  return (
    <Paper className='aparecer' elevation={0} sx={{ my:0}}>

    <Grid 
      container
      alignItems='center'
      sx={{ my:1}}
     
    >
       

        <Grid 
        item
        xs={boton=== undefined ? 12:8 } 
        display='flex'
        justifyContent="flex-start"
        alignItems="center" 
        
        >
            <Box  sx={{mx:5}}> 
                <Typography variant="h5" color='primary.contrastText'> {name} </Typography>
                
            </Box>
           
            <Box>
            <Typography variant="p" color='error'> {number}  </Typography>
            </Box> 
 

        </Grid>

        { boton === true && 

        <Grid
        item
        xs={4} 
        display='flex'
        alignItems="center"
        justifyContent={'end'}
        paddingRight={2}
        mt={2}
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
          }

    </Grid>
  </Paper>
  )
}

export default SectionHeading