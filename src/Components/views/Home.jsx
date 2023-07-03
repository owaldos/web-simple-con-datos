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
  
  const {store, actions}= useContext(Context)
  const navigate= useNavigate()

 
  const selecCategoria=(index)=>{
    
    navigate(`/web-simple-con-datos/lista-productos/${index}`)
  }

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
      name={!store.modoBorrar ? 'Aquí encontraras lo que buscas ' :'Busca articulo por borrar'}
      color={!store.modoBorrar ? '#212F3D ': 'red'}
    />
    <div className='fondo'>

      {store.listaCategorias.length<1
        ?
        <div style={{background:'black'}}> 
          <h2 style={{color:'#ffff', textAlign:'center'}}>No existe ninguna categoria</h2>
        </div>
        :
        <ListaMenu array={store.listaCategorias} call={selecCategoria}/>

      }

    </div>
    <Footer/>
    </>
  );
}

export default Home;
