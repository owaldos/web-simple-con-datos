import valentina from '../images/valentina.jpeg'
import oswaldo from '../images/119976556_121520916358929_6799021330331753240_n.jpg'
import f1 from '../images/2.jpeg'
import f2 from '../images/Captura desde 2023-06-11 13-12-59.png'
import f3 from '../images/WhatsApp Image 2023-06-11 at 2.11.28 PM.jpeg'
import f4 from '../images/diego.png'
import f5 from '../images/2021-07-11-212717.jpg'
import f6 from '../images/2022-03-22-111021.jpg'
import f7 from '../images/2022-03-22-120958.jpg'
import i1 from '../images/inicial.png'
import f8 from '../images/h_react.jpg'
import v2 from '../images/VID-20230531-WA0009.mp4'
import e1 from '../images/1685557836179.jpg'
import e2 from '../images/1685557836200.jpg'
import e4 from '../images/compres42.mp4'
import e5 from '../images/compress43.mp4'
import faltaImg from '../images/falta imagen.png'
import sinFoto from '../images/sin foto.jpg'
import propuesta from '../images/propuesta.mp4'
const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			cargado:false,
			escuela: [
				{ 
			    
				 name:'IUNAV',
				 logo:f7,
				 faltaImg:faltaImg,
				 sinFoto: sinFoto,
				 Codigo:'OD04241907',
				 turno:'Bolivariano',
				 isReadyForInstall:false,
                 notificaciones:[
					{
					 name:'Oswaldo Salas',
					 avatar:oswaldo,
					 inicio:684366844055,
					 fecha:'01/05/2023',
					 contenido:'Hola Valentina, queremos recordarte la participación especial que tienes con nosotros este fin de semana. por favor confirma tu asistencia',
					 visto:false,
                  

					},
					{
						name:'Valentina Salas',
						avatar:valentina,
						img:f2,
						inicio:684366844055,
						fecha:'01/05/2023',
						contenido:'en estos momentos estoy trabajando con WebSocket para poder ofrecer comunicación en tiempo real como la hace WhatsApp ',

						visto:false
   
					},
					{
						name:'Oswaldo Salas',
						avatar:oswaldo,
						img:f3,
						inicio:684366844055,
						fecha:'01/05/2023',
						contenido:['el contenido','una respuesta'],

						visto:false
   
					},
					{
					 name:'Oswaldo Salas',
					 avatar:oswaldo,
					 img:f1,
					 inicio:684366844055,
					 fecha:'01/05/2023',
					 contenido:['el contenido','una respuesta'],

					 visto:false
	
					},{
						name:'Oswaldo Salas',
						avatar:oswaldo,
						img:f1,
						inicio:684366844055,
						fecha:'01/05/2023',
						contenido:['el contenido','una respuesta'],

						visto:false
   
					   },
					   {
						   name:'Valentina Salas',
						   avatar:valentina,
						   img:f2,
						   inicio:684366844055,
						   fecha:'01/05/2023',
						   contenido:['el contenido','una respuesta'],

						   visto:false
	  
					   },
					   {
						   name:'Oswaldo Salas',
						   avatar:oswaldo,
						   img:f3,
						   inicio:684366844055,
						   fecha:'01/05/2023',
						   contenido:['el contenido','una respuesta'],

						   visto:false
	  
					   },
					   {
						name:'Oswaldo Salas',
						avatar:oswaldo,
						img:f1,
						inicio:684366844055,
						fecha:'01/05/2023',
						contenido:['el contenido','una respuesta'],

						visto:false
	   
					   },{
						name:'Oswaldo Salas',
						avatar:oswaldo,
						img:f1,
						inicio:684366844055,
						fecha:'01/05/2023',
						contenido:['el contenido','una respuesta'],

						visto:false
   
					   },
					   {
						   name:'Valentina Salas',
						   avatar:valentina,
						   img:f2,
						   inicio:684366844055,
						   fecha:'01/05/2023',
						   contenido:['el contenido','una respuesta'],

						   visto:false
	  
					   },
					   {
						   name:'Oswaldo Salas',
						   avatar:oswaldo,
						   img:f3,
						   inicio:684366844055,
						   fecha:'01/05/2023',
						   contenido:['el contenido','una respuesta'],

						   visto:false
	  
					   },
					   {
						name:'Oswaldo Salas',
						avatar:oswaldo,
						img:f1,
						inicio:684366844055,
						fecha:'01/05/2023',
						contenido:['el contenido','una respuesta'],

						visto:false
	   
					   }
					
				],
				publicaciones:[
					{
					 tipo:'img',
					 ref: 'escuela',
					 name:'Oswaldo Salas',
					 avatar:oswaldo,
					 img:i1,
					 inicio:'1686509124322',
					 fecha:'11/06/2023',
					 contenido:'La pagina inicial conviene que sea  complatamente dinámica para modificarla las veces que desee desde su móvil.',
					 visto:false,
					 like:false,
					 numLike:null,
					 comentarios:[]

					},
					{
						ref: 'escuela',
						tipo:'img',
						name:'Valentina Salas',
						avatar:valentina,
						img:f2,
						inicio:1686509124322,
						fecha:'12/1/2023',
						contenido:'El campus virtual puede estar en el icono en forma de libro abierto de la barra navegadora de esta app, si vas allí  pueden ver que les deje una muestra, aun no funciona pero pueden tomarlo como una idea , no aplique ningun estilo por motivos de tiempo, pero imagine lo que necesita y muchas de esas cosas se podran hacer sin ninguna complicación',
						visto:false,
						like:false,
					     numLike:1,
						 comentarios:[]
   
					},
					{
						tipo:'video',
						ref: 'escuela',
						name:'Oswaldo Salas',
						avatar:oswaldo,
						img:v2,
						inicio:'1686509124322',
						fecha:'12/1/2023',
						contenido:'Vídeo promocional de nuestra amada universidad para las damas del Congreso🙏🏼, esto demuestra que una vez terminada la App puedes subir tus videos, puedes probar en este momento lade like y comenta ',
						visto:false,
						like:false,
						numLike:null,
						comentarios:[
							{
								usuario:'Valentina Salas',
								valor: 'El video les quedo espectacular ',
								inicio:'1686509124322',
								fecha:'12/1/2023',
								avatar:valentina,
								respuestas:[]
	
							},
							{
								usuario:'Oswaldo Salas',
								valor: 'Yo pase el video para demostrar la capacidad que tiene esta App de subir videos y de comentar . Pero ahora me doy cuenta que a nosotros los hombres no nos involucraron en nada. ',
								inicio:'1686509124322',
								fecha:'12/1/2023',
								avatar:oswaldo,
								respuestas:[
									{
										usuario:'Valentina Salas',
										valor: 'ustedes no entienden muchas cosas de nosotras las mujeres. no te ofendas pero es para que veas la capasidad que tiene la App para responder.🤣🤣🤣',
										inicio:'1686509124322',
										fecha:'12/1/2023',
										avatar:valentina,
										
			
									},
								]
	
							}
						 ]
						
						  
						
   
					   },
					{
						ref: 'escuela',
						tipo:'img',
						name:'Oswaldo Salas',
						avatar:oswaldo,
						img:f3,
						inicio:1686509124322,
						fecha:'12/1/2023',
						contenido:'la facilidad de  acceso a la App  es muy importante por eso podemos usar las ultimas tecnologías de la web para crear aplicaciones instalables en su movil. puede ir al avatar en la parte superior derecha de la App y allí encontrara un boton para instalar la app. en algunos móviles es posible que no se instale a la primera , solo tendria que recargar la pagina y volver a instalar. en Iphone todavia no se han realizado pruebas , no estoy seguro si funciona correctamente',
						visto:false,
						like:false,
					    numLike:2,
						comentarios:[]
   
					},
					{
					 ref: 'escuela',
					 tipo:'img',
					 name:'Oswaldo Salas',
					 avatar:oswaldo,
					 img:f8,
					 inicio:1684366844055,
					 fecha:'12/1/2023',
					 contenido:'Esta App esta construida con React Js, tecnología de programación mas demandada en los ultimos años, ademas  con las metodologías de programación que usa Facebook e Instagram tambien implementando actualmente  las metodologías de WhatsApp y YouTube es una tarea ardua pero quiero lograr una App con mas cosas a su favor que desventajas, actualmente esta App esta en modo desarrollo y hay muchas funcionalidades deshabilitadas ',
					 visto:false,
					 like:false,
					 numLike:3,
					 comentarios:[]
	
					},
				
					
				]
				}
				
			],

			grados:[
				{
					name:'Oficina de Grados',
					notificaciones:[
						{
						 name:'Oswaldo Salas',
						 avatar:oswaldo,
						 img:f1,
						 inicio:684366844055,
						 fecha:'1/1/2023',
						 contenido:['contenido de primero','una respuesta de un representante'],
	
						 visto:false
	
						},
						{
							name:'Valentina Salas',
							avatar:valentina,
							img:f2,
							inicio:684366844055,
							fecha:'1/1/2023',
							contenido:['el contenido','una respuesta'],
	
							visto:false
	   
						},
						{
							name:'Oswaldo Salas',
							avatar:oswaldo,
							img:f3,
							inicio:684366844055,
							fecha:'1/1/2023',
							contenido:['el contenido','una respuesta'],
	
							visto:false
	   
						},
						{
						 name:'Oswaldo Salas',
						 avatar:oswaldo,
						 img:f1,
						 inicio:684366844055,
						 fecha:'1/1/2023',
						 contenido:['el contenido','una respuesta'],
	
						 visto:false
		
						},{
							name:'Oswaldo Salas',
							avatar:oswaldo,
							img:f1,
							inicio:684366844055,
							fecha:'1/1/2023',
							contenido:['el contenido','una respuesta'],
	
							visto:false
	   
						   },
						   {
							   name:'Valentina Salas',
							   avatar:valentina,
							   img:f2,
							   inicio:684366844055,
							   fecha:'1/1/2023',
							   contenido:['el contenido','una respuesta'],
	
							   visto:false
		  
						   },
						   {
							   name:'Oswaldo Salas',
							   avatar:oswaldo,
							   img:f3,
							   inicio:684366844055,
							   fecha:'1/1/2023',
							   contenido:['el contenido','una respuesta'],
	
							   visto:false
		  
						   },
						   {
							name:'Oswaldo Salas',
							avatar:oswaldo,
							img:f1,
							inicio:684366844055,
							fecha:'1/1/2023',
							contenido:['el contenido','una respuesta'],
	
							visto:false
		   
						   },{
							name:'Oswaldo Salas',
							avatar:oswaldo,
							img:f1,
							inicio:684366844055,
							fecha:'1/1/2023',
							contenido:['el contenido','una respuesta'],
	
							visto:false
	   
						   },
						   {
							   name:'Valentina Salas',
							   avatar:valentina,
							   img:f2,
							   inicio:684366844055,
							   fecha:'1/1/2023',
							   contenido:['el contenido','una respuesta'],
	
							   visto:false
		  
						   },
						   {
							   name:'Oswaldo Salas',
							   avatar:oswaldo,
							   img:f3,
							   inicio:684366844055,
							   fecha:'1/1/2023',
							   contenido:['el contenido','una respuesta'],
	
							   visto:false
		  
						   },
						   {
							name:'Oswaldo Salas',
							avatar:oswaldo,
							img:f1,
							inicio:684366844055,
							fecha:'1/1/2023',
							contenido:['el contenido','una respuesta'],
	
							visto:false
		   
						   }
						
					],
					proyectos:['Acuerdos de convivencias','Proyecto de aula','Tareas','Cronograma de actividades'],
					estudiantes:[
						{
							img:oswaldo,
							name:'Oswaldo',
							cargo:'Deporte',
							fecha: '1 min'
						},
						{
							img:f4,
							name:'Diego',
							cargo:'Supervisor',
							fecha: '2 hrs'
						},
						{
							img:valentina,
							name:'Valentina',
							cargo:'Directora',
							fecha: '2 Dias'
						},
						{
							img:oswaldo,
							name:'Oswaldo',
							cargo:'Deporte',
							fecha: '1 min'
						},
						{
							img:'',
							name:'Rosa',
							cargo:'Docente Aula',
							fecha: '2 hrs'
						},
						{
							img:valentina,
							name:'Valentina',
							cargo:'Directora',
							fecha: '2 Dias'
						}
					],
					publicaciones:	[
						{
						 ref: '1er Grado',
						 tipo:'img',
						 name:'Oswaldo Salas',
						 avatar:oswaldo,
						 img:faltaImg,
						 inicio:'',
						 fecha:'',
						 contenido:'',
						 vistas:undefined,
						 like:false,
						 numLike:null,
						 comentarios:[
							
						 ]
		
	
						},
						{
							ref: '1er Grado',
							tipo:'img',
							name:'Valentina Salas',
							avatar:valentina,
							img:faltaImg,
							inicio:'',
							fecha:'',
							contenido:'',
							vistas:undefined,
							like:false,
							numLike:null,
							comentarios:[]
		   
	   
						},
						{
							ref: '1er Grado',
							tipo:'img',
							name:'Oswaldo Salas',
							avatar:oswaldo,
							img:f2,
							inicio:'',
							fecha:'',
							contenido:'',
							vistas:undefined,
							like:false,
							numLike:null,
							comentarios:[]
		   
	   
						   },
					],
			    },
				{
					name:'Diplomados',
					notificaciones:[
						{
						 name:'Oswaldo Salas',
						 avatar:oswaldo,
						 img:f1,
						 inicio:684366844055,
						 fecha:'1/1/2023',
						 contenido:['el contenidode 4to','una respuesta'],
	
						 visto:false
	
						},
						{
							name:'Valentina Salas',
							avatar:valentina,
							img:f2,
							inicio:684366844055,
							fecha:'1/1/2023',
							contenido:['el contenido','una respuesta'],
	
							visto:false
	   
						},
						{
							name:'Oswaldo Salas',
							avatar:oswaldo,
							img:f3,
							inicio:684366844055,
							fecha:'1/1/2023',
							contenido:['el contenido','una respuesta'],
	
							visto:false
	   
						},
						{
						 name:'Oswaldo Salas',
						 avatar:oswaldo,
						 img:f1,
						 inicio:684366844055,
						 fecha:'1/1/2023',
						 contenido:['el contenido','una respuesta'],
	
						 visto:false
		
						},{
							name:'Oswaldo Salas',
							avatar:oswaldo,
							img:f1,
							inicio:684366844055,
							fecha:'1/1/2023',
							contenido:['el contenido','una respuesta'],
	
							visto:false
	   
						   },
						   {
							   name:'Valentina Salas',
							   avatar:valentina,
							   img:f2,
							   inicio:684366844055,
							   fecha:'1/1/2023',
							   contenido:['el contenido','una respuesta'],
	
							   visto:false
		  
						   },
						   {
							   name:'Oswaldo Salas',
							   avatar:oswaldo,
							   img:f3,
							   inicio:684366844055,
							   fecha:'1/1/2023',
							   contenido:['el contenido','una respuesta'],
	
							   visto:false
		  
						   },
						   {
							name:'Oswaldo Salas',
							avatar:oswaldo,
							img:f1,
							inicio:684366844055,
							fecha:'1/1/2023',
							contenido:['el contenido','una respuesta'],
	
							visto:false
		   
						   },{
							name:'Oswaldo Salas',
							avatar:oswaldo,
							img:f1,
							inicio:684366844055,
							fecha:'1/1/2023',
							contenido:['el contenido','una respuesta'],
	
							visto:false
	   
						   },
						   {
							   name:'Valentina Salas',
							   avatar:valentina,
							   img:f2,
							   inicio:684366844055,
							   fecha:'1/1/2023',
							   contenido:['el contenido','una respuesta'],
	
							   visto:false
		  
						   },
						   {
							   name:'Oswaldo Salas',
							   avatar:oswaldo,
							   img:f3,
							   inicio:684366844055,
							   fecha:'1/1/2023',
							   contenido:['el contenido','una respuesta'],
	
							   visto:false
		  
						   },
						   {
							name:'Oswaldo Salas',
							avatar:oswaldo,
							img:f1,
							inicio:684366844055,
							fecha:'1/1/2023',
							contenido:['el contenido','una respuesta'],
	
							visto:false
		   
						   }
						
					],
					proyectos:['Acuerdos de convivencias','Proyecto de aula','Tareas','Cronograma de actividades'],
					estudiantes:[
						{
							img:oswaldo,
							name:'Oswaldo',
							cargo:'Deporte',
							fecha: '1 min'
						},
						{
							img:f4,
							name:'Diego',
							cargo:'Supervisor',
							fecha: '2 hrs'
						},
						{
							img:valentina,
							name:'Valentina',
							cargo:'Directora',
							fecha: '2 Dias'
						},
						{
							img:oswaldo,
							name:'Oswaldo',
							cargo:'Deporte',
							fecha: '1 min'
						},
						{
							img:'',
							name:'Rosa',
							cargo:'Docente Aula',
							fecha: '2 hrs'
						},
						{
							img:valentina,
							name:'Valentina',
							cargo:'Directora',
							fecha: '2 Dias'
						}
					],
					publicaciones:	[
						{
						 ref: '4to Grado',
						 tipo:'img',
						 name:'Oswaldo Salas',
						 avatar:oswaldo,
						 img:f3,
						 inicio:'',
						 fecha:'',
						 contenido:'',
						 vistas:undefined,
						 like:false,
					     numLike:null,
						 comentarios:[]
	
	
						},
						{
							ref: '4to Grado',
							name:'Valentina Salas',
							tipo:'video',
							avatar:valentina,
							img:e4,
							inicio:'',
							fecha:'',
							contenido:'',
							vistas:undefined,
							like:false,
							numLike:null,
							comentarios:[]
		   
	   
						},
						{
							ref: '4to Grado',
							name:'Oswaldo Salas',
							tipo:'video',
							avatar:oswaldo,
							img:e5,
							inicio:'',
							fecha:'',
							contenido:'',
							vistas:undefined,
							like:false,
							numLike:null,
							comentarios:[]
		   
	   
						   },
					],
			    }

				 
				
			],
			usuario:[
				{
					name:'Valentina Salas',
					id:1,
					img:valentina,
					representados:['laura Fofia','Amelia'],
					publicaciones:null,
					grados:['Oficina de Grados','Diplomados','T.S.U','Teología','Departamentos de idiomas', 'Cursos', 'Academia de Musica'],
					seleccionDelUsuario:{
						grado:0,
                    },
					notificaciones:[
						{
							img:oswaldo,
							name:'Oswaldo',
							cargo:'Deporte',
							fecha: '1 min',
							visto:false
						},
						{
							img:'',
							name:'Rosa',
							cargo:'Docente Aula',
							fecha: '2 hrs',
							visto: false
						},
						{
							img:valentina,
							name:'Valentina',
							cargo:'Directora',
							fecha: '2 Dias',
							visto:false
						},
						{
							img:oswaldo,
							name:'Oswaldo',
							cargo:'Deporte',
							fecha: '1 min',
							visto:false
						},
						{
							img:'',
							name:'Rosa',
							cargo:'Docente Aula',
							fecha: '2 hrs',
							visto:false
						},
						{
							img:valentina,
							name:'Valentina',
							cargo:'Directora',
							fecha: '2 Dias',
							visto:false
						}
					],
				},
			],
			menuPrincipal: ['Contacto Universitario','Noticias','Horarios','Procesos Académicos','Sobre Cuotas'
				
				
				// 'Crear Publicacion','Perfil Escolar', 'Matricula','Documentos', 
				// 'Calendario', 'Registro descriptivo', 'Comunicación ', 'Galeria',
				// 'Horarios','Recursos de Aprendizaje', 'Proyecto Escolar','Control App'
            ],
			menuGrado:['Crear Publicacion', 'Perfil del Grado','Matricula','Documentos',
				'Recursos de Aprendizaje', 'Calendario', 'Registro descriptivo', 'Comunicacion','Galeria', 
				'Horarios', 'Proyectos y Acuerdos', 'Tareas'
		    ],
			proyectosGrado:['Acuerdos de convivencias','Proyecto de aula','Tareas','Cronograma de actividades'],

			perfilDocente:[
				{
				img:oswaldo,
				name:'Oswaldo Salas',
				cargo:'Deporte',
				titulos:'Licenciado en Educación',
				matricula: 60,
				vive:'Los Teques',
				esDe:'Los Teques',
				trabajoEn:'Escuela Buenos Aires',
				estadoCivil:'Casado',
				fechaNacimiento: '07/11/1985'
				
			},
			{
				img:null,
				name:'Diego Ardila',
				cargo:'Supervisor',
				titulos:'Licenciado en Educación',
				matricula: 1030,
				vive:'Los Teques',
				esDe:'Nirgua',
				trabajoEn:'Escuela Nirgua',
				estadoCivil:'soltero',
				fechaNacimiento: '04/02/2012'
			},
			{
				img:valentina,
				name:'Valentina Salas',
				cargo:'Directora',
				titulos:'Doctora en comunicación',
				matricula: '1006 estudiantes y 60 docentes',
				vive:'Lomas de Urquias',
				esDe:'Carupano',
				trabajoEn:'defensoria del pueblo',
				estadoCivil:'Ssoltera',
				fechaNacimiento: '31/12/2014'
				
			},
			{
				img:oswaldo,
				name:'Oswaldo Amundarain',
				cargo:'Deporte',
				titulos:'Licenciado en Educación',
				matricula: 60,
				vive:'Los Teques',
				esDe:'Los Teques',
				trabajoEn:'Escuela Buenos Aires',
				estadoCivil:'Casado',
				fechaNacimiento: '07/11/1985'
				
			},
			{
				img:f7,
				name:'Rosa Margarita Amundarain',
				cargo:'Docente Aula',
				titulos:'Licenciado en Educación',
				matricula: 30,
				vive:'Los Teques',
				esDe:'Er Pilar',
				trabajoEn:'Escuela Bolivariana Guayana',
				estadoCivil:'Casada',
				fechaNacimiento: '05/03/1992'
				
			},
			{
				img:valentina,
				name:'Valentina Roseswel Salas',
				cargo:'Directora',
				titulos:'Licenciado en Educación',
				matricula: 60,
				vive:'Los Teques',
				esDe:'Los Teques',
				trabajoEn:'Escuela Buenos Aires',
				estadoCivil:'Casado',
				fechaNacimiento: '07/11/1985'
				
			}],


			perfilEstudiante:[
				{
				img:f5,
				name:'Oswaldo',
				cargo:'Estudiante',
				
			},
			{
				img:f6,
				name:'Diego',
				cargo:'Estudiante',
				
			},
			{
				img:f7,
				name:'Valentina',
				cargo:'Estudiante',
				
			},
			{
				img:oswaldo,
				name:'Oswaldo',
				cargo:'Representante',
				
			},
			{
				img:'',
				name:'Rosa',
				cargo:'Estudiante',
				
			},
			{
				img:valentina,
				name:'Valentina',
				cargo:'Estudiante',
				
			}],

		},
	
	actions: {
		cargado:()=>{
			const store= getStore();
			store.cargado=true
			setStore( store)

		},
		
		fecha:(segundos)=>{
			const store= getStore();
			store.escuela[0].fecha=segundos
			setStore( store)

		},

		setvistosNotificacionesEscuela:(index) => {
			const store= getStore();
			store.escuela[0].notificaciones[index].visto=true
			setStore( store)
			
		},
		setvistosNotificacionesGrado:(index, indexNotif) => {
			const store= getStore();
			store.grados[index].notificaciones[indexNotif].visto=true
			setStore( store)
			
		},
		setLike:(index, dato,cuenta) => {
			const store= getStore();
			store.escuela[0].publicaciones[index].like= dato
			store.escuela[0].publicaciones[index].numLike =cuenta
			setStore( store)
			
		},
		setSeleccionGrado:(grado) => {
			const store= getStore();
			store.usuario[0].seleccionDelUsuario.grado = grado
			setStore( store)
		},
		setNewComentarioPublicacionEscuela:(valor, index)=>{
			
			const store= getStore();
			store.escuela[0].publicaciones[index].comentarios.unshift(valor)
			
            
		},
		setNewComentarioPublicacionGrado:(valor, index)=>{
			
			const store= getStore();
			store.grados[0].publicaciones[index].comentarios.unshift(valor)
			setStore( store)

		},
		setNewRespuestaPublicacionEscuela:(valor, indexPublicacion, indexComentario)=>{
			const store= getStore();
			store.escuela[0].publicaciones[indexPublicacion].comentarios[indexComentario].respuestas.unshift(valor)
			setStore( store)

		},
		borrarPublicacionEscuela:(index)=>{
			const store= getStore();
			store.escuela[0].publicaciones.splice(index,1)
			setStore( store)

		},
		borrarComentarioEscuela:(indexpublicacion,indexComentario)=>{
			const store= getStore();
			store.escuela[0].publicaciones[indexpublicacion].comentarios.splice(indexComentario,1)
			setStore( store)
		},
		borrarRespuestaEscuela:(indexpublicacion,indexComentario,indexRespuesta)=>{
			const store= getStore();
			store.escuela[0].publicaciones[indexpublicacion].comentarios[indexComentario].respuestas.splice(indexRespuesta,1)
			setStore( store)
		},



		setToken: () => {
			setStore(
				{
					token: localStorage.getItem("token"),
					ONG: localStorage.getItem("ONG"),
					id:localStorage.getItem('id')
				});
		},
	
		deleteToken: () => {
			localStorage.removeItem("token");
			localStorage.removeItem("ONG");
			localStorage.removeItem("id");
			
			setStore({ token: undefined,ONG:"" ,id:undefined});
		},
	
		getONG: async () => {
			const store= getStore()
			let response = await fetch(`${store.url_api}/ong`);
			let body = await response.json();
			if(response.ok){
				setStore({dataONG:body})
			}
	
		},
		getActivities: async () => {
			const store= getStore()
			let response = await fetch(`${store.url_api}/activities`);
			let body = await response.json();
			if(response.ok){
				setStore({activities:body})
			}
	
		},
		setImage:(img) => {
			setStore({img:img})
		},
		setLogo:(logo) => {
			setStore({logo:logo})

		}, 
		onOffSignin:()=>{
			const prevStore = getStore()
			setStore({onOffSignin:!prevStore.onOffSignin})
		},
		deleteLogoImg:()=>{
			setStore({img:undefined, logo: undefined})
		},
		modalDonar:()=>{
			const prevStore = getStore()
			setStore({modalDonar:!prevStore.modalDonar})
		},
		modalEvent:()=>{
			const prevStore = getStore()
			setStore({modalEvent:!prevStore.modalEvent})
		},
		setImgEvent:(img) => {
			setStore({imgEvent:img})
		},
		deleteImgEvent:()=>{
			setStore({imgEvent:undefined})
		}


	}
};
};
	
export default getState;
	