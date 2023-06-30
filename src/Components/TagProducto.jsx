import  React ,{useContext}from 'react';
import {Context} from '../store/appContext'
import { useTheme } from '@mui/material/styles';
import { useParams } from 'react-router-dom';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import Slider from './Slider';


export default function TagProducto({}) {
  const theme = useTheme();
  const {store, actions }= useContext(Context);
  const params= useParams();
  

  return (
    <Card sx={{ display: 'flex', margin:1}}>
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <CardContent sx={{ flex: '1 0 auto' }}>
          <Typography component="div" variant="h5">
            {store.escuela[0].publicaciones[params.index].name}
          </Typography>
          <Typography variant="subtitle1" color="black" component="div">
          USD $ {store.escuela[0].publicaciones[params.index].precio}
          </Typography>
        </CardContent>
       
      </Box>
      <Box
       
        sx={{ width: '50%' , height: '400px' }}
        image={store.escuela[0].publicaciones[params.index].img}
       
      >
        <Slider images={['p1.jpg','p2.jpg','p3.jpg','p4.jpg']} buttons={true} intervalImg={5000} autoPlay={false}/>
        
    </Box>
    </Card>
  );
}