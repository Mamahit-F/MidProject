import db from "../db.json";

export default function Profile() {
  const users = db.profile;

  return (
    <section className="my-10">
      <h2 className="text-2xl font-bold text-center mb-4">Profile</h2>
      <div className="flex flex-wrap justify-center gap-4">
        {users.map(({ id, name, picture }) => (
          <div
            key={id}
            className="bg-white border border-gray-300 rounded-xl p-4 flex flex-col items-center"
          >
            {picture && (
              <img
                src={`/${picture}`} 
                alt={name}
                className="w-20 h-20 rounded-full mb-2"
              />
            )}
            <h3 className="font-bold">{name}</h3>
          </div>
        ))}
      </div>
    </section>
  );
}
