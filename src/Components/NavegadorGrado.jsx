import React,{useContext} from 'react';
import {Context} from '../store/appContext'
import Diversity1Icon from '@mui/icons-material/Diversity1';
import { Grid, IconButton,  Badge,  Tooltip} from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import ListIcon from '@mui/icons-material/List';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import { NavLink, Link } from 'react-router-dom';
import './../App.css'
import ArrowCircleLeftRoundedIcon from '@mui/icons-material/ArrowCircleLeftRounded';
import ReplyAllIcon from '@mui/icons-material/ReplyAll';

function NavegadorGrado({grado}) {
    const {store} = useContext(Context)
    

    
  return (

    <Grid container   alignItems="center"  sx={{maxWidth:900, minWidth:350}}>


        <Grid 
        item
        container
        xs={12}
        direction="row"
        justifyContent="center"
        alignItems="center"
        columnSpacing={{xs:2,sm:10}}
        >

            <Grid item >
                <Link 
                    to={'/faceschool'} 
                    
                >
            
                    
                    <Tooltip title="Regresar">
                        <IconButton  color='secondary' >
                            <ReplyAllIcon  />
                        </IconButton>
                    </Tooltip>
                </Link>
            </Grid>

            <Grid item >
                <NavLink 
                    to={`/miGrado/${grado.seleccionDelUsuario.grado}`} 
                    className={({ isActive }) =>
                    isActive ? "active":''
                    }
                >
            
                    
                <Tooltip title="Pag principal del grado">
                    <IconButton  color='secondary'>
                    <HomeIcon/>
                    </IconButton>
                </Tooltip>
                </NavLink>
            </Grid>
        

            <Grid item>
                <NavLink to={`/miGrado/${grado.seleccionDelUsuario.grado}/estudiantes`}
                    className={({ isActive, isPending }) =>
                    isActive
                    ? "active"
                    : isPending
                    ? "pending"
                    : ""
                    }>
                <Tooltip title="Estudiantes">
                    <IconButton color='secondary'>
                    <Diversity1Icon/>
                    </IconButton>
                </Tooltip>    
                </NavLink>
            </Grid>

            


            <Grid item>
                <NavLink 
                    to={`/miGrado/${grado.seleccionDelUsuario.grado}/proyectos`}
                    className={({ isActive, isPending }) =>
                    isActive
                    ? "active"
                    : isPending
                    ? "pending"
                    : ""
                    }
                >
                    <Tooltip title="Proyectos">
                        <IconButton  color='secondary'>
                        < AutoStoriesIcon/>
                        </IconButton>
                    </Tooltip>
                </NavLink>
            </Grid>




            <Grid item>
                <NavLink 
                    to={`/miGrado/${grado.seleccionDelUsuario.grado}/notificacionesGrado`}
                    className={({ isActive }) =>
                        isActive ? "active":''
                    }
                >
                    <Tooltip title="Notificaciones">

                        <IconButton color='secondary'>
                            <Badge
                                badgeContent={1} 
                                anchorOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                color="error"
                            >
                                <NotificationsActiveIcon/>
                            </Badge>
                        </IconButton>
                    </Tooltip>
                </NavLink>
                
            </Grid>
            

            <Grid item>
                <NavLink
                    to={`/miGrado/${grado.seleccionDelUsuario.grado}/menuGrado`}
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
                            <ListIcon/>
                        </IconButton>
                    </Tooltip>

                </NavLink>
            </Grid>

        </Grid>
            


    </Grid>
    
  );
}
export default NavegadorGrado;
              
           