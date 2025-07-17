import { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export const Navbar = () => {
	

	const navigate= useNavigate();

	const interNavigate= (addres)=>{
   
		 navigate(addres)

	}

	return (
		<nav className="navbar ">
			<div className="container">
				<button type="button" class="btn btn-outline-danger"  onClick={()=>interNavigate("/")}>🏠Home</button>
				<button type="button" class="btn btn-outline-danger"  onClick={()=>interNavigate("/myLife")} >My Life</button>
				<button type="button" class="btn btn-outline-danger"  onClick={()=>interNavigate("/projects")} >Poyects</button>
				<button type="button" class="btn btn-outline-danger" onClick={()=>interNavigate("/studies")}>Study</button>
				<button type="button" class="btn btn-outline-danger" onClick={()=>interNavigate("/experience")}>Expirience</button>
				<button type="button" class="btn btn-outline-danger" onClick={()=>interNavigate("/tecnology")}>Tecnology</button>
				<button type="button" class="btn btn-outline-danger" onClick={()=>interNavigate("/future")}>Future</button>

			</div>
		</nav>
	);
};