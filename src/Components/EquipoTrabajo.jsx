import React,{useContext} from 'react';
import {Context} from '../store/appContext'
import ResponsiveAppBar from './ResponsiveAppBar';
import Footer from './Footer';
import SectionHeading from './SectionHeading';
import EtiquetaPerfil from './EtiquetaPerfil';





export default function EquipoTrabajo() {
  const {store }= useContext(Context)
  
  
  return (
    <>
      
     <ResponsiveAppBar/>
      
        <SectionHeading number={store.perfilDocente.length}/>

        {store.perfilDocente.map((perfil, index)=>(
          <EtiquetaPerfil key={index} perfil={perfil} index={index}/>

        ))}
      
      <footer>
        <Footer/>
      </footer>


    </>
   
  );
}
