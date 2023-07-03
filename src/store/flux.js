
const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			modoBorrar:false,
			listaCategorias: [
				
				'ACCESORIOS', 
				'ACCESORIOS MOTOS',
				// 'BICICLETAS',
				// 'BOLSOS',
				// 'BOMBAS',
				// 'BUJIAS MOTOS',
				// 'CAMPAMENTO',
				// 'CASCOS',
				// 'CAUCHOS BICICLETA',
				// 'CAUCHOS MOTOS',
				// 'ELECTRICOS',
				// 'FERRETERIA',
				// 'FRENOS',
				// 'FRENOS MOTOS',
				// 'GUANTES',
				// 'GUAYA DE MOTOS',
				// 'GUAYAS',
				// 'HERRAMIENTAS',
				// 'HORQUILLAS',
				// 'INDUMENTARIA',
				// 'LUBRICANTES',
				// 'LUCES',
				// 'LUCES MOTOS',
				// 'MANTENIMIENTO',
				// 'MANUBRIOS',
				// 'MONOPATIN',
				// 'PARCHOS',
				// 'PEDALES',
				// 'PINTURAS',
				// 'PLATOS',
				// 'POTENCIAS',
                //  'PUÑOS',
				//  'RACHES',
				//  'RAYOS',
				//  'REPUESTOS',
				//  'REPUESTOS MOTOS',
				//  'RINES',
				//  'RODAMIENTOS',
				//  'ROPA',
				//  'SEGURIDAD',
				//  'SILLAS',
				//  'TERMOS',
				//  'TRICILOS',
				//  'TRIPAS BICICLETAS',
				//  'TRIPAS DE MOTOS',
				//  'TUBOS ASIENTO'

            ],
			articulosPorCategoria:[
				{
					categoria:'ACCESORIOS',
					articulos:[]
				},
				{
					categoria:'ACCESORIOS MOTOS',
					articulos:[]
				}
          
			],
			foto:null,
			config:['Publicar un Articulo', 'Eliminar Articulo', 'Modificar Articulo', 'Añadir categoria','imagen de carrusel'],
			registro:{
				key:'123456',
				usuario:'oswaldo',
				password:'123',
				login:false
				
			},
			cargado:false,
		
		
		},
	
	actions: {
		registro:(datos)=>{
			
			const store= getStore();
			if(datos.key=== store.registro.key){
				store.registro.usuario=datos.usuario
                store.registro.password= datos.password
				
				setStore( store)
				
			}

		},
		login:(datos)=>{
			const store= getStore();
		 if(store.registro.password===datos.password & store.registro.usuario===datos.usuario){
               store.registro.login=true
			   setStore(store)
		 }


		},
		cargado:()=>{
			const store= getStore();
			store.cargado=true
			setStore( store)

		},
		articuloNuevo:(values)=>{
			
			const store= getStore();
			 store.articulosPorCategoria.map((o, i)=>{
				if(o.categoria===values.categorias){
					store.articulosPorCategoria[i].articulos.push(values)
					setStore(store)
				}
			 })
			
			
		},
		modoBorrar:(dato)=>{
			const store= getStore();
			store.modoBorrar=dato
			setStore(store)
		},
		borrarArticulo:(categoria, index)=>{
			const store= getStore();	
			store.articulosPorCategoria[categoria].articulos.splice(index,1)
			setStore(store)
				
			
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
	