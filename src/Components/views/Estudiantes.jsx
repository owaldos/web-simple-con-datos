import React,{useContext, useEffect} from 'react'
import {Context} from '../../store/appContext'
import ResponsiveAppBarGrado from '../ResponsiveAppBarGrado'
import Footer from '../Footer'
import SectionHeading from '../SectionHeading'
import EtiquetaPerfil from '../EtiquetaPerfil'
import '../../App.css'


const Estudiantes = () => {
 
  const {store}= useContext(Context)
  

  useEffect(() => {
    window.scrollTo(0,0)
  
  
  }, [])
  

  
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