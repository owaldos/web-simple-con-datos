import React,{useContext , useEffect} from 'react'
import { Context } from '../../store/appContext'
import ResponsiveAppBarGrado from '../ResponsiveAppBarGrado'
import Footer from '../Footer'
import SectionHeading from '../SectionHeading'
import ListaMenu from '../ListaMenu'


const ProyectosGrado = () => {

  const {store }= useContext(Context)
 

  useEffect(() => {
    window.scrollTo(0,0)
   
  
  }, [])
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