import { projects } from "../data/projects";


function Projects(){
  return (
    <div className="container py-5">
      <h2 className="text-center neon-title mb-5">💻 Mis Proyectos</h2>
      <div className="row">
        {projects.map((project, i) => (
          <div className="col-md-4 mb-4" key={i}>
            <div className="neon-card h-100">
              <img src={project.image} className="card-img-top " alt={project.name} />
              <div className="card-body text-center">
                <h5 className="card-title text-neon m-2">{project.name}</h5>
                <p className="card-text text-center">{project.description}</p>
                <a
                  href={project.link}
                  className="btn btn-neon m-2"
                  target="_blank"
                  rel="noreferrer"
                >
                  Ver en GitHub 🚀
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Projects