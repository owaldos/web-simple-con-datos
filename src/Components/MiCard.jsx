import  React,{ useContext, useState, useRef,useEffect} from 'react';
import {Context} from '../store/appContext'
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import {  Badge,  Box,  Button,  Divider, Grid} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import ThumbUpOffAltOutlinedIcon from '@mui/icons-material/ThumbUpOffAltOutlined';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import EtiquetaComentarios from './EtiquetaComentarios';
import { blue } from '@mui/material/colors';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import ClearIcon from '@mui/icons-material/Clear';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import '../App.css'

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));



const ColorButton = styled(Button)(({ theme }) => ({
  color: theme.palette.getContrastText(blue[500]),
  backgroundColor: blue[500],
  '&:hover': {
    backgroundColor: blue[700],
  },
}));


export default function RecipeReviewCard ({datos, index}) {

  const { store,actions}= useContext(Context)
  const [expanded, setExpanded] = useState(false);
  const [valorInput, setValorInput] = useState('');
  const [stateComentar, setStateComentar]= useState(false)
 
  const navigate = useNavigate()
  const marcoVideo = useRef(null)
  const card= useRef(null)
 

  const callbackFunction=(entries)=>{
    
    if (entries[0].isIntersecting===true){
     
        if(marcoVideo.current )marcoVideo.current.play()
         
    } else if(entries[0].isIntersecting===false){
      if(marcoVideo.current) marcoVideo.current.pause() 
      
    }
  }

  
  
 

  useEffect(() => {
    
    const observer = new IntersectionObserver(callbackFunction,{
      root:null,
      rootMargin:'0px',
      threshold:0.9,
    } )
    if (card.current) observer.observe(card.current)
  
  
    return () => {

      if (card.current) observer.unobserve(card.current);
  
    }
  }, [ card])
  
  
  
  const handleExpandClick = () => {
    setExpanded(!expanded);
    setStateComentar(false)
  };



  const handleClick=()=>{
    if(expanded===false){
      handleExpandClick()
      setStateComentar(true)
    } else 
     setStateComentar(stateComentar===true? false:true)
  }

  

  //  BOTON ENVIAR
  const handleValorInput =()=>{
    if(valorInput!== ''&& datos.ref!== 'escuela'){
    
      actions.setNewComentarioPublicacionGrado({
        valor:valorInput,
        usuario:store.usuario[0].name,
        fecha:new Date().getTime(),
        inicio:1684376844055,
        avatar:store.usuario[0].img,
        respuestas:[]
      },index)

      setValorInput('')
      setStateComentar(false)
    }else if(valorInput!== ''&& datos.ref=== 'escuela'){
      
      actions.setNewComentarioPublicacionEscuela({
        valor:valorInput,
        usuario:store.usuario[0].name,
        inicio:new Date().getTime(),
        fecha:'21 may',
        avatar:store.usuario[0].img,
        respuestas:[]
      },index)
      setValorInput('')
      setStateComentar(false)
    }
  }


  //  enviar a perfil

  const handlePerfil = () => {
    store.perfilDocente.filter((p, i)=>{
      if(p.name=== datos.name){

        navigate(`/Mi Perfil/${i}`)
      }

    } )
  
  }
 


  const like=()=>{
    let cuenta= datos.like===true?datos.numLike-1:datos.numLike+1
    let dato= datos.like===true? false:true
    actions.setLike(index,dato,cuenta)
    
  }
  
 
  const tiempoDePublicacion=()=>{
    // ttMinutos significa tiempo transcurrido en minutos

    let inicio= datos.inicio
    let tiempoActual= new Date().getTime()
    let ttMinutos= (tiempoActual-inicio)/1000/60
    let ttHoras= ttMinutos/60
    let ttDias= ttHoras/24
   
    
   
    if(ttMinutos<60){
      
        if(ttMinutos>=0 && ttMinutos<1){
          return 'Justo ahora'
        } else if(ttMinutos>=1 && ttMinutos<2){
          return '1 minuto'
        } else return ` ${Math.trunc(ttMinutos)} minutos`


    }else if(ttHoras>=1 && ttHoras<24){
      
        if(ttHoras>=1 && ttHoras<2){
          return  '1 hora'
        } else {

          
          return`${Math.trunc(ttHoras)} horas`;
        }
        
    } else if(ttDias>=1 && ttDias<29){
     
        if(ttDias>=1 && ttDias<2){
          
          return  '1 dia'
        } else return`${Math.trunc(ttDias)} dias`
    
    }else return datos.fecha
  }  
  


  const borrarPublicacionEscuela=()=>{
    actions.borrarPublicacionEscuela(index)
  }

 
  

  return (
    <Card  className='aparecer' ref={card}  raised={true} sx={{ maxWidth: 720, marginX:'auto', marginY: 1}} >
   
      <CardHeader
        avatar={
          <Avatar onClick={handlePerfil} sx={{ bgcolor: red[500] }} aria-label="recipe">
            <img src={datos.avatar} alt='valentina' width='40px' />
          </Avatar>
        }
        action={
          
          <IconButton aria-label="settings">
            {datos.name===store.usuario[0].name
              ?
               <ClearIcon onClick={borrarPublicacionEscuela}/>
              :
              null
            }
          </IconButton>
        
        }
        
        title={datos.name}
        subheader={tiempoDePublicacion()}
      />
      <Divider/>

      {datos.tipo==='img'
        ? 

        <CardMedia
          component='img' 
          // image={datos.img}
          alt="imagen de la  publicacion"
          src={datos.img}
          
           sx={{maxHeight:450, objectFit:'contain'}}
          
        />
         : <video ref={marcoVideo} src={datos.img}  loop controls  style={{ maxHeight:400}}/> 
          
     } 

    

   
      <CardContent sx={{paddingY:1}}>
        <Typography variant="body2" color="text.secondary">
          {datos.contenido}
        </Typography>
      </CardContent>


      <CardActions disableSpacing  sx={{padding:0}}>
          <Grid container justifyContent={'center'}>
            <Grid item xs={6} display="flex">

                   {/* corazon LIKE */}
              
              <IconButton 
                aria-label="add to favorites" 
                size="large" 
                onClick={like}
                sx={{paddingLeft:2}}
              >
                {/* contador de  LIKE */}
                <Badge
                  badgeContent={datos.numLike} 
                  anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  color="error"
                >

                  <FavoriteIcon color= {datos.like===true? 'error':''}/>
                          
                </Badge>
                 {/* cierre de contador de  LIKE */}
              </IconButton>

             {/* condicion de like */}

              {datos.like === true && datos.numLike>2
                ?
                <Typography variant="caption" display="flex" sx={{alignItems:'center', fontSize:10}} color= 'text.secondary'  >
                    Tu y {datos.numLike-1} personas mas
                </Typography>
                :datos.like===true && datos.numLike===2
                ?
                <Typography variant="caption" display="flex" sx={{alignItems:'center', fontSize:10}} color= 'text.secondary'  >
                Tu y {datos.numLike-1} persona mas
                </Typography>
                :datos.like=== true && datos.numLike===1?
                <Typography variant="caption" display="flex" sx={{alignItems:'center', fontSize:10}} color= 'text.secondary' >
                  Tu 
                </Typography>
                :datos.like=== false && datos.numLike===1
                ?
                <Typography variant="caption" display="flex" sx={{alignItems:'center', fontSize:10}} color= 'text.secondary' >
                  A una persona 
                </Typography>
                :datos.numLike===null ||datos.numLike=== 0?
                <Typography variant="caption" display="flex" sx={{alignItems:'center', fontSize:10}}color= 'text.secondary'  >
                  0 like
                </Typography>
                :datos.like===false ||datos.numLike> 1?
                <Typography variant="caption" display="flex" sx={{alignItems:'center', fontSize:10}} color= 'text.secondary' >
                  A {datos.numLike} personas 
                </Typography>
                :null

              }
              {/* cierra condicion de like */}

            </Grid>

            <Grid  item  xs={6} container justifyContent="end" display={'flex'}>
              <Grid item xs={12} container justifyContent="end" alignItems='center' >
                <Grid item  >

                    <Typography 
                      variant="caption" 
                      display="inline" 
                      sx={{alignItems:'center', fontSize:10}} 
                      color= 'text.secondary'
                      onClick={handleExpandClick}
                    >
                      Comentarios: {datos.comentarios.length} 
                    </Typography>   
              </Grid>

              <Grid item >

                  <ExpandMore
                    expand={expanded}
                    onClick={handleExpandClick}
                    aria-expanded={expanded}
                    aria-label="show more"
                    >
                      <ExpandMoreIcon />
                  
                  </ExpandMore>
              </Grid>
              </Grid>

            </Grid>
         </Grid>

      </CardActions>
      <Divider/>
      <Grid container spacing='0'>

        <Grid  item display={'flex'} xs={5} justifyContent={'center'}>
          <Box  display={'flex'} onClick={like}>
            <IconButton aria-label="ThumbUpOffAltOutlined" sx={{ml:2}} >  
              <ThumbUpOffAltOutlinedIcon/>
            </IconButton>
            <Typography variant="caption" display="flex" sx={{alignItems:'center'}} color= 'text.secondary'  >
              Me gusta
            </Typography>
          </Box>
        </Grid>


        <Grid item xs={7} display="flex" justifyContent={'center'} >
          <Box  display={'flex'} onClick={handleClick}>
            <IconButton aria-label="ChatBubbleOutlineOutlinedIcon" sx={{ml:2}} onClick={handleClick}>  
              <ChatBubbleOutlineOutlinedIcon/>
            </IconButton>

            <Typography 
              variant="caption" 
              display="flex" 
              sx={{alignItems:'center'}} 
              color= 'text.secondary'
              onClick={handleClick} 
            >  
              Comentar
            </Typography>

          </Box>
        </Grid>

      </Grid>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        
        <CardContent sx={{py:0}}>
          {stateComentar===true&&
            <>
              <TextField className="aparecer "
                id="inputComenta" 
                label="Comenta" 
                variant="outlined"
                fullWidth 
                type= 'text'
                multiline
                value={valorInput}
                color="secondary" focused 
                InputProps={{
                  endAdornment: 
                  <InputAdornment position="end">
                     <IconButton aria-label="HighlightOffIcon" onClick={handleClick}>  
                        <HighlightOffIcon/>
                    </IconButton>

                  </InputAdornment>,
                }}
                onChange={(e)=>setValorInput(e.currentTarget.value)}
                
              />

              <Grid container >
                <Grid
                  item
                  xs={12} 
                  display='flex'
                  alignItems="center"
                  justifyContent={'end'}
                  paddingRight={2}
                  >

                    <Box >

                      <ColorButton 
                        variant="contained"
                        size="small"
                        sx={{px:4, my:1}}
                        onClick={handleValorInput}
                        >
                        Enviar
                      </ColorButton>
                    </Box>
                          
                </Grid>
              </Grid>
                
                
            </>
          }
        </CardContent>
        <Divider/>

        {datos.comentarios.map((c,i)=>(

          <EtiquetaComentarios 
            key ={i} 
            comentario={c}  
            indexPublicacion={index} 
            indexComentario={i}/>
        
        ))} 
                
      </Collapse>
    </Card>
  );
};