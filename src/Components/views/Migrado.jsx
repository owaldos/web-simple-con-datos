import React,{useContext} from 'react'
import { Context } from '../../store/appContext'
import ResponsiveAppBarGrado from '../ResponsiveAppBarGrado'
import Card from '../Card'
import { Box } from '@mui/material'
import Footer from '../Footer'

const Migrado = () => {
  const {store}= useContext(Context)
  
    
   
  return (
  
     <>

     <ResponsiveAppBarGrado  grado={store.usuario[0]}/> 
     
        <Box sx={{ justifyContent:'center'}}>

          {store.grados[0].publicaciones.map((publicacion, index)=>(
            <Card key={index} datos={publicacion} index={index}/>
            
            ))}
              
        </Box> 


     

   
    <Footer/>
      </>
    
  )
}

export default Migrado