import React,{useContext} from 'react'
import { Context } from '../../store/appContext'
import ResponsiveAppBarGrado from '../ResponsiveAppBarGrado'
import Footer from '../Footer'
import EtiquetaNotificacionescopy from '../EtiquetaNotificacionescopy'
import SectionHeading from '../SectionHeading'


const NotificacionesGrado = () => {

  const {store}= useContext(Context)

  
 

  return (
    <>
     <ResponsiveAppBarGrado  grado={store.usuario[0]}/> 

     < SectionHeading name='Notificaciones' boton={true}/>

     {store.escuela[0].notificaciones.map((notif, index)=>(
      
      <EtiquetaNotificacionescopy key={index} datos={notif} index={index}/>

    ))}
  
    <Footer/>
    </>
  )
}

export default NotificacionesGrado