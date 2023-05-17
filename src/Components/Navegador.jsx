import React,{useContext} from 'react';
import {Context} from '../store/appContext'
import {Home} from '@mui/icons-material';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import SwitchAccountIcon from '@mui/icons-material/SwitchAccount';
import { Grid, IconButton,  Badge,  Tooltip} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import LocalLibrary from '@mui/icons-material/LocalLibrary';
import { NavLink} from 'react-router-dom';
import './../App.css'





function Navegador() {
    const {store} = useContext(Context)
   
  
  return (

    <Grid container   alignItems="center"  sx={{maxWidth:900, minWidth:350}}>


        <Grid 
        item
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
        columnSpacing={{xs:3.5,sm:12}}
        >
        <Grid item >
            <NavLink 
            to={'/faceschool'} 
            className={({ isActive }) =>
                isActive ? "active" : ''
            }>
                
            <Tooltip title="Pag principal">
                <IconButton  color='secondary'>
                <Home />
                </IconButton>
            </Tooltip>
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
                }>
            <Tooltip title="Personal Docente">
                <IconButton color='secondary'>
                
                <SwitchAccountIcon />
                </IconButton >
            </Tooltip>    
            </NavLink>
        </Grid>

            


        <Grid item>
            <NavLink to={'/selecGrado'}
            className={({ isActive, isPending }) =>
            isActive
            ? "active"
            : isPending
            ? "pending"
            : ""
        }
            >
            <Tooltip title="Mi grado">
                <IconButton  color='secondary'>
                <LocalLibrary />
                </IconButton>
            </Tooltip>
            </NavLink>
        </Grid>




        <Grid item>
            <NavLink 
            to={'/Notificaciones'}
            className={({ isActive }) =>
                isActive ? "active":''
            }>
            <Tooltip title="Notificaciones">

                <IconButton color='secondary'>
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
                </IconButton>
            </Tooltip>
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
            >
            <Tooltip title="Menu">
                <IconButton  color='secondary'>
                <MenuIcon />
                </IconButton>
            </Tooltip>

            </NavLink>
        </Grid>

        </Grid>
        


    </Grid>
    
  );
}
export default Navegador;
              
           