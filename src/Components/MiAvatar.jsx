import React,{ useState, useContext, useEffect} from 'react'
import { Context } from '../store/appContext';
import { Box, IconButton,
  Avatar,List, ListItem, ListItemButton,
  ListItemIcon, ListItemText, Divider} from '@mui/material'
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import Drawer from '@mui/material/Drawer';
import { useNavigate } from 'react-router-dom';




const MiAvatar = ({foto}) => {
  const {store, actions}= useContext(Context)
  
  const [state, setState] = useState(false)
  const navigate= useNavigate()

  const [isReadyForInstall, setIsReadyForInstall] = React.useState(false);

useEffect(() => {
  window.addEventListener("beforeinstallprompt", (event) => {
    // Prevent the mini-infobar from appearing on mobile.
    event.preventDefault();
    console.log("👍", "beforeinstallprompt", event);
    // Stash the event so it can be triggered later.
    window.deferredPrompt = event;
    // Remove the 'hidden' class from the install button container.
    setIsReadyForInstall(true);
  });
}, []);

async function downloadApp() {
  console.log("👍", "butInstall-clicked");
  const promptEvent = window.deferredPrompt;
  if (!promptEvent) {
    // The deferred prompt isn't available.
    console.log("oops, no prompt event guardado en window");
    return;
  }
  // Show the install prompt.
  promptEvent.prompt();
  // Log the result
  const result = await promptEvent.userChoice;
  console.log("👍", "userChoice", result);
  // Reset the deferred prompt variable, since
  // prompt() can only be called once.
  window.deferredPrompt = null;
  // Hide the install button.
  setIsReadyForInstall(false);
}
 
 

  

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
       {isReadyForInstall===true &&
        <ListItemButton onClick={downloadApp}>
        <ListItemIcon>
           <MailIcon />
        </ListItemIcon>
        <ListItemText primary={'Instalar App'} />
      </ListItemButton>

       }
      
     
        <List>
          {['Perfil', 'Configuración', 'Cerrar'].map((text, index) => (
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