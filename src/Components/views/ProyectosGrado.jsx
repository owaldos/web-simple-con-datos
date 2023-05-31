import React,{useContext} from 'react'
import { Context } from '../../store/appContext'
import ResponsiveAppBarGrado from '../ResponsiveAppBarGrado'
import Footer from '../Footer'
import SectionHeading from '../SectionHeading'
import ListaMenu from '../ListaMenu'

const ProyectosGrado = () => {

  const {store}= useContext(Context)
  
 
   
  return (
    <>
    <ResponsiveAppBarGrado  gradoIndex={store.usuario[0].seleccionDelUsuario.grado}/> 
    <SectionHeading name='Proyectos y acuerdos'/>
   <ListaMenu array={store.proyectosGrado}/>
    <Footer/>
    </>
  )
}

export default ProyectosGrado