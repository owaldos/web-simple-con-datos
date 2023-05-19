import React,{useContext, useState} from 'react';
import {Context} from '../store/appContext'
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import { Grid , Box, Button, TextField,IconButton, InputAdornment } from '@mui/material';
import { styled } from '@mui/material/styles';
import { blue } from '@mui/material/colors';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import Collapse from '@mui/material/Collapse';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

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


export default function EtiquetaComentarios({comentario,indexPublicacion,indexComentario}) {
   
  const {store, actions}= useContext(Context)
  const [stateComentar, setStateComentar]= useState(false)
  const [valorInput, setValorInput] = useState('');
  const [expanded, setExpanded] = useState(false);

  
  const clickBorrar =()=>{
    actions.borrarComentarioEscuela(indexPublicacion,indexComentario)
   
  }

  const clickBorrarRespuesta =(indexRespuesta)=>{
    actions.borrarRespuestaEscuela(indexPublicacion,indexComentario,indexRespuesta)
   
  }
  const clickResponder =()=>{
    setStateComentar(!stateComentar)
  }

  const handleExpandClick = () => {
    setExpanded(!expanded);
    setStateComentar(false)
  };


   //  BOTON ENVIAR
   const handleValorInput =()=>{
    // if(valorInput!== ''&& datos.ref!== 'escuela'){
    //   actions.setNewComentarioPublicacionGrado({
    //     valor:valorInput,
    //     usuario:store.usuario[0].name,
    //     fecha:'5 febrero',
    //     avatar:store.usuario[0].img
    //   },index)

    //   setValorInput('')
    //   setStateComentar(false)
    // }else if(valorInput!== ''&& datos.ref=== 'escuela'){
      actions.setNewRespuestaPublicacionEscuela({
        valor:valorInput,
        usuario:store.usuario[0].name,
        fecha:'6 febrero',
        avatar:store.usuario[0].img,
        respuestas:[]
      },indexPublicacion,indexComentario)
      setValorInput('')
      setStateComentar(false)
      setExpanded(true)
    }
  // }


  const tiempoDePublicacion=(datosdelComentario)=>{
    
    // ttMinutos significa tiempo transcurrido en minutos

    let inicio= datosdelComentario.inicio
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
      } else return`${Math.trunc(ttHoras)} horas`;
      
        
    } else if(ttDias>=1 && ttDias<29){
      if(ttDias>=1 && ttDias<2){ 
        return  '1 dia'
      } else return`${Math.trunc(ttDias)} dias`
    
    }else return datosdelComentario.fecha


  }  




  

  return (
    <List 
    bgcolor='#EFF1F1 '
    sx={{ width: '100%', maxWidth: 900, bgcolor: 'background.paper', mx:'auto',padding:0}}
  
    >
      <ListItemButton alignItems="flex-start"  sx={{ paddingY:0}}>
        <ListItemAvatar >
          <Avatar alt="Remy Sharp" src={comentario.avatar} />
        </ListItemAvatar>
        <ListItemText
          primary={
            <Grid container>
              <Grid item  xs={7}>
                <Typography
                  sx={{ display: 'inline' }}
                  component="span"
                  variant="subtitle2"
                  color="text.primary"
                >
                  {comentario.usuario }
                </Typography>

              </Grid>

              <Grid item  xs={5} display='flex' justifyContent={'end'}>
                <Box  sx={{ display: 'inline', alignItems:'center'}}>
                  <Typography
                      sx={{ display: 'inline' }}
                      component="span"
                      variant="caption"
                      color="text.primary"
                    >
                      {tiempoDePublicacion(comentario) }
                    </Typography>

                </Box>
               
                  
               
              </Grid>
              
              

            </Grid>
          }
          secondary={
          
              <Typography
                sx={{ display: 'block', fontSize:12 }}
                component="span"
                variant="caption"
                color="text.secondary"
              >
                {comentario.valor }
              </Typography>
          
          }
        />
             
      </ListItemButton>
      <Button  onClick={clickResponder} id="Responder"  sx={{ padding:0}}>
        <Typography
          sx={{ display: 'inline', fontSize:10, marginLeft:9 }}
          component="span"
          variant="caption"
          color="primary.contrastText"
          >
          Responder
        </Typography>
      </Button>
      {store.usuario[0].name===comentario.usuario&&


      <Button  onClick={clickBorrar}  sx={{ padding:0}}>
        <Typography
          sx={{ display: 'inline', fontSize:10,marginLeft:3 }}
          component="span"
          variant="caption"
          color="primary.contrastText"
          >
          Borrar
        </Typography>
      </Button>
      
      }
       <Typography
                sx={{ display: 'inline', fontSize:10 ,marginLeft:3 }}
                component="span"
                variant="caption"
                color="text.secondary"
                
              >
                Respuestas:{comentario.respuestas.length}
              </Typography>
       
      <ExpandMore
        expand={expanded}
        onClick={handleExpandClick}
        aria-expanded={expanded}
        aria-label="show more"
        sx={{ padding:0}}
        >
         
          <ExpandMoreIcon />
      
      </ExpandMore>

{stateComentar===true&&
            <Box sx={{marginX:5}}>
              <TextField 
                id="Responder" 
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
                     <IconButton aria-label="HighlightOffIcon"onClick={clickResponder} >  
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
                
                
            </Box>
          }
                

     
      <Collapse in={expanded} timeout="auto" unmountOnExit>
      
        {comentario.respuestas.map((r,i)=>(

          <List 
          bgcolor='#EFF1F1 '
          sx={{ width: '93%', maxWidth: 900, bgcolor: 'background.paper', ml:'auto',padding:0}}
          key={i}
          >
              <ListItemButton alignItems="flex-start"  sx={{ paddingY:0}}>
                <ListItemAvatar  sx={{minWidth:35}}>
                  <Avatar alt="Remy Sharp" src={r.avatar} sx={{width:30, height:30}}/>
                </ListItemAvatar>

                <ListItemText  sx={{marginBottom:0}}
                  primary={
                    <Grid container>
                      <Grid item  xs={7}>
                        <Typography
                          sx={{ display: 'inline'}}
                          component="span"
                          variant="subtitle2"
                          color="text.primary"
                        >
                          {r.usuario }
                        </Typography>

                      </Grid>

                      <Grid item  xs={5} display='flex' justifyContent={'end'}>
                        <Box  sx={{ display: 'inline', alignItems:'center'}}>
                          <Typography
                              sx={{ display: 'inline' }}
                              component="span"
                              variant="caption"
                              color="text.primary"
                            >
                              {tiempoDePublicacion(r.fecha) }
                            </Typography>

                        </Box>
                        
                          
                        
                      </Grid>
                      
                      

                    </Grid>
                  }
                  secondary={
                  
                      <Typography
                        sx={{ display: 'block', fontSize:10 }}
                        component="span"
                        variant="caption"
                        color="text.secondary"
                      >
                        {r.valor }
                      </Typography>
                  
                  }
                />
              </ListItemButton>   


              {store.usuario[0].name===r.usuario&&


                <Button  onClick={()=>clickBorrarRespuesta(i)}>
                  <Typography
                    sx={{ display: 'block', fontSize:10, marginLeft:4 }}
                    component="span"
                    variant="caption"
                    color="primary.contrastText"
                    >
                    Borrar
                  </Typography>
                </Button>

              }
          </List> 


              
                            
        ))}          

                    
      </Collapse>
      <Divider variant="inset" component="li" />
    </List>




  );
}



