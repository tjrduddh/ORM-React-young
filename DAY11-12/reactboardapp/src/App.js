import logo from "./logo.svg";
import "./App.css";

import React, { useState } from "react";
import Board from "./Board";

function App() {
  const [articles, setArticles] = useState([
    {
      id: 1,
      title: "제목테스트",
      desc: "내용태스트",
      name: "영석",
    },
  ]);

  const [nextId, setNextId] = useState(2);

  const onInsert = (title, desc, name) => {
    setArticles(
      articles.concat({ id: nextId, title: title, desc: desc, name: name })
    );

    setNextId(nextId + 1);
  };

  return (
    <div className="App">
      <Board onInsert={onInsert}></Board>
    </div>
  );
}

export default App;
