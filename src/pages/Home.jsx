import rigoImageUrl from "../assets/img/rigo-baby.jpg";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";

export const Home = () => {

  const {store, dispatch} =useGlobalReducer()

	return (
		<div className="container text-center mt-5 text-info ">
		<h1 className="typewriter text-warning mb-5">💥¡Hola! Soy Dayloc — Desarrollador apasionado y creador <br /> de experiencias digitales funcionales.</h1> 
    	
		
		<p className="typewriter">
		

	Te invito a que me conozcas y exploremos juntos mi trayectoria digital <br />y descubre el futuro que podemos construir juntos!
    </p>
		</div>
	);
}; 