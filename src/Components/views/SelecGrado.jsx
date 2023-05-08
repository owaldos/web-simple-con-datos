import React,{useContext} from 'react'
import { Context } from '../../store/appContext'

import Footer from '../Footer'
import ListaMenu from '../ListaMenu'
import SectionHeading from '../SectionHeading'
import { useNavigate } from 'react-router-dom'
import BotonIrEscuela from '../BotorIrEscuela'

const SelecGrado = () => {
  const {store, actions }= useContext(Context)

  const navigate= useNavigate()
  
  const selecionDelusuario=(grado)=>{
    
    
    actions.setSeleccionGrado(grado)
    navigate(`/miGrado/${grado}`)
  }
  
 
   
  return (
  

     <>
       <BotonIrEscuela/>

        <SectionHeading name='Selecciona el grado'/>

        <ListaMenu array={store.usuario[0].grados} call={selecionDelusuario}/>
         
       <Footer/>

      </>
    
  )
}

export default SelecGrado