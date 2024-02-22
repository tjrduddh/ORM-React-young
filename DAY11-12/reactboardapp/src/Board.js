import React, { useState } from "react";

const Board = () => {
  const [article, setArticle] = useState({ title: "", desc: "", name: "" });

  const onArticleChange = (e) => {
    setArticle({ ...article, [e.target.name]: e.target.value });
  };

  const [boardList, setBoardList] = useState([]);

  const boardUIList = boardList.map((pro, i) => (
    // UI요소에 반복적으로 map을 이용해 바인딩하는경우 ui요소에 key속성을 유일값으로 바인딩 해줘야한다
    <tr key={i}>
      <td>{pro.id}</td>
      <td>{pro.title}</td>
      <td>{pro.desc}</td>
      <td>{pro.name}</td>
      <td>
        <button>선택</button>
      </td>
    </tr>
  ));

  return (
    <div>
      <form>
        제목
        <input name="title" value={article.title} onChange={onArticleChange} />
        <br />
        내용
        <input name="desc" value={article.desc} onChange={onArticleChange} />
        <br />
        등록자
        <input name="name" value={article.name} onChange={onArticleChange} />
        <br />
        <button type="submit">등록</button>
        <button type="submit">수정</button>
        <button type="submit">삭제</button>
        <button type="submit">초기화</button>
      </form>
      <table style={{ margin: "0 auto", width: "50%" }}>
        <thead>
          <tr>
            <th>글순번</th>
            <th>제목</th>
            <th>내용</th>
            <th>글쓴이</th>
            <th>선택</th>
          </tr>
        </thead>
        <tbody>
          {boardList.map((pro, i) => (
            <tr key={i}>
              <td>{pro.id}</td>
              <td>{pro.title}</td>
              <td>{pro.desc}</td>
              <td>{pro.name}</td>
              <td>
                <button>선택</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Board;
