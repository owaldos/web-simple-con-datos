import React,{useContext} from 'react'
import {Context} from '../../store/appContext'
import ResponsiveAppBarGrado from '../ResponsiveAppBarGrado'
import Footer from '../Footer'
import SectionHeading from '../SectionHeading'
import EtiquetaPerfil from '../EtiquetaPerfil'
import { Box } from '@mui/material'
import '../../App.css'

const Estudiantes = () => {
  const {store}= useContext(Context)

  

  
  return (
    <>
    <ResponsiveAppBarGrado gradoIndex={store.usuario[0].seleccionDelUsuario.grado}/> 
    <SectionHeading  boton={true} name='Estudiantes' number={store.perfilDocente.length}/>

    {store.perfilEstudiante.map((perfil, index)=>(
      <EtiquetaPerfil key={index} perfil={perfil} index={index}/>

    ))}
     
    <Footer/>
    </>
  )
}

export default Estudiantes