import React,{useContext} from 'react';
import {Context} from '../store/appContext'
import {Home} from '@mui/icons-material';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import SwitchAccountIcon from '@mui/icons-material/SwitchAccount';
import { Grid, IconButton,  Badge,  Tooltip} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import LocalLibrary from '@mui/icons-material/LocalLibrary';
import AddBusinessIcon from '@mui/icons-material/AddBusiness';
import { NavLink} from 'react-router-dom';
import './../App.css'
import { Typography } from '@mui/material'



function Navegador() {
    const {store} = useContext(Context)
   
  
  return (

    <Grid container   alignItems="center"  sx={{ minWidth:350, background:'#212F3D '}}>


        <Grid 
        item
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
        columnSpacing={{xs:2,sm:8, md:14}}
        >
        <Grid item >
            <NavLink 
            to={'/web-simple-con-datos'} 
            className={({ isActive }) =>
                isActive ? "active" : ''

            }
          
            >
                
           
                <IconButton  color='secondary' sx={{paddingX:0}}>
                <AddBusinessIcon />
                 
                </IconButton>
                <Typography 
                variant="body2" 
                component='p'  
                color= 'secondary'
                display='inline'
                sx={{fontSize:'calc(5px + 1vw)'}}
                >
                    Catálogo
                </Typography>
           
            </NavLink>
        </Grid>
        

        <Grid item>
            <NavLink to={'/equipoTrabajo'}
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
                sx={{fontSize:'calc(5px + 1vw)'}}
                >
                    Contáctanos
                </Typography>
                </IconButton >
             
            </NavLink>
        </Grid>

            


       



        <Grid item>
            <NavLink 
            to={'/Notificaciones'}
            className={({ isActive }) =>
                isActive ? "active":''
            }
            style={{textDecoration:'none'}}
            >
           

                <IconButton color='secondary'sx={{paddingX:0}}>
                <Badge
                
                badgeContent={store.escuela[0].notificaciones.filter(item=>item.visto===false).length} 
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                color="error"
                >
                    <NotificationsActiveIcon />
                </Badge>
                
                <Typography 
                variant="body2" 
                component='p'  
                color= 'secondary'
                display='inline'
                sx={{fontSize:'calc(5px + 1vw)'}}
                >
                    Notificaciones
                </Typography>
                </IconButton>
          
            </NavLink>
            
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
            
                <IconButton  color='secondary'sx={{paddingX:0}}>
                <MenuIcon />
                <pre style={{fontSize:'calc(5px + 1vw)'}}> Menú</pre>
                </IconButton>
           
            </NavLink>
        </Grid>

        </Grid>
        


    </Grid>
    
  );
}
export default Navegador;
              
           