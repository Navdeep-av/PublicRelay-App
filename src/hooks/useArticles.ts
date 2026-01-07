import { useEffect } from "react";
import { useState } from "react";
import { getArticles } from "../services/articleService";
import type { Article } from "../types/article";

const useArticles = (url: string) => {
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    const load = async () => {
      try {
        const data = await getArticles(url);
        setArticles(data);
        setLoading(false);
      } catch (err) {
        setError("Failed to load the Article");
      }
    };

    load();
  }, []);

  return { articles, loading, error };
};

export default useArticles;
