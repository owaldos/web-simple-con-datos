import React from 'react'
import {  Box, Typography, } from '@mui/material'

import "../App.css"



const SectionHeading = ({name, color,}) => {

  return (
    <Box className='aparecer'  sx={{ my:0, background:color, paddingY:1 , display: 'flex', justifyContent: 'center'} } bg='secondary'>

    
     <Typography variant="h6" color='secondary' > {name} </Typography>
              
  </Box>
  )
}

export default SectionHeading