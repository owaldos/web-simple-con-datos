import valentina from '../image/valentina.jpeg'
import oswaldo from '../image/119976556_121520916358929_6799021330331753240_n.jpg'
import f1 from '../image/2.jpeg'
import f2 from '../image/3.jpeg'
import f3 from '../image/Captura de pantalla de 2022-03-08 10-24-30.png'
import f4 from '../image/diego.png'
import f5 from '../image/2021-07-11-212717.jpg'
import f6 from '../image/2022-03-22-111021.jpg'
import f7 from '../image/2022-03-22-120958.jpg'
const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			escuela: [
				{ 
				 name:'U.E Guarenas',
				 Codigo:'OD04241907',
				 turno:'Bolivariano',
                 notificaciones:[
					{
					 name:'Oswaldo Salas',
					 avatar:oswaldo,
					 img:f1,
					 fecha:'',
					 contenido:'',
					 visto:false

					},
					{
						name:'Valentina Salas',
						avatar:valentina,
						img:f2,
						fecha:'',
						contenido:'',
						visto:false
   
					},
					{
						name:'Oswaldo Salas',
						avatar:oswaldo,
						img:f3,
						fecha:'',
						contenido:'',
						visto:false
   
					},
					{
					 name:'Oswaldo Salas',
					 avatar:oswaldo,
					 img:f1,
					 fecha:'',
					 contenido:'',
					 visto:false
	
					}
					
				],
				publicaciones:[
					{
					 ref: 'escuela',
					 name:'Oswaldo Salas',
					 avatar:oswaldo,
					 img:f1,
					 fecha:'2 febrero',
					 contenido:'este es el contenido',
					 visto:false,
					 like:false,
					 numLike:null,
					 comentarios:[
						{
							usuario:'Valentina Salas',
							valor: 'a mi si me gustan los cantos, pienso que se aprende mucho y mas rapido',
							fecha:'10 mayo',
							avatar:valentina,
							respuestas:[]

						},
						{
							usuario:'Oswaldo Salas',
							valor: 'hola que tal estan todos, no me parece esos metodos de clase',
							fecha:'10 mayo',
							avatar:oswaldo,
							respuestas:[
								{
									usuario:'Valentina Salas',
									valor: 'y cuales son los metodos de clases que usted propone',
									fecha:'10 mayo',
									avatar:valentina,
									
		
								},
							]

						}
					 ]

					},
					{
						ref: 'escuela',
						name:'Valentina Salas',
						avatar:valentina,
						img:f2,
						fecha:'',
						contenido:'este es el contenido',
						visto:false,
						like:false,
					     numLike:1,
						 comentarios:[]
   
					},
					{
						ref: 'escuela',
						name:'Oswaldo Salas',
						avatar:oswaldo,
						img:f3,
						fecha:'',
						contenido:'este es el contenido',
						visto:false,
						like:false,
					    numLike:2,
						comentarios:[]
   
					},
					{
					 ref: 'escuela',
					 name:'Oswaldo Salas',
					 avatar:oswaldo,
					 img:f1,
					 fecha:'',
					 contenido:'este es el contenido',
					 visto:false,
					 like:false,
					 numLike:3,
					 comentarios:[]
	
					}
					
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
						 name:'Oswaldo Salas',
						 avatar:oswaldo,
						 img:f3,
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
							name:'Valentina Salas',
							avatar:valentina,
							img:f1,
							fecha:'',
							contenido:'',
							vistas:undefined,
							like:false,
							numLike:null,
							comentarios:[]
		   
	   
						},
						{
							ref: '1er Grado',
							name:'Oswaldo Salas',
							avatar:oswaldo,
							img:f2,
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
						 name:'Oswaldo Salas',
						 avatar:oswaldo,
						 img:f3,
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
							avatar:valentina,
							img:f1,
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
							avatar:oswaldo,
							img:f2,
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
					grados:['1er Grado','2do Grado','3do Grado','4to Grado', '5to Grado','6to Grado'],
					seleccionDelUsuario:{
						grado:undefined,

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
			}],
			perfilEstudiante:[
				{
				img:f5,
				name:'Oswaldo',
				cargo:'Estudiante',
				fecha: '1 min'
			},
			{
				img:f6,
				name:'Diego',
				cargo:'Estudiante',
				fecha: '2 hrs'
			},
			{
				img:f7,
				name:'Valentina',
				cargo:'Estudiante',
				fecha: '2 Dias'
			},
			{
				img:oswaldo,
				name:'Oswaldo',
				cargo:'Representante',
				fecha: '1 min'
			},
			{
				img:'',
				name:'Rosa',
				cargo:'Estudiante',
				fecha: '2 hrs'
			},
			{
				img:valentina,
				name:'Valentina',
				cargo:'Estudiante',
				fecha: '2 Dias'
			}],

		},
	
	actions: {

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
			store.escuela[0].publicaciones[indexPublicacion].comentarios[indexComentario].respuestas.push(valor)
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
	