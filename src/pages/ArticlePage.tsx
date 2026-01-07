import { useEffect, useLayoutEffect, useState } from "react";
import { Helmet } from "react-helmet";
import AppBar from "../Components/AppBar/AppBar";
import ArticlePageHeader from "../Components/ArticleHeader/ArticleListPageHeader";
import ArticleTable from "../Components/ArticleTable/ArticleTable";
import Loader from "../Components/Loader/Loader";
import useArticles from "../hooks/useArticles";
import { sortArticles } from "../utils/sortArticles";
import { useMemo } from "react";
import { useNavigate } from "react-router-dom";
import type { SortConfig } from "../types/article";

const ArticlePage = () => {

  useLayoutEffect(()=>{
    document.body.style.backgroundColor = "#fff";
  })

  const navigate = useNavigate();

  const { articles, loading, error } = useArticles(
    "https://mockly.me/custom/articles"
  );

  const [sortConfig, setSortConfig] = useState<SortConfig>({
    key: null,
    direction: "desc",
  });

  const sortedArticles = useMemo(
    () => sortArticles(articles, sortConfig),
    [articles, sortConfig]
  );

  useEffect(()=>{
      const saved = sessionStorage.getItem("userDetail");
  if (!saved) navigate("/");
  },[])

  if (loading) {
    return <Loader />;
  }

  return (
    <div className="main-div">
      <Helmet>
        <title>Articles - PublicRelay</title>
        <meta name="description" content="View and manage your published articles" />
      </Helmet>
      <AppBar />
      <ArticlePageHeader total={articles.length} />
      {!error && (
        <ArticleTable
          articles={sortedArticles}
          sortConfig={sortConfig}
          setSortConfig={setSortConfig}
        />
      )}
    </div>
  );
};

export default ArticlePage;
