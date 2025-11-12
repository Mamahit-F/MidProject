import { useEffect, useState } from "react";

export default function Pic() {
  const [pic, setPic] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:5000/Pic") // fetch data Pic dari db.json
      .then((res) => res.json())
      .then((data) => {
        setPic(data.pic1); // hanya ambil pic1
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading...</p>;

  return (
    <div className="flex justify-center mb-4">
      <img
        src={`/${pic}`} // pastikan file ada di folder public/
        alt="pic1"
        className="rounded-lg"
        style={{ width: "180px", height: "auto" }} // sesuaikan ukuran
      />
    </div>
  );
}
