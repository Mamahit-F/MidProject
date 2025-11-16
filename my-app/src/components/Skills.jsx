import React from "react";

const Skills = ({ skills }) => {
  return (
    <section id="skills">
      <h2 className="text-3xl font-bold mb-4">Skills</h2>

      <div className="flex flex-wrap gap-4">
        {skills.map((skill) => (
          <span
            key={skill.id}
            className="px-4 py-2 bg-blue-100 text-blue-700 rounded-lg shadow-sm"
          >
            {skill.name}
          </span>
        ))}
      </div>
    </section>
  );
};

export default Skills;
