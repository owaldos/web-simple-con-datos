import React,{useContext, useEffect} from 'react'
import { Context } from '../../store/appContext'
import { useParams } from 'react-router-dom'
import { Box, Grid } from '@mui/material'
import ResponsiveAppBar from '../ResponsiveAppBar'
import Slider from '../Slider'
import SectionHeading from '../SectionHeading'
import MiCard from '../MiCard'
import Footer from '../Footer'
import TagProducto from '../TagProducto'


const Producto = () => {


    const {store, actions}= useContext(Context)
    const params= useParams()
    console.log(navigator.userAgent.match(/Android/i) || navigator.userAgent.match(/webOS/i) || navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/iPad/i) || navigator.userAgent.match(/iPod/i) || navigator.userAgent.match(/BlackBerry/i) || navigator.userAgent.match(/Windows Phone/i))
    useEffect(() => {
        window.scrollTo(0,0)
      
      }, [])

      let mensaje= `me gustaría tener mas información sobre el producto ${store.escuela[0].publicaciones[params.index].name}`
      let messageWhatsapp= mensaje.replace('','%20')
  return (
    <>
     <Box   sx={{justifyContent:'center'}}  >
      
      <div style={{backgroundColor:'black'}}>hola </div>
        <ResponsiveAppBar /> 
      
      <Slider  images={['p1.jpg','p2.jpg','p3.jpg','p4.jpg']} buttons={false} intervalImg={5000} autoPlay={true}/>
    </Box>


    <Box sx={{ justifyContent:'center'}}>

        
         
         
    </Box>
    <SectionHeading 
      name='Producto' 
      color='#212F3D '
      regresar={true}
      ruta = {`/web-simple-con-datos/lista-productos/${params.categoria}`}
    />

   <MiCard  datos={store.escuela[0].publicaciones[params.index]} index={2}/>
   {/* {navigator.userAgent.match(/Android/i) || navigator.userAgent.match(/webOS/i) || navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/iPad/i) || navigator.userAgent.match(/iPod/i) || navigator.userAgent.match(/BlackBerry/i) || navigator.userAgent.match(/Windows Phone/i)
   ?
   <a target="_blank" href={`https://api.whatsapp.com/send?phone=5804127618411?text=${messageWhatsapp}`}> escribeme  aqui</a>
   :
   <a target="_blank" href={`https://web.whatsapp.com/send?phone=5804127618411?text=${messageWhatsapp}`}> escribeme  aqui</a>

  } */}
   
   <a target="_blank" href={`https://wa.me/5804127618411?text=${messageWhatsapp}`}> escribeme  aqui</a>

    <Footer/>
    </>
  )
}

export default Producto