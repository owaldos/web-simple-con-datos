import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { Diversity1Outlined,HomeOutlined, ManageSearchOutlined, MessageOutlined } from '@mui/icons-material';
import { Grid, IconButton} from '@mui/material';
import logo from '../image/transparent-student-icon-blog-logo-school-5eab0201b5f501.3688803115882654737453.png'
import useScrollTrigger from '@mui/material/useScrollTrigger';
import Slide from '@mui/material/Slide';
import MenuIcon from '@mui/icons-material/Menu';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import LocalLibraryOutlinedIcon from '@mui/icons-material/LocalLibraryOutlined';




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
  
    

  return (
    <HideOnScroll {...props} >
    <Container disableGutters="true" >
      <AppBar >
        <Toolbar disableGutters='true' sx={{justifyContent:'center'}} >
        <Grid container   alignItems="center"  sx={{maxWidth:900, minWidth:650}}>

          <Grid  
            container 
            item xs={10} 
            direction="row"
            justifyContent="flex-start"
            alignItems="center"
            
          >
            
            <img src= {logo} alt="logo" width="30px" height="30px" />
           

            <Typography
              variant="h5"
              noWrap
              component="a"
              color='  #515A63 ' 
              
              sx={{
                mx: 2,
                fontFamily: 'monospace',
                fontWeight: 700,
                letterSpacing: '.1rem',
                textDecoration: 'none',
                overflow:'hidden'
              }}
            >
             U.E La Rosaleda 
            </Typography>
            
          </Grid>
          


          <Grid  
            container 
            item 
            xs={2}  
            justifyContent="flex-end"
            alignItems="center" 
          > 
          
         
            <IconButton color='primary.contrastText'>
              <ManageSearchOutlined/>
            </IconButton>

            <IconButton  color='primary.contrastText'>
              <MessageOutlined/>
            </IconButton>
          </Grid>




           {/* botones de navegacion */}
          <Grid 
            item
            container
            xs={12}
            direction="row"
            justifyContent="center"
            alignItems="center"
            columnSpacing={{xs:7, md:12}}
          >
            <Grid item >

            <IconButton  color='primary.contrastText'>
              <HomeOutlined/>
            </IconButton>
            </Grid>
            
            <Grid item>

            <IconButton  color='primary.contrastText'>
              <Diversity1Outlined/>
            </IconButton>
            </Grid>

            <Grid item>

            <IconButton  color='primary.contrastText'>
              <LocalLibraryOutlinedIcon/>
            </IconButton>
            </Grid>

            <Grid item>

            <IconButton  color='primary.contrastText'>
              <NotificationsNoneIcon/>
            </IconButton>
             
            </Grid>

            <Grid item>

            <IconButton  color='primary.contrastText'>
              <MenuIcon/>
            </IconButton>
            </Grid>

          </Grid>
             


        </Grid>
          </Toolbar>
      </AppBar>
    </Container>
    </HideOnScroll>
       
  );
}
export default ResponsiveAppBar;
              
           