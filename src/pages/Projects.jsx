import { projects } from "../data/projects";
import { useNavigate } from "react-router-dom";

function Projects() {
  const navigate = useNavigate();

  const medigestProject = projects.find(
    project => project.name === "ProyectoGestorCentroSalud"
  );

  const repoProjects = projects.filter(
    project => project.name !== "ProyectoGestorCentroSalud"
  );

  return (
    <div className="container py-5">
     

      {/* Proyecto publicado destacado */}
      {medigestProject && (
        <div className="text-center mb-5">
          <h3 className="text-warning mb-3">Proyecto Publicado </h3>
          <div className="publicado p-3 mx-auto" style={{ maxWidth: "420px" }}>
            <img
              src={medigestProject.image || "https://via.placeholder.com/300"}
              className="card-img-top mb-3"
              alt="Medigest"
            />
            <h5 className="text-neon">Medigest</h5>
            <p>Proyecto finalizado y disponible online.</p>
            <a
              href="https://medigest1-1.onrender.com/"
              className="btn btn-neon mt-2"
              target="_blank"
              rel="noreferrer"
            >
             <span className="text-info"> Ver Proyecto 🚀</span>
            </a>
          </div>
        </div>
      )}

      
      <h3 className="text-info mt-4 text-center">Repositorios en GitHub</h3>
      <div className="row justify-content-center mt-4">
        {repoProjects.map((project, i) => (
          <div className="col-6 col-md-3 mb-4" key={i}>
            <div className="neon-card small-card p-2 h-100 text-center">
              <img
                src={project.image}
                className="card-img-top small-image mb-2"
                alt={project.name}
              />
              <h6 className="text-neon">{project.name}</h6>
              <a
                href={project.link}
                className="btn btn-neon btn-sm mt-2"
                target="_blank"
                rel="noreferrer"
              >
                <span className="text-info">GitHub 📌</span>
              </a>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center m-5">
        <button className="button" onClick={() => navigate("/studies")}>
          Next
        </button>
      </div>
    </div>
  );
}

export default Projects;
