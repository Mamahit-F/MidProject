import React from "react";

const Experience = ({ experiences }) => {
  return (
    <section id="experience">
      <h2 className="text-3xl font-bold mb-4">Work Experience</h2>

      <div className="space-y-5">
        {experiences.map((exp) => (
          <div key={exp.id} className="bg-gray-100 p-5 rounded-xl shadow-sm">
            <h3 className="text-xl font-semibold">{exp.role}</h3>
            <p className="text-gray-600">
              {exp.company} — {exp.year}
            </p>
            <p className="mt-2">{exp.details}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
