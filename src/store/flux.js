import valentina from '../image/valentina.jpeg'
import oswaldo from '../image/119976556_121520916358929_6799021330331753240_n.jpg'
const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			escuela: 'U.E Guarenas',
			perfilDocente:[
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
			},
		]
		},
	
	actions: {
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
	