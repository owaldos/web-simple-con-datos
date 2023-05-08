import React, {useContext} from 'react'
import {Context} from '../../store/appContext'
import Footer from '../Footer'
import ResponsiveAppBar from '../ResponsiveAppBar'
import EtiquetaNotificacionescopy from '../EtiquetaNotificacionescopy'
import SectionHeading from '../SectionHeading'
import { Box } from '@mui/material'

const Notificaciones = () => {

   const { store}= useContext( Context)
  return (
    <>
    <ResponsiveAppBar/>
    <SectionHeading name='Notificaciones' boton={true}/>
    <Box sx={{padding:1 }}>

      {store.usuario[0].notificaciones.map((notif, index)=>(
        
        <EtiquetaNotificacionescopy key={index} datos={notif} index={index}/>

      ))}
    </Box>
  
      
    <Footer/>
    </>
  )
}

export default Notificaciones