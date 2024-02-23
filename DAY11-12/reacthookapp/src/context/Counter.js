import React, { useContext } from "react";

import { AppContext } from "../App";

const Counter = () => {
  //카운터 전역 데이터 값 추출하기
  const [count] = useContext(AppContext);
  return (
    <div>
      <h1>총 할일 건수: {count}건</h1>
    </div>
  );
};

export default Counter;
