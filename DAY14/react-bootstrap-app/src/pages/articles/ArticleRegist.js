import React from "react";

// history() -> ver 5.x
import { useNavigate } from "react-router-dom"; //ver 6.x

const ArticleRegist = () => {
  const navigate = useNavigate();

  const handleSave = () => {
    //게시글 입력정보를 백엔드로 전송합니다
    //백엔드에서 게시글 등록처리를 완료하면
    //특정 페이지로 화면을 이동시킬때 .. navigate 활용 처리
    navigate("/article/list");
  };

  return (
    <div>
      <h1>게시글 등록</h1>
      제목:
      <input type="text" />
      <br />
      내용:<textarea></textarea>
      <br />
      <button onClick={handleSave}>저장</button>
      <button
        onClick={() => {
          navigate("/");
        }}
      >
        메인이동
      </button>
    </div>
  );
};

export default ArticleRegist;
