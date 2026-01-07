import axios from "axios";
import type { Article } from "../types/article";

export const getArticles = async (url: string): Promise<Article[]> => {
  const res = await axios.get(url);
  return res.data.entries;
};
