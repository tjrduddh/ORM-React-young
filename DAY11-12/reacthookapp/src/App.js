//전역 상태관리를 위한 객체 참조하기
import React, { createContext, useState } from "react";

import logo from "./logo.svg";
import "./App.css";

import UseStateHook from "./UseStateHook";
import UseReducerHook from "./UseReducerHook";
import UserEffectHook from "./UseEffectHook";
import PerformHook from "./PerformHook";
import Counter from "./context/Counter";
import TodoList from "./context/TodoList";

//전역 리액트 어플리케이션 컨텍스트 만들고 외부로 노출하기
export const AppContext = createContext();

//카운터 전용 데이터 제공 프로바이더 생성함수 정의하기
function CounterProvider({ children }) {
  //전역으로 사용될 할일건수 상태값 정의
  //useState을 이용한 데이터 관리시 별도 SETTER 함수없이 사용하는 경우 변수만 할당함..
  const count = useState(0);
  return <AppContext.Provider value={count}>{children}</AppContext.Provider>;
}

function App() {
  return (
    <div className="App">
      {/* <UseStateHook></UseStateHook>
      <hr></hr>
      <UseReducerHook></UseReducerHook>
      <hr></hr>
      <UserEffectHook></UserEffectHook> */}

      {/* 성능 최적화 훅 테스트*/}
      {/* <PerformHook></PerformHook> */}

      {/* 전역데이터 제공 프로바이더 컴포넌트로 최상위 컴포넌트의 자식요소를 감싸줍니다. */}
      <CounterProvider>
        <Counter></Counter>
        <hr></hr>
        <TodoList></TodoList>
      </CounterProvider>
    </div>
  );
}

export default App;
