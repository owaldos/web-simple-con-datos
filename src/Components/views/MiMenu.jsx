import React,{useContext,useEffect} from 'react';
import { Context } from '../../store/appContext';
import Footer from '../Footer'
import ResponsiveAppBar from '../ResponsiveAppBar';
import ListaMenu from '../ListaMenu';
import SectionHeading from '../SectionHeading';
import { useNavigate } from 'react-router-dom';
import { Box } from '@mui/material';
import Slider from '../Slider';

export default function MiMenu({array}) {
 
  useEffect(() => {
    window.scrollTo(0,0)
  
  }, [])
  
  const {store, actions}= useContext(Context)
  const navigate= useNavigate()


  const selecCategoria=(index)=>{
    
    if(store.config[index]=== 'Eliminar Articulo'){
      actions.modoBorrar(true)
      navigate('/web-simple-con-datos')
    }  else navigate(`/${store.config[index]}`)
   
    
  }
  
  return (
    <>
    <Box   sx={{justifyContent:'center'}}  >
      
     
        <ResponsiveAppBar /> 
      
      <Slider  images={['p1.jpg','p2.jpg','p3.jpg','p4.jpg']} buttons={false} intervalImg={5000} autoPlay={true}/>
    </Box>


    <Box sx={{ justifyContent:'center'}}>

        
         
         
    </Box>
    <SectionHeading 
      name='Seleccione  la acción que desee' 
      color='#212F3D '
    />
    <div className='fondo'>

    <ListaMenu array={store.config} call={selecCategoria}/>
    </div>
    <Footer/>
    </>
  );
}
