import React,{useContext,useEffect } from 'react'
import { Context } from '../../store/appContext'
import ResponsiveAppBarGrado from '../ResponsiveAppBarGrado'
import Footer from '../Footer'
import EtiquetaNotificacionescopy from '../EtiquetaNotificacionescopy'
import SectionHeading from '../SectionHeading'
import { useParams } from 'react-router-dom'

const NotificacionesGrado = () => {
  
  const {store }= useContext(Context)
  const params= useParams()

  useEffect(() => {
    window.scrollTo(0,0)
  
  }, [])
 

  return (
    <>
     <ResponsiveAppBarGrado   gradoIndex={store.usuario[0].seleccionDelUsuario.grado}/> 

     < SectionHeading name='Notificaciones' boton={true}/>

      {store.grados[params.grado].notificaciones.map((notif, index)=>(
      
      <EtiquetaNotificacionescopy key={index} datos={notif} index={index} de={params.grado}/>

    ))}
   
    <Footer/>
    </>
  )
}

export default NotificacionesGrado