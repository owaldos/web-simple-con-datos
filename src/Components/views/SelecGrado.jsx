import React,{useContext, useEffect} from 'react'
import { Context } from '../../store/appContext'

import Footer from '../Footer'
import ListaMenu from '../ListaMenu'
import SectionHeading from '../SectionHeading'
import { useNavigate } from 'react-router-dom'
import BotonRegresar from '../BotonRegresar'

const SelecGrado = () => {

  const {store, actions }= useContext(Context)
  const navigate= useNavigate()

  useEffect(() => {
    window.scrollTo(0,0)
    
  
  }, [])
  
  
  const selecionDelusuario=(grado)=>{
    
    
    actions.setSeleccionGrado(grado)
    navigate(`/miGrado/${grado}`)
  }
  
 
   
  return (
  

     <>
       <BotonRegresar m={4} bg='#C1C5CA ' ir='/faceschool' text="Regresar a IUNAV"/>

        <SectionHeading name='Selecciona '/>

        <ListaMenu array={store.usuario[0].grados} call={selecionDelusuario}/>
         
       <Footer/>

      </>
    
  )
}

export default SelecGrado