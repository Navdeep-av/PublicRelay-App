export interface Article {
  articleDate: string;
  articleTitle: string;
  articleUrl: string;
  articleImpressions: number;
  articleOutlet: string;
  articleOutletUrl: string;
}

export type SortConfig = {
  key: keyof Article | null;
  direction: "asc" | "desc";
};
