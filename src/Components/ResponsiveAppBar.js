import React, {useContext} from 'react';
import { Context } from '../store/appContext';


import { Grid, Box, Typography,Toolbar, AppBar,} from '@mui/material';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import Slide from '@mui/material/Slide';
import { useNavigate } from 'react-router-dom';

import './../App.css'
import Navegador from './Navegador'
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import { styled, } from '@mui/material/styles';
import {lightGreen} from '@mui/material/colors';
import logo from '../images/logopag.png.pagespeed.ce.AtdtHXJTVH.png'



const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  // background:'#D7FF8A ',
  // width:'100%',
  // padding:'5px',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '100%',
    },
  },
}));

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: '#3FE800 ',
  '&:hover': {
    backgroundColor: '#52b202',
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('xs')]: {
    marginLeft: theme.spacing(3),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color:'inherit'
}));




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
 const navigate = useNavigate()
 const handleClick=()=>{
  navigate('/faceschool')
 }


  return (
    <>
    <HideOnScroll {...props} >
      
        <AppBar elevation={1}   sx={{maxWidth:'900px', right:'auto'}} >
          
            <Grid container   alignItems="center"  sx={{ minWidth:350, mt:1, justifyContent:'center'}}>


              <Grid 
                container 
                alignItems="center"
                justifyContent={'center'}
              >
                <Grid  
                  
                  item xs={2}  
                  direction="row"
                  justifyContent="center"
                  alignItems="center"  

                  >
                   <div  onClick={()=>navigate('/signIn')} style={{ display: 'flex' ,justifyContent: 'center', marginLeft:5}}>

                    <img src= {logo} alt="logo" width={80} />
                   </div>

                </Grid>
                <Grid  
                  
                  item xs={9}  
                  direction="row"
                  justifyContent="flex-start"
                  alignItems="center"  
                  >

                  <Typography
                      variant="h6"
                      noWrap
                      component="h1"
                      color='main.contrastText'
                      sx={{mx: 1, fontWeight:'bold', marginLeft:3, fontSize: 'calc(10px + 1.3vw)' }}
                      onClick={handleClick}
                    >
                          Inversiones Vit Bikes de Vzla, C.A.
                    </Typography>
                 

                  
                
                  <Search>
                    <SearchIconWrapper>
                      <SearchIcon />
                    </SearchIconWrapper>
                    <StyledInputBase
                      placeholder="Search…"
                      inputProps={{ 'aria-label': 'search' }}
                    />
                  </Search>
                 
                  
                </Grid>
                    
                      
              
              </Grid>
                   
                 
              <Navegador/> 
            </Grid>
          
       

        </AppBar>
     
      
    </HideOnScroll>
     <Box sx={{paddingY:6}}></Box>
       
  </>
  );
}
export default ResponsiveAppBar;
                
                




              
           