import { projects } from "../data/projects";
import { useNavigate } from "react-router-dom";

function Projects() {
  const navigate = useNavigate();

  // Definimos el proyecto terminado Medigest
  const medigestProject = projects.find(project => project.name === "ProyectoGestorCentroSalud");

  return (
    <div className="container py-5">
      <h2 className="text-center neon-title mb-5">💻 Mis Proyectos</h2>

      <div className="row">
        {/* Columna izquierda: repositorios */}
        <div className="col-md-6">
          <h3 className="text-danger mb-4">Solo repositorios en GitHub</h3>
          {projects.map((project, i) => (
            <div className="neon-card mb-4 p-3" key={i}>
              <img
                src={project.image}
                className="card-img-top mb-2"
                alt={project.name}
              />
              <h5 className="text-neon">{project.name}</h5>
              <p>{project.description}</p>
              <a
                href={project.link}
                className="btn btn-neon mt-2"
                target="_blank"
                rel="noreferrer"
              >
                Ver en GitHub 🚀
              </a>
            </div>
          ))}
        </div>

        {/* Columna derecha: proyecto terminado */}
        <div className="col-md-6 text-center ">
          <h3 className="text-danger mb-4">Publicados</h3>
          {medigestProject && (
            <div className="publicado p-3 mx-auto" style={{ maxWidth: "350px" }}>
              <img
                src={medigestProject.image || "https://via.placeholder.com/300"}
                className="card-img-top mb-3"
                alt="Medigest"
              />
              <h5 className="text-neon">Medigest</h5>
              <p>Proyecto finalizado publicado online.</p>
              <a
                href="https://medigest1-1.onrender.com/"
                className="btn btn-neon mt-2"
                target="_blank"
                rel="noreferrer"
              >
                Ver Proyecto 🚀
              </a>
            </div>
          )}
        </div>
      </div>

      <div className="text-center m-5">
        <button
          className="btn btn-danger"
          onClick={() => navigate("/studies")}
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default Projects;
