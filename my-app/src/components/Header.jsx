export default function Header() {
  return (
    <header className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center px-6">
        <h1 className="text-2xl font-bold">My Portfolio</h1>
        <nav className="flex gap-6 text-lg">
          <a href="#about" className="hover:text-gray-200">About</a>
          <a href="#skills" className="hover:text-gray-200">Skills</a>
          <a href="#contact" className="hover:text-gray-200">Contact</a>
        </nav>
      </div>
    </header>
  );
}
