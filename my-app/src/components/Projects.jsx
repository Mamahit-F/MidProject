import React from "react";

const Projects = ({ projects }) => {
  return (
    <section id="projects">
      <h2 className="text-3xl font-bold mb-4">Projects</h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((proj) => (
          <div key={proj.id} className="bg-white p-5 rounded-xl shadow-md">
            <h3 className="text-xl font-semibold">{proj.title}</h3>
            <p className="mt-2 text-gray-700">{proj.description}</p>

            <div className="flex flex-wrap gap-2 mt-3">
              {proj.tech.map((t, i) => (
                <span
                  key={i}
                  className="px-3 py-1 bg-gray-200 rounded-lg text-sm"
                >
                  {t}
                </span>
              ))}
            </div>

            <a
              href={proj.link}
              target="_blank"
              className="inline-block mt-4 text-blue-600 hover:underline"
            >
              View Project →
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
