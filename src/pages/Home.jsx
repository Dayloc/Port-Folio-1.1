import follow_mw2 from "src/assets/img/follow_mw2.jpg";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { useNavigate } from "react-router-dom"; 

export const Home = () => {

  const {store, dispatch} =useGlobalReducer()
	const navigate = useNavigate()

	return (
		<div className="container text-center mt-3 text-info ">
		<h1 className=" text-warning mb-2">¡Hola! Soy Dayloc — Desarrollador apasionado y creador <br /> de experiencias web funcionales.</h1> 
    	
		
		<p className="present  m-5">
		

	Te invito a que me conozcas y exploremos juntos mi trayectoria digital <br />así como  el futuro que podemos construir juntos!
    </p>
	<div class="cuadro-fade">
		<img src={follow_mw2} alt="" className="follow" onClick={()=>navigate('/myLife')}/>
	</div>
	<div>
		<button className="btn btn-danger"  onClick={()=>navigate('/myLife')} > Next</button>
	</div>

	
		</div>
	);
}; 