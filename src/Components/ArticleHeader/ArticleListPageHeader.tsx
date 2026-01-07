import { useContext, useEffect } from "react";
import { userContext } from "../../context/UserContext";
import {
  ArticleHeaderWrapper,
  ArticleHeaderContent, ArticleUserName,
  ArticleLabel
} from "./ArticleHeader.styles";

type Props = {
  total: number;
};

const ArticlePageHeader = ({ total }:Props) => {
  const context = useContext(userContext);
  const userName = context?.userName ?? "";
  const setUserName = context?.setUserName ?? (() => {});

  useEffect(()=>{
    if(!userName){
      const saved = sessionStorage.getItem("userDetail")
      if(saved) setUserName(saved)
    }
  },[])

  return (
    <ArticleHeaderWrapper>
      <ArticleHeaderContent>
        <ArticleUserName>Welcome, {userName} 👋
   
        </ArticleUserName>
        <div className="articleCounts">
          <ArticleLabel>Total Articles: {total}</ArticleLabel>
        </div>
      </ArticleHeaderContent>
    </ArticleHeaderWrapper>
  );
};

export default ArticlePageHeader;
