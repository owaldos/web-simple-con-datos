import React from 'react'
import errors from '../image/43629498_1678098508968761_4966370374850707456_n.jpg'
import { Box } from '@mui/material' 
import ResponsiveAppBar from './ResponsiveAppBar'
import Footer from './Footer'


const Error = () => {
  return (
    <>
        <ResponsiveAppBar/>
    <Box display={'flex'} sx={{mt:3}}>

    <img src={errors} alt="trabajando" width="100%" style={{marginLeft:'auto', marginRight:'auto' }}/>
    </Box>
    <Footer/>
    </>
  )
}

export default Error