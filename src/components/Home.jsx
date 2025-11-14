import React from "react";
import RestAPI from "../RestAPI";

const Home = () => {
  return (
    <main className="container mx-auto mt-8 px-6 space-y-6" id="home">
      <section className="bg-blue-50 p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-gray-800 mb-2">Welcome!</h2>
        <p className="text-gray-700">
          Hello! I am Faimel, a frontend developer focused on creating clean,
          responsive, and accessible web applications.
        </p>
      </section>

      <section className="bg-green-50 p-6 rounded-lg shadow-md">
        <h3 className="text-xl font-semibold text-gray-800 mb-2">Skills</h3>
        <ul className="list-disc list-inside text-gray-700">
          <li>React, Vite, Tailwind CSS</li>
          <li>JavaScript, HTML, CSS</li>
          <li>Responsive Design & Accessibility</li>
        </ul>
      </section>

      <section className="bg-yellow-50 p-6 rounded-lg shadow-md">
        <h3 className="text-xl font-semibold text-gray-800 mb-2">Projects</h3>
        <p className="text-gray-700">
          You can explore my projects on GitHub. Focused on clean UI, fast
          performance, and user-friendly experience.
        </p>
      </section>

      <section className="bg-gray-50 p-6 rounded-lg shadow-md">
        <h3 className="text-xl font-semibold text-gray-800 mb-4">
          Profile & Experience
        </h3>
        <RestAPI />
      </section>
    </main>
  );
};

export default Home;
