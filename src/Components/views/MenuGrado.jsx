import React,{useContext, useEffect} from 'react'
import { Context } from '../../store/appContext'
import ResponsiveAppBarGrado from '../ResponsiveAppBarGrado'
import Footer from '../Footer'
import ListaMenu from '../ListaMenu'
import SectionHeading from '../SectionHeading'


const MenuGrado = () => {

  const {store }= useContext(Context)
  
  useEffect(() => {
    window.scrollTo(0,0)
  
  
  }, [])
  
  
  return (
    <>
      <ResponsiveAppBarGrado  gradoIndex={store.usuario[0].seleccionDelUsuario.grado}/> 
      <SectionHeading name='Menú'/>
      <ListaMenu array={store.menuGrado} />
      <Footer/>
    </>
  )
}

export default MenuGrado