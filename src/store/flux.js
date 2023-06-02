import valentina from '../images/valentina.jpeg'
import oswaldo from '../images/119976556_121520916358929_6799021330331753240_n.jpg'
import f1 from '../images/2.jpeg'
import f2 from '../images/3.jpeg'
import f3 from '../images/Captura de pantalla de 2022-03-08 10-24-30.png'
import f4 from '../images/diego.png'
import f5 from '../images/2021-07-11-212717.jpg'
import f6 from '../images/2022-03-22-111021.jpg'
import f7 from '../images/2022-03-22-120958.jpg'
import v from '../images/compress3.mp4'
import f8 from '../images/Foto de Oswaldo (1).jpg'
import v2 from '../images/y2mate.com - DISCURSO DIRECTOR PARA BIENVENIDA INICIO DE CLASES 2021_v240P.mp4'
import e1 from '../images/1685557836179.jpg'
import e2 from '../images/1685557836200.jpg'
import e4 from '../images/compres42.mp4'
import e5 from '../images/compress43.mp4'
import faltaImg from '../images/falta imagen.png'
import sinFoto from '../images/sin foto.jpg'
const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			cargado:false,
			escuela: [
				{ 
			    
				 name:'U.E Guarenas',
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
					 img:f1,
					 inicio:684366844055,
					 fecha:'1/1/2023',
					 contenido:'',
					 visto:false

					},
					{
						name:'Valentina Salas',
						avatar:valentina,
						img:f2,
						inicio:684366844055,
						fecha:'1/1/2023',
						contenido:'',
						visto:false
   
					},
					{
						name:'Oswaldo Salas',
						avatar:oswaldo,
						img:f3,
						inicio:684366844055,
						fecha:'1/1/2023',
						contenido:'',
						visto:false
   
					},
					{
					 name:'Oswaldo Salas',
					 avatar:oswaldo,
					 img:f1,
					 inicio:684366844055,
					 fecha:'1/1/2023',
					 contenido:'',
					 visto:false
	
					},{
						name:'Oswaldo Salas',
						avatar:oswaldo,
						img:f1,
						inicio:684366844055,
						fecha:'1/1/2023',
						contenido:'',
						visto:false
   
					   },
					   {
						   name:'Valentina Salas',
						   avatar:valentina,
						   img:f2,
						   inicio:684366844055,
						   fecha:'1/1/2023',
						   contenido:'',
						   visto:false
	  
					   },
					   {
						   name:'Oswaldo Salas',
						   avatar:oswaldo,
						   img:f3,
						   inicio:684366844055,
						   fecha:'1/1/2023',
						   contenido:'',
						   visto:false
	  
					   },
					   {
						name:'Oswaldo Salas',
						avatar:oswaldo,
						img:f1,
						inicio:684366844055,
						fecha:'1/1/2023',
						contenido:'',
						visto:false
	   
					   },{
						name:'Oswaldo Salas',
						avatar:oswaldo,
						img:f1,
						inicio:684366844055,
						fecha:'1/1/2023',
						contenido:'',
						visto:false
   
					   },
					   {
						   name:'Valentina Salas',
						   avatar:valentina,
						   img:f2,
						   inicio:684366844055,
						   fecha:'1/1/2023',
						   contenido:'',
						   visto:false
	  
					   },
					   {
						   name:'Oswaldo Salas',
						   avatar:oswaldo,
						   img:f3,
						   inicio:684366844055,
						   fecha:'1/1/2023',
						   contenido:'',
						   visto:false
	  
					   },
					   {
						name:'Oswaldo Salas',
						avatar:oswaldo,
						img:f1,
						inicio:684366844055,
						fecha:'1/1/2023',
						contenido:'',
						visto:false
	   
					   }
					
				],
				publicaciones:[
					{
					 tipo:'video',
					 ref: 'escuela',
					 name:'Oswaldo Salas',
					 avatar:oswaldo,
					 img:v2,
					 inicio:'168449395490',
					 fecha:'12/1/2027',
					 contenido:'aquí les dejo un video bien entretenido y educativo 100%, dala un vistazo y comenta que te parece ',
					 visto:false,
					 like:false,
					 numLike:null,
					 comentarios:[
						{
							usuario:'Valentina Salas',
							valor: 'me gustan mucho ese tipo de videos, tanto para los niños como para nosotros los adultos',
							inicio:'1684366844055',
							fecha:'12/1/2023',
							avatar:valentina,
							respuestas:[]

						},
						{
							usuario:'Oswaldo Salas',
							valor: 'hola que tal estan todos, no me parece esos metodos de clase',
							inicio:'1684366844055',
							fecha:'12/1/2023',
							avatar:oswaldo,
							respuestas:[
								{
									usuario:'Valentina Salas',
									valor: 'y cuales son los metodos de clases que usted propone?',
									inicio:'1684442065905',
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
						name:'Valentina Salas',
						avatar:valentina,
						img:f2,
						inicio:1684366844055,
						fecha:'12/1/2023',
						contenido:'la alegria de tener los nuevos útiles escolares',
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
						img:v,
						inicio:'168449395490',
						fecha:'12/1/2023',
						contenido:'queremos ayudarte a grabar, animate y sube tu demo',
						visto:false,
						like:false,
						numLike:null,
						comentarios:[]
						  
						
   
					   },
					{
						ref: 'escuela',
						tipo:'img',
						name:'Oswaldo Salas',
						avatar:oswaldo,
						img:f3,
						inicio:1684366844055,
						fecha:'12/1/2023',
						contenido:'este es el contenido',
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
					 contenido:'este es el contenido',
					 visto:false,
					 like:false,
					 numLike:3,
					 comentarios:[]
	
					},
					{
						ref: 'escuela',
						tipo:'img',
						name:'Oswaldo Salas',
						avatar:oswaldo,
						img:f1,
						inicio:1684366844055,
						fecha:'12/1/2023',
						contenido:'este es el contenido',
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
					name:'1er Grado',
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
						 img:e1,
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
							img:e2,
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
					name:'4to Grado',
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
					grados:['1er Grado','4to Grado'],
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
			menuPrincipal: ['Crear Publicacion','Perfil Escolar', 'Matricula','Documentos', 
				'Calendario', 'Registro descriptivo', 'Comunicación ', 'Galeria',
				'Horarios','Recursos de Aprendizaje', 'Proyecto Escolar','Control App'
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
	