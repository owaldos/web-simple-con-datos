import React,{useContext} from 'react';
import {Context} from '../store/appContext'
import {Home} from '@mui/icons-material';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import SwitchAccountIcon from '@mui/icons-material/SwitchAccount';
import { Grid, IconButton,  Badge, Box} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

import AddBusinessIcon from '@mui/icons-material/AddBusiness';
import { NavLink, Link} from 'react-router-dom';
import './../App.css'
import { Typography,  } from '@mui/material'



function Navegador() {
    const {store} = useContext(Context)

    const handleScroll=()=>{
        window.scrollTo(0,3000)
        console.log('Scroll')
    }
   
  
  return (
    <Box sx={{width:'100%'}}>


    <Grid container   alignItems="center"  sx={{ minWidth:350, background:'#212F3D ' , width:'100%'}}>


        <Grid 
        item
        container
        direction="row"
        justifyContent="start"
        alignItems="center"
        columnSpacing={{xs:2}}
        >
        <Grid item >
            <NavLink 
            to={'/web-simple-con-datos'} 
            className={({ isActive }) =>
                isActive ? "active" : ''

            }
            style={{textDecoration:'none',marginLeft:'24px'}}
            >
                
           
                <IconButton  color='secondary' sx={{paddingX:0}} >
                <AddBusinessIcon />
                 
                <Typography 
                variant="body2" 
                component='p'  
                color= 'secondary'
                display='inline'
               
                >
                    Catálogo
                </Typography>
                 </IconButton>
           
            </NavLink>
        </Grid>
        

        <Grid item>
            <Link to={''} onClick={handleScroll}
                className={({ isActive, isPending }) =>
                isActive
                ? "active"
                : isPending
                ? "pending"
                : ""
                }
                style={{textDecoration:'none'}}
                >
          
                <IconButton color='secondary'sx={{paddingX:0}}>
                
                <SwitchAccountIcon />

                <Typography 
                variant="body2" 
                component='p'  
                color= 'secondary'
                display='inline'
                
                >
                    Contáctanos
                </Typography>
                </IconButton >
             
            </Link>
        </Grid>

            


        <Grid item>
            <NavLink to={'/menu'}
            className={({ isActive, isPending }) =>
            isActive
            ? "active"
            : isPending
            ? "pending"
            : ""
        }  
        style={{textDecoration:'none'}}
        >
            {store.registro.login &&

                <IconButton  color='secondary'sx={{paddingX:0}}>
                <MenuIcon />
                <Typography 
                variant="body2" 
                component='p'  
                color= 'secondary'
                display='inline'
                
                >
                    Contáctanos
                </Typography>
                </IconButton>
            }
           
            </NavLink>
        </Grid>

        </Grid>
        


    </Grid>
    
                </Box>
  );
}
export default Navegador;
              
           