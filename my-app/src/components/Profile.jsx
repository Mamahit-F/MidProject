import React from "react";

const Profile = ({ profile }) => {
  return (
    <section
      id="about"
      className="flex flex-col md:flex-row items-center gap-10"
    >
      <img
        src={profile.picture}
        alt="Profile"
        className="w-60 h-60 rounded-full object-cover shadow-lg"
      />

      <div>
        <h1 className="text-4xl font-bold">{profile.name}</h1>
        <p className="text-xl text-gray-600">{profile.title}</p>

        <p className="mt-3 text-gray-700 max-w-2xl">{profile.bio}</p>

        <div className="mt-4 space-y-1 text-gray-800">
          <p>
            <strong>Location:</strong> {profile.location}
          </p>
          <p>
            <strong>Age:</strong> {profile.age}
          </p>
          <p>
            <strong>Education:</strong> {profile.education}
          </p>
          <p>
            <strong>Experience:</strong> {profile.experience}
          </p>
          <p>
            <strong>Email:</strong> {profile.email}
          </p>
          <p>
            <strong>Phone:</strong> {profile.phone}
          </p>
        </div>

        <a
          href={profile.github}
          target="_blank"
          className="inline-block mt-6 px-6 py-2 bg-gray-900 text-white rounded-lg hover:bg-black transition"
        >
          View GitHub
        </a>
      </div>
    </section>
  );
};

export default Profile;
