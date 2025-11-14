import React from "react";

const Profile = ({ profile }) => {
  if (!profile) return <p className="text-gray-600">Loading profile...</p>;

  return (
    <div className="flex items-center gap-4 mb-6">
      <img
        src={profile.image}
        alt={profile.name}
        className="w-24 h-24 rounded-full object-cover"
      />
      <div>
        <h1 className="text-2xl font-bold text-gray-800">{profile.name}</h1>
        <p className="text-gray-600">{profile.title}</p>
        <p className="text-gray-500">{profile.location}</p>
        <p className="mt-2 text-gray-700">{profile.summary}</p>
        <div className="mt-2">
          <h3 className="font-semibold text-gray-800">Skills:</h3>
          <ul className="list-disc list-inside text-gray-700">
            {profile.skills.map((skill, idx) => (
              <li key={idx}>{skill}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Profile;
