import follow_mw2 from "../assets/img/follow_mw2.jpg";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { useNavigate } from "react-router-dom"; 

export const Home = () => {

  const {store, dispatch} =useGlobalReducer()
	const navigate = useNavigate()

	return (
<div className="home-container text-center m-1">
  <h1>¡Hola! Soy Dayloc, desarrollador apasionado y creador <br /> de experiencias web funcionales.</h1> 
  <p className="present m-5">
    Te invito a que me conozcas y exploremos juntos mi trayectoria digital <br />
    así como  el futuro que podemos construir juntos!
  </p>
  <button className="btn btn-danger" onClick={()=>navigate('/myLife')}>Next</button>
</div>
	);
}; 