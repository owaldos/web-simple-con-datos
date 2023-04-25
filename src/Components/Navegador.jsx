import * as React from 'react';
import { Diversity1Outlined,HomeOutlined} from '@mui/icons-material';
import { Grid, IconButton,  Badge,  Tooltip} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import LocalLibraryOutlinedIcon from '@mui/icons-material/LocalLibraryOutlined';
import { NavLink} from 'react-router-dom';
import './../App.css'





function Navegador() {

  return (

    <Grid container   alignItems="center"  sx={{maxWidth:900, minWidth:350}}>


        <Grid 
        item
        container
        xs={12}
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
                <HomeOutlined/>
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
                <IconButton  color='inherit'>
                <Diversity1Outlined/>
                </IconButton>
            </Tooltip>    
            </NavLink>
        </Grid>

            


        <Grid item>
            <NavLink to={'/miGrado'}
            className={({ isActive, isPending }) =>
            isActive
            ? "active"
            : isPending
            ? "pending"
            : ""
        }
            >
            <Tooltip title="Mi grado">
                <IconButton  color='inherit'>
                <LocalLibraryOutlinedIcon/>
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

                <IconButton color='inherit'>
                <Badge
                badgeContent={4} 
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'right',
                }}
                color="error"
                >
                    <NotificationsNoneIcon/>
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
                <IconButton  color='inherit'>
                <MenuIcon/>
                </IconButton>
            </Tooltip>

            </NavLink>
        </Grid>

        </Grid>
        


    </Grid>
    
  );
}
export default Navegador;
              
           