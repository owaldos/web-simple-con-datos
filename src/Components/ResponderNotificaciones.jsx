import React, {useContext} from 'react'
import { Context } from '../store/appContext'
import BotonRegresar from './BotonRegresar'
import { useParams } from 'react-router-dom'
import { Container, } from '@mui/material'
import CuadroDialogo from './CuadroDialogo'

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
    <BotonRegresar  bg='#C1C5CA ' ir={params.donde==='escuela'?'/notificaciones':`/miGrado/${params.index}/notificacionesGrado`} text="Regresar"/>

    <Container sx={{background:'#ffff', height:'100vh'}}> 

    <CuadroDialogo datos={datos}/>
    </Container>
    </>
  )
}

export default ResponderNotificaciones