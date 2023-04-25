import React,{useState, useContext} from 'react'
import { Context } from '../store/appContext';
import { Box, Tooltip, IconButton,Menu,MenuItem, Typography,Avatar} from '@mui/material'
import { Link } from 'react-router-dom'

const settings = ['Ingresar', 'Registrarme', 'Mi Perfil'];


const MiAvatar = ({foto}) => {
  const {store, action}= useContext(Context)

    const [anchorElUser, setAnchorElUser] = useState(null);
  
    const handleOpenUserMenu = (event) => {
      setAnchorElUser(event.currentTarget);
    };
  
    const handleCloseUserMenu = () => {
      setAnchorElUser(null);
    };
  return (
    <Box sx={{ flexGrow: 0 }}>
    <Tooltip title="Configuraciones">
      <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
        <Avatar alt="foto usuario" src={store.img}/>
      </IconButton>
    </Tooltip>
    <Menu
      sx={{ mt: '45px' }}
      id="menu-appbar"
      anchorEl={anchorElUser}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={Boolean(anchorElUser)}
      onClose={handleCloseUserMenu}
    >
      {settings.map((setting) => (
        <MenuItem key={setting} onClick={handleCloseUserMenu}>
          <Link to={`/${setting}`}>
            <Typography textAlign="center">{setting}</Typography>
          </Link>
        </MenuItem>
      ))}
    </Menu>
  </Box>
  )
}

export default MiAvatar