import { useEffect, useState } from "react";

export const useFetch = (url, options = {}) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);

      try {
        const response = await fetch(url, options);
        const status = response.status;

        let result = null;
        if (response.ok) {
          result = await response.json();
          setData(result);
        } else {
          throw new Error(`Request failed with status ${status}`);
        }

        // ЛОГГЕР
        const log = {
          url,
          method: options.method || "GET",
          body: options.body || null,
          status,
          timestamp: new Date().toISOString(),
        };

        const key = `fetchLog_${url}_${Date.now()}`;
        localStorage.setItem(key, JSON.stringify(log));
      } catch (err) {
        setError(err.message || "Unknown error");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url, JSON.stringify(options)]);

  return { data, loading, error };
};
