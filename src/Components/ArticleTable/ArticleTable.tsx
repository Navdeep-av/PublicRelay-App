import { formatDate } from "../../utils/formatData";
import {
  TableWrapper,
  TableContainer,
  StyledTable,
  TableHead,
  TableBody,
  TableRow,
  TableHeadCell,
  TableCell,
  RightAlignedCell, ImpressionsHeadCell, TableHeadingRow
} from "./ArticleTable.styles";
import type { Article, SortConfig } from "../../types/article";
import type { FC } from "react";

interface ArticleTableProps {
  articles: Article[];
  sortConfig: SortConfig;
  setSortConfig: (config: SortConfig | ((prev: SortConfig) => SortConfig)) => void;
}

const ArticleTable: FC<ArticleTableProps> = ({ articles, setSortConfig }) => {
  const handleSort = (key: keyof Article) => {
    setSortConfig((prev) =>
      prev.key === key
        ? { key, direction: prev.direction === "asc" ? "desc" : "asc" }
        : { key, direction: "desc" }
    );
  };

  return (
    <TableWrapper>
      <TableContainer>
        <StyledTable>
          <TableHead>
            <TableHeadingRow>
              <TableHeadCell>Date</TableHeadCell>
              <TableHeadCell onClick={() => handleSort("articleTitle")}>Title</TableHeadCell>
              <TableHeadCell onClick={() => handleSort("articleOutlet")}>Outlet</TableHeadCell>
              <ImpressionsHeadCell className="text-right">Impressions</ImpressionsHeadCell>
            </TableHeadingRow>
          </TableHead>
          <TableBody>
            {articles?.length > 0 &&
              articles.map((item, index) => {
                return (
                  <TableRow key={index}>
                    <TableCell> {formatDate(item.articleDate)}</TableCell>

                    <TableCell>
                      <a
                        href={item.articleUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {item.articleTitle}
                      </a>
                    </TableCell>

                    <TableCell>
                      <a
                        href={item.articleOutletUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {item.articleOutlet}
                      </a>
                    </TableCell>

                    <RightAlignedCell className="text-right">{item.articleImpressions}</RightAlignedCell>
                  </TableRow>
                );
              })}
          </TableBody>
        </StyledTable>
      </TableContainer>
    </TableWrapper>
  );
};

export default ArticleTable;
