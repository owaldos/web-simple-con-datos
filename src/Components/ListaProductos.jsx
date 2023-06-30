import React,{useContext, useEffect} from 'react'
import { Context } from '../store/appContext'
import { redirect, useParams } from 'react-router-dom'
import { Box, Grid } from '@mui/material'
import ResponsiveAppBar from './ResponsiveAppBar'
import Slider from './Slider'
import SectionHeading from './SectionHeading'
import MiCard from './MiniCard'
import Footer from './Footer'




const ListaProductos = () => {

    const {store, actions}= useContext(Context)
    const params= useParams();


    useEffect(() => {
        window.scrollTo(0,0)
      
      }, [])
   
  return (
    <>
     <Box   sx={{justifyContent:'center'}}  >
      
      <div style={{backgroundColor:'black'}}>hola </div>
        <ResponsiveAppBar /> 
      
      <Slider  images={['p1.jpg','p2.jpg','p3.jpg','p4.jpg']} buttons={false} intervalImg={5000} autoPlay={true}/>
    </Box>


   
    <SectionHeading 
      name={store.categorias[params.categoria]} 
      color='#212F3D '
      regresar={true}
      ruta='/web-simple-con-datos'
    />


    <Box display={'flex'} justifyContent={'center'} flexWrap={'wrap'} sx={{minWidth:'349px'}}>

        {store.escuela[0].publicaciones.map((publicacion, index)=>(
                
                <MiCard key={index} datos={publicacion} index={index} categoria={params.categoria}/> 

            ))}
    </Box>
    <Footer/>
    </>
  )
}

export default ListaProductos