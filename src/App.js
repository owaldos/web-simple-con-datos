import React from 'react';
import './App.css';
import ResponsiveAppBar from './Components/ResponsiveAppBar.js';
import { Box } from '@mui/material';
import Card from './Components/Card.jsx';




function App() {
  return (
    <Box   sx={{ justifyContent:'center'}}>
      
      <header className="App-header">
      
        <ResponsiveAppBar/>
      </header>
      <Box sx={{paddingY:6}}></Box>
      <Box sx={{ justifyContent:'center'}}>

      
         <Card />
         <Card/> 
         <Card/> 
      </Box>


        
      
     
    </Box>
  );
}

export default App;
