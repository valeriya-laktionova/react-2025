import { useState } from "react";
import { signInWithEmailAndPassword, User } from "firebase/auth";
import { auth } from "../firebase/firebase";

type UseAuthReturn = {
  login: (email: string, password: string) => Promise<User>;
  loading: boolean;
  error: string | null;
};

export default function useAuth(): UseAuthReturn {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const login = async (email: string, password: string): Promise<User> => {
    setLoading(true);
    setError(null);
    try {
      const result = await signInWithEmailAndPassword(auth, email, password);
      return result.user;
    } catch (err: any) {
      setError(err.message || "Ошибка входа");
      throw err;
    } finally {
      setLoading(false);
    }
  };

  return { login, loading, error };
}
