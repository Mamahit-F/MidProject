import { useEffect, useState } from "react";
import axios from "axios";

export default function RestAPI({ endpoint, render }) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(`http://localhost:5000/${endpoint}`)
      .then((res) => {
        setData(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching data:", err);
        setLoading(false);
      });
  }, [endpoint]);

  if (loading) {
    return <p className="text-center text-gray-500">Loading...</p>;
  }

  return render(data);
}
