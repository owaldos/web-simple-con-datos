import React,{useContext} from 'react';
import {Context} from '../store/appContext'
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';

export default function EtiquetaNotificacionescopy({datos,index}) {

  const {store, actions}= useContext(Context)

  const handleClick= ()=>{
    actions.setvistosNotificacionesEscuela(index)
    
  }
  // store.escuela[0].notificaciones[index].visto===false? '#EFF1F1 ':'#ffff'
  return (
    <List 
    
    sx={{ width: '100%', maxWidth: 900, mx:'auto', paddingY:0, backgroundColor:store.escuela[0].notificaciones[index].visto===true? '#EFF1F1 ':'#ffff'}}
    onClick={handleClick}
    >
      <ListItemButton alignItems="flex-start" sx={{paddingY:0, }}>
        <ListItemAvatar>
          <Avatar alt="Remy Sharp" src={datos.avatar} />
        </ListItemAvatar>
        <ListItemText
          primary={datos.name}
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                {datos.fecha }
              </Typography>
              {" El dia de mañana no tendremos clases ..."}
            </React.Fragment>
          }
        />
      </ListItemButton>
      <Divider variant="inset" component="li" />
     
    </List>
  );
}