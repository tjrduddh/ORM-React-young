import React, { useState } from "react";

//todolist 컴포넌트 참조하기
import TodoTemplate from "./TodoTemplate";
import TodoRegist from "./TodoRegist";
import TodoList from "./TodoList";

function App() {
  //할일 목록 데이터 구조 정의 및 초기값 할당하기
  //풀스택 개발자 되기 할일 목록 데이터 정의
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: "백엔드 기술 습득하기",
      desc: "node.js,express,mvc",
      checked: false,
    },
    {
      id: 2,
      text: "클라우드 기술 습득하기",
      desc: "devops,iaas,paas,faas,caas,aws...",
      checked: false,
    },
    {
      id: 3,
      text: "프론트엔드 기술 습득하기",
      desc: "react cra,html,css,next.js...",
      checked: false,
    },
  ]);

  //할일 고유번호 데이터 정의 및 초기값 할당 = 원시타입정의
  const [nextId, setNextId] = useState(4);

  //할일 등록 처리 이벤트 함수처리
  //처리해야할 데이터가 존재하는 컴포넌트에서 이벤트처리함수를 정의하고 자
  const onInsert = (text, desc) => {
    //기존 배열의 복사본을 만들고 신규 객체를 추가한다
    //setTodos(...todos, { id: 0, text: text, desc, checked: false });

    //할일 목록 데이터에 신규 할 일 데이터 추가
    setTodos(todos.concat({ id: nextId, text: text, desc, checked: false }));

    //다음 채번번호 증가처리
    setNextId(nextId + 1);
  };

  //특정 단일 할일 정보 삭제 처리 함수 정의
  const onRemove = (id) => {
    //삭제하려는 id값을 제외한 할일목록을 조회해서 todos목록을 갱신해준다.
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  //특정 할일정보 체크박스 선택시 상태변경 처리함수 정의
  //클릭한 특정 할일의 체크박스에 바인딩된 개별 데이터객체의 checked 속성의 값을 변경해주는 기능제공
  const onSelect = (id) => {
    //할일 목록안에 특정 단일아이템의 값을 바꾸는 것이기 때문에 setTodos()를 호출하고 호출시 특정아이템을 찾고 관련속성값을 변경한다
    //todo목록데이터의 map()메소드를 호출해서 배열복사본을 만들고
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, checked: !todo.checked } : todo
      )
    );
  };

  return (
    <div className="App">
      <h1>총 할일 건수:{todos.length} 건</h1>
      <TodoTemplate>
        <TodoRegist onInsert={onInsert}></TodoRegist>
        <TodoList
          todos={todos}
          onRemove={onRemove}
          onSelect={onSelect}
        ></TodoList>
      </TodoTemplate>
    </div>
  );
}

export default App;
