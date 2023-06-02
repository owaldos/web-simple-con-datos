import React,{useContext,useEffect} from 'react';
import { Context } from '../../store/appContext';
import Footer from '../Footer'
import ResponsiveAppBar from '../ResponsiveAppBar';
import ListaMenu from '../ListaMenu';
import SectionHeading from '../SectionHeading';




export default function MiMenu({array}) {
  
  const {store}= useContext(Context)
  

  useEffect(() => {
    window.scrollTo(0,0)
    
  
  }, [])
 

  return (
    <>
        <ResponsiveAppBar />
        <SectionHeading name= 'Menú'/>
        <ListaMenu array={store.menuPrincipal}/>
        <Footer/>
     
      
    </>
  );
}