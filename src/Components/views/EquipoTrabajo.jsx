import React,{useContext, useEffect} from 'react';
import {Context} from '../../store/appContext'
import ResponsiveAppBar from '../ResponsiveAppBar'
import Footer from '../Footer';
import SectionHeading from '../SectionHeading';
import EtiquetaPerfil from '../EtiquetaPerfil';




export default function EquipoTrabajo() {
 
  const {store}= useContext(Context)
 

  useEffect(() => {
    window.scrollTo(0,0)
   
  
  }, [])
 
  
  
  return (
    <>
      
     <ResponsiveAppBar/>
      
     <SectionHeading  boton={true} name='Personal' number={store.perfilDocente.length}/>

      {store.perfilDocente.map((perfil, index)=>(
        <EtiquetaPerfil  key={index} perfil={perfil} index={index}/>

      ))}
      
    
      
      
      <footer>
        <Footer/>
      </footer>


    </>
   
  );
}
