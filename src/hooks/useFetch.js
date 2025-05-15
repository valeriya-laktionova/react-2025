import { useEffect, useState } from "react";

export const useFetch = (url, options = {}) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url, options);

        const logEntry = {
          url,
          payload: options.body ? JSON.parse(options.body) : null,
          status: response.status,
          timestamp: new Date().toISOString(),
        };

        const prevLogs = JSON.parse(localStorage.getItem("apiLogs")) || [];
        localStorage.setItem(
          "apiLogs",
          JSON.stringify([...prevLogs, logEntry])
        );

        if (!response.ok) {
          throw new Error("Ошибка загрузки данных");
        }

        const result = await response.json();
        setData(result);
      } catch (err) {
        setError(err.message || "Ошибка при запросе данных");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url, options]);

  return { data, loading, error };
};
