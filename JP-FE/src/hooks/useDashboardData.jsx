import { useEffect, useState } from "react";

export function useDashboardData(service) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const url = "http://localhost:3001/api/" + service;
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((json) => {
        setData(json);
        setLoading(false);
      })
      .catch(() => {
        setLoading(false);
      });
  }, [url]);

  return { data, loading };
}
