import Header from "./components/Header";
import Footer from "./components/Footer";

import RestAPI from "./RestAPI";

import Profile from "./components/Profile";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Certificates from "./components/Certificates";

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />

      <main className="container mx-auto px-8 py-10 space-y-20">
        {/* PROFILE */}
        <RestAPI endpoint="profile">
          {(data) => <Profile profile={data} />}
        </RestAPI>

        {/* SKILLS */}
        <RestAPI endpoint="skills">
          {(data) => <Skills skills={data} />}
        </RestAPI>

        {/* PROJECTS */}
        <RestAPI endpoint="projects">
          {(data) => <Projects projects={data} />}
        </RestAPI>

        {/* EXPERIENCE */}
        <RestAPI endpoint="experiences">
          {(data) => <Experience experiences={data} />}
        </RestAPI>

        {/* CERTIFICATES */}
        <RestAPI endpoint="certificates">
          {(data) => <Certificates certificates={data} />}
        </RestAPI>

        {/* CONTACT */}
        <RestAPI endpoint="profile">
          {(data) => (
            <section id="contact">
              <h2 className="text-3xl font-bold mb-4">Contact</h2>
              <p className="text-gray-700">Email: {data.email}</p>
              <p className="text-gray-700">Phone: {data.phone}</p>
            </section>
          )}
        </RestAPI>
      </main>

      <Footer />
    </div>
  );
}

export default App;
