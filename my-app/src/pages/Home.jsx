import RestAPI from "../RestAPI";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center text-center py-10 px-4">
      {/* About Section */}
      <RestAPI
        endpoint="profile"
        render={(profile) => (
          <div id="about" className="max-w-md bg-white shadow-lg p-6 rounded-2xl">
            <img
            src={`/${profile.picture}`} // mengambil dari db.json
            alt={profile.name}
            className="mx-auto mb-4 w-32 h-32 rounded-full"
            />

            <h2 className="text-2xl font-bold">{profile.name}</h2>
            <p className="text-blue-600 font-medium">{profile.title}</p>
            <p className="mt-4 text-gray-700">{profile.bio}</p>

            <div id="contact" className="mt-6 text-gray-700">
              <p>📧 {profile.email}</p>
              <p>📞 {profile.phone}</p>
            </div>
          </div>
        )}
      />

      {/* Skills Section */}
      <section id="skills" className="mt-10 max-w-xl w-full">
        <h3 className="text-xl font-bold mb-4">Skills</h3>
        <RestAPI
          endpoint="skills"
          render={(skills) => (
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {skills.map(skill => (
                <div
                  key={skill.id}
                  className="bg-blue-100 rounded-lg p-3 shadow-sm"
                >
                  {skill.name}
                </div>
              ))}
            </div>
          )}
        />
      </section>
    </main>
  );
}
