import React,{ useState, useContext} from 'react'
import { Context } from '../store/appContext';
import { Box, IconButton,
  Avatar,List, ListItem, ListItemButton,
  ListItemIcon, ListItemText, Divider} from '@mui/material'
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import Drawer from '@mui/material/Drawer';
import { useNavigate } from 'react-router-dom';




const MiAvatar = ({foto}) => {
  const {store, action}= useContext(Context)
  
  const [state, setState] = useState(false)
  const navigate= useNavigate()

  const clickItem =(text)=>{
    navigate(`${text}`)
  }

  const handleClick = (event) => {
   
   if (
     event &&
     event.type === 'keydown' &&
     (event.key === 'Tab' || event.key === 'Shift')
   ) {
     return;
   }
 
   setState(state=== true ? false :true)
   
 };
 
  

    const list = () => (
      <Box
        sx={{ width: 250 }}
        role="presentation"
        onClick={handleClick}
        onKeyDown={handleClick}
       
      >
        <List>
          {['Ingresar','Registrarme'].map((text, index) => (
            <ListItem key={text} disablePadding>
              <ListItemButton onClick={()=>clickItem(`/${text}`)}>
                <ListItemIcon>
                  {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <Divider />
        <List>
          {['Perfil', 'configuración', 'Cerrar'].map((text, index) => (
            <ListItem key={text} disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Box>
    );
  return (
    <Box sx={{ flexGrow: 0 }}>
    
      <IconButton  sx={{ p: 0 }} onClick={handleClick} >
        <Avatar alt="foto usuario" src={foto}/>
      </IconButton>
   
     {state===true && 


     <Drawer
            anchor='right'
            open ={state}
            onClose={handleClick}
          >
          
          {list()}
          </Drawer>


     }


    
  </Box>
  )
}

export default MiAvatar