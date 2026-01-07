import type { Article, SortConfig } from "../types/article";

export function sortArticles(data: Article[], sortConfig: SortConfig): Article[] {
  const sorted = [...data];

  if (!sortConfig?.key) return sorted;

  sorted.sort((a, b) => {
    let x = a[sortConfig.key!];
    let y = b[sortConfig.key!];

    if (typeof x === "string") {
      x = x.toLowerCase();
    }
    if (typeof y === "string") {
      y = y.toLowerCase();
    }

    if (x < y) return sortConfig.direction === "asc" ? -1 : 1;
    if (x > y) return sortConfig.direction === "asc" ? 1 : -1;
    return 0;
  });

  return sorted;
}
