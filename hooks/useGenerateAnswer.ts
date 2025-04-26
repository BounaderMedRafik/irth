import { useState } from "react";

interface UseGenerateAnswerResult {
  generateAnswer: (prompt: string) => Promise<string | null>;
  loading: boolean;
  error: string | null;
}

export const useGenerateAnswer = (): UseGenerateAnswerResult => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const generateAnswer = async (prompt: string): Promise<string | null> => {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch(
        "https://20c6-2a09-bac5-3060-1a78-00-2a3-d.ngrok-free.app/generate",
        {
          method: "POST", // <-- must be POST, not OPTIONS
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ prompt }), // Same
        }
      );

      if (!response.ok) {
        throw new Error(`Server error: ${response.status}`);
      }

      const data = await response.json();
      console.log("Received data:", data);
      return data.response;
    } catch (err: any) {
      setError(err.message || "Unknown error");
      return null;
    } finally {
      setLoading(false);
    }
  };

  return { generateAnswer, loading, error };
};
