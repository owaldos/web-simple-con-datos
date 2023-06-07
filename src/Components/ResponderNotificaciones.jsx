import React, {useContext} from 'react'
import { Context } from '../store/appContext'
import BotonRegresar from './BotonRegresar'
import { useParams } from 'react-router-dom'


const ResponderNotificaciones = () => {
    const {store, actions}= useContext(Context)
    const params= useParams()
    const datos= params.donde==='escuela'
        ?
            store.escuela[0].notificaciones[params.index]
        :
            store.grados[params.donde].notificaciones[params.index]
        
    
  return (
    <>
    <BotonRegresar m={4} bg='#C1C5CA ' ir={params.donde==='escuela'?'/notificaciones':`/miGrado/${params.index}/notificacionesGrado`} text="Regresar"/>

    <div> 
     
    {datos.contenido[0]}
    <br></br>
    {datos.contenido[1]}
    </div>
    </>
  )
}

export default ResponderNotificaciones