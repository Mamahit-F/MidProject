export default function Popup({ isOpen, onClose, title, children }) {
  if (!isOpen) return null;

  return (
    // Backdrop blur tapi tetap transparan
    <div className="fixed inset-0 flex justify-center items-center z-50 backdrop-blur-sm bg-white/30 transition-all duration-500">
      
      {/* Card Popup */}
      <div className="bg-white bg-opacity-90 rounded-3xl shadow-2xl w-11/12 max-w-lg p-6 transform transition-all duration-700 ease-out scale-95 opacity-0 animate-popup-show relative">
        
        {/* Tombol Close */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 text-xl font-bold transition"
        >
          ✕
        </button>

        {/* Judul */}
        <h2 className="text-2xl font-bold text-gray-800 mb-4 text-center">{title}</h2>

        {/* Konten */}
        <div className="text-gray-700 space-y-4">
          {children}
        </div>
      </div>
    </div>
  );
}
