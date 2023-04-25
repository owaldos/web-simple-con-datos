import React, {useContext} from 'react';
import {Context} from '../store/appContext'
import '../App.css';
import { Box} from '@mui/material';
import Card from './Card';
import f1 from '../image/2.jpeg'
import f2 from '../image/3.jpeg'
import f3 from '../image/descarga.jpeg'
import ResponsiveAppBar from './ResponsiveAppBar';




function Home() {
  const {store, actions}= useContext(Context)
  
  return (
    <>
    <Box   sx={{ justifyContent:'center'}}>
      
      <header className="App-header">
      
        <ResponsiveAppBar />
       
      </header>
     

        
      
     
    </Box>
      <Box sx={{ justifyContent:'center'}}>

      
         <Card foto={f1}/>
         <Card foto={f2}/> 
         <Card foto={f3}/> 
         
         
      </Box>
    </>
  );
}

export default Home;
