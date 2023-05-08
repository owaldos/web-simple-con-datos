import React,{useContext} from 'react';
import {Context} from '../store/appContext'
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';

export default function EtiquetaNotificaciones2({datos,index}) {

  const {store, actions}= useContext(Context)

  const handleClick= ()=>{
    actions.setvistos(index)
  }
  return (
    <List 
    bgcolor={store.usuario[0].notificaciones[index].visto===false? '#EFF1F1 ':'#ffff'}
    sx={{ width: '100%', maxWidth: 900, bgcolor: 'background.paper', mx:'auto'}}
    onClick={handleClick}
    >
      <ListItemButton alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Remy Sharp" src={datos.img} />
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