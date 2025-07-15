import rigoImageUrl from "../assets/img/rigo-baby.jpg";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";

export const Home = () => {

  const {store, dispatch} =useGlobalReducer()

	return (
		<div className="text-center mt-5 text-info ">
			Esta será una breve introduccion de cuales son mis espectativas en el futuro y de que es lo que me gustaría hacer
		</div>
	);
}; 