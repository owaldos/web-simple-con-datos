import React,{useContext , useEffect } from 'react'
import { Context } from '../../store/appContext'
import ResponsiveAppBarGrado from '../ResponsiveAppBarGrado'
import MiCard from '../MiCard'
import { Box } from '@mui/material'
import Footer from '../Footer'

const Migrado = () => {

  const {store  }= useContext(Context)
  
  useEffect(() => {
    window.scrollTo(0,0)
    
  
  }, [])
  const indexgrado=store.usuario[0].seleccionDelUsuario.grado
    
   
  return (
  
     <>

     <ResponsiveAppBarGrado gradoIndex={indexgrado}/> 
     
        <Box sx={{ justifyContent:'center'}}>

          {store.grados[indexgrado].publicaciones.map((publicacion, index)=>(
            <MiCard key={index} datos={publicacion} index={index}/>
            
            ))}
              
        </Box> 


     

   
    <Footer/>
      </>
    
  )
}

export default Migrado