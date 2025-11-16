import { useEffect, useState } from "react";
import axios from "axios";

export default function RestAPI({ endpoint, children }) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(`http://localhost:2000/${endpoint}`)
      .then((res) => {
        setData(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching:", err);
        setLoading(false);
      });
  }, [endpoint]);

  if (loading) {
    return <p className="text-center">Loading...</p>;
  }

  return children(data);
}
