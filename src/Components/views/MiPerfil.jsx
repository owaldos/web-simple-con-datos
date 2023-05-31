import React, {useContext} from 'react';
import {Context} from '../../store/appContext'
import '../../App.css';
import { Box} from '@mui/material';
import { useParams } from 'react-router-dom';

import ResponsiveAppBar from '../ResponsiveAppBar';


 




function MiPerfil() {
  const {store}= useContext(Context)
  const params= useParams()
 console.log(store.perfilDocente[params.indexPersonal].name)
  
  return (
    <>
    <Box   sx={{ justifyContent:'center'}}  >
      
      <header className="App-header">
        <ResponsiveAppBar /> 
      </header>
   
    </Box>


    <Box sx={{ justifyContent:'center'}}>

     
        
         

      <h1>{store.perfilDocente[params.indexPersonal].name}</h1> 
      
        
         
         
    </Box>
    </>
  );
}

export default MiPerfil;
