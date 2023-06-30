import React from 'react'
import { Typography, Box, IconButton , List, ListItemButton} from '@mui/material'
import "../App.css"
import { Link } from 'react-router-dom'
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import InstagramIcon from '@mui/icons-material/Instagram';
import StoreMallDirectoryIcon from '@mui/icons-material/StoreMallDirectory';



const Footer = () => {
  return (
    <Box className='aparecer' sx={{ bgcolor: '#212F3D  ', p: 6}} component="footer" justifyContent={'center'}>
      <Box  display='flex' justifyContent={'center'} sx={{ bgcolor: '#3FE800', borderRadius:'50px' }}>

        <img src={require('../images/footer.webp')} alt='logo Vit Bikes'/>
      </Box>
    <Typography variant="h5" align="center" gutterBottom color='primary'>
      Inversiones Vit Bikes de Venezuela, C.A.
    </Typography>
    <Typography
      variant="text"
      align="center"
      color="secondary"
      component="p"
      >
    
     Su tienda de Bicicletas, Motos electricas y Repuestos, en los Altos Mirandinos. <br/>
    </Typography>
    <Box display="flex" justifyContent={'center'}>
      
      <List>
      <ListItemButton >
        <a style={{textDecoration:'none'}} target="_blank" href={
          navigator.userAgent.match(/Android/i) ||
           navigator.userAgent.match(/webOS/i) ||
            navigator.userAgent.match(/iPhone/i) ||
             navigator.userAgent.match(/iPad/i) || 
             navigator.userAgent.match(/iPod/i) || 
             navigator.userAgent.match(/BlackBerry/i) ||
              navigator.userAgent.match(/Windows Phone/i) 
              ?
              'https://api.whatsapp.com/send?phone=5804122914533'
              :
              'https://web.whatsapp.com/send?phone=5804122914533'
         }>

          <WhatsAppIcon color='secondary'/>     
                    
            <Typography 
              variant="body2" 
              component='p'  
              color= 'primary'
              display='inline'
              >
                  +58 0412-2914533
              </Typography>
        </a>
        </ListItemButton>

        <ListItemButton  display='flex' justifyContent='center'>
        <a style={{textDecoration:'none'}} target="_blank" href={
          navigator.userAgent.match(/Android/i) ||
           navigator.userAgent.match(/webOS/i) ||
            navigator.userAgent.match(/iPhone/i) ||
             navigator.userAgent.match(/iPad/i) || 
             navigator.userAgent.match(/iPod/i) || 
             navigator.userAgent.match(/BlackBerry/i) ||
              navigator.userAgent.match(/Windows Phone/i) 
              ?
              'https://api.whatsapp.com/send?phone=5804241340272'
              :
              'https://web.whatsapp.com/send?phone=5804241340272'
         }>

          <WhatsAppIcon color='secondary'/>     
                    
            <Typography 
              variant="body2" 
              component='p'  
              color= 'primary'
              display='inline'
              >
                  +58 0424-1340272
              </Typography>
        </a>

        </ListItemButton>
    

        <ListItemButton >
              <a 
                style={{textDecoration:'none'}} 
                href={'https://www.instagram.com/vitbikes.vzla/?hl=es'}  
                target='_blank'   
                >
                 <InstagramIcon color ='secondary'/>    

                <Typography 
                  variant="body2" 
                  component='p'  
                  color= 'primary'
                  display='inline'
                  >
                    @vitbikes.vzla
                  </Typography>
              </a>
        </ListItemButton>

        <ListItemButton >
        <a 
          style={{textDecoration:'none'}} 
          href={'https://www.instagram.com/p/CXY2aEzJCSs/'}  
          target='_blank'   
          >
        <InstagramIcon color ='secondary'/> 
                    
            <Typography 
              variant="body2" 
              component='p'  
              color= 'primary'
              display='inline'
              >
                @ralviasanantonio.vzla
              </Typography>
          </a>
        </ListItemButton>
      </List>
    </Box>
    <Typography
      variant="body1"
      align="center"
      color="primary"
      component="p"
      >
    
    C.C. San antonio plaza, Nivel 1, Local 58, San antonio de los altos, Estado Miranda.
    </Typography>
           
    
     
     
    <Typography variant="body2" color="secondary" align="center">
      {'Copyright © '}
      <Link style={{color:'#3FE800 '}} to={''}>
      Vit Bikes
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  </Box>
  )
}

export default Footer