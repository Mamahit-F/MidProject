import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Pic from "./components/Pic";

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
