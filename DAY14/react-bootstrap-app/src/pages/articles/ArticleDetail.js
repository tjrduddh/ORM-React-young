import React from "react";

import { useParams } from "react-router-dom";

const ArticleDetail = () => {
  //useParams 룩을 통해 라우터에서 정의된 파라메터 키값을 이용 값을 추출합니다
  const { idx } = useParams();
  console.log("파라메터 방식으로 URL을 통해 전달되는 값을 추출합니다", idx);
  return (
    <div>
      <h1>게시글 수정/확인/삭제</h1>
    </div>
  );
};

export default ArticleDetail;
