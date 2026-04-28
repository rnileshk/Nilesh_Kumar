import { useEffect, useState } from "react";
import api from "../api";

function Projects() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    api.get("/api/projects").then((res) => setProjects(res.data)).catch(() => {});
  }, []);

  return (
    <section id="projects" className="section">
      <h2 className="title">Featured Projects</h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-7">
        {projects.length === 0 && (
          <div className="card p-6 text-slate-400">No projects added yet.</div>
        )}

        {projects.map((project) => (
          <div key={project.id} className="card overflow-hidden">
            {project.imageUrl ? (
              <img
                src={project.imageUrl}
                alt={project.title}
                className="h-56 w-full object-cover"
              />
            ) : (
              <div className="h-56 bg-white/5 flex items-center justify-center text-slate-500">
                Project Image
              </div>
            )}

            <div className="p-6">
              <h3 className="text-2xl font-bold">{project.title}</h3>
              <p className="mt-3 text-slate-300">{project.description}</p>
              <p className="mt-4 text-sm text-blue-300">{project.techStack}</p>

              <div className="mt-6 flex gap-4">
                {project.githubUrl && (
                  <a href={project.githubUrl} target="_blank" className="text-blue-300">
                    GitHub
                  </a>
                )}
                {project.liveUrl && (
                  <a href={project.liveUrl} target="_blank" className="text-green-300">
                    Live
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;