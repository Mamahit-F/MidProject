import React from "react";

const Certificates = ({ certificates }) => {
  return (
    <section id="certificates">
      <h2 className="text-3xl font-bold mb-4">Certificates</h2>

      <div className="space-y-4">
        {certificates.map((cert) => (
          <div key={cert.id} className="bg-white p-4 rounded-lg shadow">
            <h3 className="text-lg font-semibold">{cert.title}</h3>
            <p className="text-gray-600">
              {cert.provider} — {cert.year}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Certificates;
