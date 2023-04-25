import React, {useContext} from 'react';
import { Context } from '../store/appContext';


import { Grid, Box,Container, Typography,Toolbar, AppBar, Divider} from '@mui/material';
import logo from '../image/transparent-student-icon-blog-logo-school-5eab0201b5f501.3688803115882654737453.png'
import useScrollTrigger from '@mui/material/useScrollTrigger';
import Slide from '@mui/material/Slide';
import { Link } from 'react-router-dom';
import  valentina from '../image/valentina.jpeg'
import './../App.css'
import Navegador from './Navegador'
import MiAvatar from './MiAvatar'


//  esta funcion es para que la barra navegadora se mueva
// cuado se hace scroll
function HideOnScroll(props) {
  const { children, window } = props;
 
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
  });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}



function ResponsiveAppBar(props) {
 
 const {store }=useContext(Context);

  return (
    <>
    <HideOnScroll {...props} >
      <Container disableGutters={true} >
        <AppBar elevation={0} >
          <Toolbar disableGutters={true} sx={{justifyContent:'center'}} >
            <Grid container   alignItems="center"  sx={{maxWidth:900, minWidth:350, mt:1}}>


              <Grid 
                container 
                alignItems="center"
              >
                <Grid  
                  container 
                  item xs={9} 
                  direction="row"
                  justifyContent="flex-start"
                  alignItems="center"  
                  >

                  <Box  ml={1}>
                    <img src= {logo} alt="logo" width="30px" height="30px" />
                  </Box>

                
                  <Link  to={'/faceschool'} className="schoolName">

                    <Typography
                      variant="h6"
                      noWrap
                      component="div"
                      color='main.contrastText'
                      sx={{mx: 1,}}
                    >
                           {store.escuela}
                    </Typography>
                  </Link>
                  
                </Grid>
                    
                      
                <Grid  
                  container 
                  item 
                  xs={3}  
                  justifyContent="flex-end"
                  alignItems="center" 
                >  
                  <MiAvatar foto={valentina}/>
                </Grid>


              </Grid>
                   
                 
              <Navegador/> 
            </Grid>
          </Toolbar>
       <Divider/>
        </AppBar>
      </Container>
    </HideOnScroll>
     <Box sx={{paddingY:4}}></Box>
       
  </>
  );
}
export default ResponsiveAppBar;
                
                




              
           