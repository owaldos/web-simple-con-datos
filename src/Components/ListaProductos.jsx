import React,{useContext, useEffect} from 'react'
import { Context } from '../store/appContext'
import { redirect, useParams } from 'react-router-dom'
import { Box, Grid } from '@mui/material'
import ResponsiveAppBar from './ResponsiveAppBar'
import Slider from './Slider'
import SectionHeading from './SectionHeading'
import MiCard from './MiniCard'
import Footer from './Footer'
import { useNavigate } from 'react-router-dom'



const ListaProductos = () => {

    const {store, actions}= useContext(Context)
    const params= useParams();
    const navigate= useNavigate()

    useEffect(() => {
        window.scrollTo(0,0)
      
      }, [])

      const handleCerrarBorrar= ()=>{
        actions.modoBorrar(false)
        navigate('/menu')
       }
   
  return (
    <>
     <Box   sx={{justifyContent:'center'}}  >
      
      
        <ResponsiveAppBar /> 
      <Slider  images={['p1.jpg','p2.jpg','p3.jpg','p4.jpg']} buttons={false} intervalImg={5000} autoPlay={true}/>
      { store.modoBorrar &&
     
     <div onClick={handleCerrarBorrar} >
      <h3 >Cancelar  modo borrar</h3> 
     </div>

    }  
    </Box>


   
    <SectionHeading 
      name={!store.modoBorrar ? store.listaCategorias[params.categoria]:'Elige para borrar'} 
      color={!store.modoBorrar ? '#212F3D ':'red'}
      regresar={true}
      ruta='/web-simple-con-datos'
    />


    <Box display={'flex'} justifyContent={'center'} flexWrap={'wrap'} sx={{minWidth:'349px', minHeight:'200px'}}>

        {store.articulosPorCategoria[params.categoria].articulos.length <=0 

          ?
          <p>No existe ningun articulo registrado</p>
          :
         store.articulosPorCategoria[params.categoria].articulos.map((publicacion, index)=>(
               
                <MiCard key={index} datos={publicacion} index={index} categoria={params.categoria}/> 

            ))}
    </Box>
    <Footer/>
    </>
  )
}

export default ListaProductos