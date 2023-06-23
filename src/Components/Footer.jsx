import React from 'react'
import { Typography, Box, Link } from '@mui/material'
import "../App.css"

const Footer = () => {
  return (
    <Box className='aparecer' sx={{ bgcolor: '#212F3D  ', p: 6}} component="footer">
    <Typography variant="h6" align="center" gutterBottom color='secondary'>
    Inversiones Vit Bikes de Vzla, C.A.
    </Typography>
    <Typography
      variant="text"
      align="center"
      color="primary"
      component="p"
      >
     Su tienda de Bicicletas, Motos electricas y Repuestos, en los Altos Mirandinos.<br></br>
     +58 424-13402720412-291.45.33 Siguenos en Instagram@vitbikes.vzla Siguenos en Instagram@ralviasanantonio.vzla
C.C. San antonio plaza, Nivel 1, Local 58, San antonio de los altos, Estado Miranda.
    </Typography>
    <Typography variant="body2" color="secondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
      Vit Bikes
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  </Box>
  )
}

export default Footer