import React, {useContext,useEffect} from 'react';
import {Context} from '../../store/appContext'
import '../../App.css';
import { Box} from '@mui/material';
import MiCard from '../MiCard';

import ResponsiveAppBar from '../ResponsiveAppBar';

import Slider from '../Slider';




function Home() {

  useEffect(() => {
    window.scrollTo(0,0)
  
  }, [])
  
  const {store}= useContext(Context)
  
  return (
    <>
    <Box   sx={{ justifyContent:'center'}}  >
      
      <header className="App-header">
        <ResponsiveAppBar /> 
      </header>
   
    </Box>


    <Box sx={{ justifyContent:'center'}}>

      <Slider  images={['inicial.png','3.jpeg','descarga.jpeg']} buttons={false} intervalImg={5000} autoPlay={true}/>

      {store.escuela[0].publicaciones.map((publicacion, index)=>(
        
        <MiCard key={index} datos={publicacion} index={index}/> 

      ))}
      
        
         
         
    </Box>
    </>
  );
}

export default Home;
