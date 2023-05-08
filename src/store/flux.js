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
						 name:'Oswaldo Salas',
						 avatar:oswaldo,
						 img:f3,
						 fecha:'',
						 contenido:''
	
						},
						{
							name:'Valentina Salas',
							avatar:valentina,
							img:f1,
							fecha:'',
							contenido:''
	   
						},
						{
							name:'Oswaldo Salas',
							avatar:oswaldo,
							img:f2,
							fecha:'',
							contenido:''
	   
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
						 name:'Oswaldo Salas',
						 avatar:oswaldo,
						 img:f3,
						 fecha:'',
						 contenido:''
	
						},
						{
							name:'Valentina Salas',
							avatar:valentina,
							img:f1,
							fecha:'',
							contenido:''
	   
						},
						{
							name:'Oswaldo Salas',
							avatar:oswaldo,
							img:f2,
							fecha:'',
							contenido:''
	   
						   },
					],
			    }

				 
				
			],
			usuario:[
				{
					name:'Valentina',
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

		setvistos:(index) => {
			const store= getStore();
			store.escuela[0].notificaciones[index].visto=true
			setStore( store)
		},
		setSeleccionGrado:(grado) => {
			const store= getStore();
			store.usuario[0].seleccionDelUsuario.grado = grado
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
	