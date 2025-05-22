import { useEffect, useState } from "react";

type FetchState<T> = {
  data: T | null;
  loading: boolean;
  error: string | null;
};

export function useFetch<T = unknown>(url: string, options: RequestInit = {}): FetchState<T> {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const controller = new AbortController();

    const fetchData = async () => {
      try {
        const response = await fetch(url, { ...options, signal: controller.signal });

        if (!response.ok) {
          throw new Error("Ошибка загрузки данных");
        }

        const result: T = await response.json();
        setData(result);
      } catch (err: any) {
        if (err.name !== "AbortError") {
          setError(err.message || "Ошибка при запросе данных");
        }
      } finally {
        setLoading(false);
      }
    };

    fetchData();

    return () => controller.abort();
  }, [url, JSON.stringify(options)]); 

  return { data, loading, error };
}
