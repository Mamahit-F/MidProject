import React, { useEffect, useState } from "react";
import axios from "axios";
import Profile from "./components/Profile";

const RestAPI = () => {
  const [profile, setProfile] = useState(null);
  const [experience, setExperience] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/profile")
      .then((res) => setProfile(res.data))
      .catch((err) => console.error(err));

    axios
      .get("http://localhost:3000/experience")
      .then((res) => setExperience(res.data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="space-y-6">
      <Profile profile={profile} />

      <section id="experience">
        <h2 className="text-xl font-semibold text-gray-800 mb-2">Experience</h2>
        <ul className="space-y-2">
          {experience.map((exp) => (
            <li key={exp.id} className="p-4 bg-gray-50 rounded shadow">
              <p className="font-semibold text-gray-800">
                {exp.role} - {exp.company}
              </p>
              <p className="text-gray-600">{exp.year}</p>
              <p className="text-gray-700">{exp.desc}</p>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default RestAPI;
