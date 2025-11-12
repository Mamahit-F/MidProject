import RestAPI from "../RestAPI";

export default function Home() {
  return (
    <main className="min-h-screen w-full bg-gray-50 flex flex-col items-center py-10 px-4 gap-6">

      {/* Profile Section */}
      <RestAPI
        endpoint="profile"
        render={(profile) => (
          <div className="w-full max-w-4xl bg-white shadow-lg rounded-2xl p-8 flex flex-col md:flex-row items-center md:items-start gap-6">
            
            {/* Picture */}
            {profile.picture && (
              <img
                src={`/${profile.picture}`}
                alt={profile.name}
                className="w-40 h-40 rounded-full border-4 border-blue-200 shadow-md"
              />
            )}

            {/* Info */}
            <div className="flex-1 space-y-3 text-left">
              <h3 className="text-2xl font-semibold text-gray-700 border-b pb-2">Profile</h3>
              <h2 className="text-3xl font-bold text-gray-800">{profile.name}</h2>
              <p className="text-blue-600 font-medium">{profile.title}</p>
              <p className="text-gray-700">{profile.bio}</p>
            </div>
          </div>
        )}
      />

      {/* Contact Section */}
      <RestAPI
        endpoint="profile"
        render={(profile) => (
          <div className="w-full max-w-4xl bg-white shadow-lg rounded-2xl p-6 flex flex-col md:flex-row justify-between items-center md:items-start gap-6">
            <h3 className="text-xl font-semibold text-gray-700 border-b pb-2 w-full md:w-auto">Contact</h3>
            <div className="flex flex-col space-y-2 text-gray-800 text-left">
              <p>📧 {profile.email}</p>
              <p>📞 {profile.phone}</p>
            </div>
          </div>
        )}
      />

      {/* Skills Section */}
      <RestAPI
        endpoint="skills"
        render={(skills) => (
          <div className="w-full max-w-4xl bg-white shadow-lg rounded-2xl p-6">
            <h3 className="text-xl font-semibold text-gray-700 border-b pb-2 mb-4">Skills</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {skills.map((skill) => (
                <div
                  key={skill.id}
                  className="bg-blue-100 text-blue-800 rounded-lg p-3 shadow-sm font-medium text-center hover:bg-blue-200 transition"
                >
                  {skill.name}
                </div>
              ))}
            </div>
          </div>
        )}
      />

    </main>
  );
}
