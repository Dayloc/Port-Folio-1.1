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
				<button type="button" class="btn btn-outline-primary"  onClick={()=>interNavigate("/")}>🏠Home</button>
				<button type="button" class="btn btn-outline-primary"  onClick={()=>interNavigate("/myLife")} >My Life</button>
				<button type="button" class="btn btn-outline-primary"  onClick={()=>interNavigate("/projects")} >Poyects</button>
				<button type="button" class="btn btn-outline-primary" onClick={()=>interNavigate("/studies")}>Study</button>
				<button type="button" class="btn btn-outline-primary" onClick={()=>interNavigate("/experience")}>Expirience</button>
				<button type="button" class="btn btn-outline-primary" onClick={()=>interNavigate("/tecnology")}>Tecnology</button>
				<button type="button" class="btn btn-outline-primary" onClick={()=>interNavigate("/future")}>Future</button>

			</div>
		</nav>
	);
};