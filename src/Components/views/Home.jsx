import React, {useContext,useEffect} from 'react';
import {Context} from '../../store/appContext'
import '../../App.css';
import { Box} from '@mui/material';
import Footer from '../Footer';
import ResponsiveAppBar from '../ResponsiveAppBar';
import Slider from '../Slider';
import SectionHeading from '../SectionHeading';
import ListaMenu from '../ListaMenu';
import { useNavigate } from 'react-router-dom';




function Home() {

  useEffect(() => {
    window.scrollTo(0,0)
  
  }, [])
  
  const {store}= useContext(Context)
  const navigate= useNavigate()


  const selecCategoria=(index)=>{
    
    navigate(`/web-simple-con-datos/lista-productos/${index}`)
  }
  
  return (
    <>
    <Box   sx={{justifyContent:'center'}}  >
      
      <div style={{backgroundColor:'black'}}>hola </div>
        <ResponsiveAppBar /> 
      
      <Slider  images={['p1.jpg','p2.jpg','p3.jpg','p4.jpg']} buttons={false} intervalImg={5000} autoPlay={true}/>
    </Box>


    <SectionHeading 
      name='Aquí encontraras lo que buscas ' 
      color='#212F3D '
    />
    <div className='fondo'>

    <ListaMenu array={store.categorias} call={selecCategoria}/>
    </div>
    <Footer/>
    </>
  );
}

export default Home;
