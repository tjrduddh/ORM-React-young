import React, {
  useState,
  useEffect,
  useRef,
  useCallback,
  useContext,
} from "react";

//전역 컨텍스트 참조하기
import { AppContext } from "../App";

//전역 데이터 값을 조회하고 반환하는 함수 정의
function useTodoCountList() {
  const value = useContext(AppContext);
  return value;
}

const TodoList = () => {
  const refTitle = useRef(null);

  //전역 데이터중 카운터 상태값을 관리해주는 개발자 정의 훅을 이용한 데이터 제어하기
  const [, setTodoCount] = useTodoCountList();

  //단일 할일정보
  const [todo, setTodo] = useState({
    title: "",
    contents: "",
    orderby: 0,
  });

  //할일정보 속성 데이터 바인딩 처리 이벤트 핸들러 함수
  const [todoList, setTodoList] = useState([]);

  //최초로 컴포넌트가 마운팅 될 때를 감지해서 제목입력박스에 포커스를 맞춘다
  useEffect(() => {
    refTitle.current.focus();
  }, []);

  //할일정보 속성 데이터 바인딩 처리 이벤트 핸들러 함수
  const onTodoChange = useCallback(
    (e) => {
      setTodo({ ...todo, [e.target.name]: e.target.value });
    },
    [todo]
  );

  //할일 추가하기
  const onAdd = useCallback(() => {
    setTodoList([...todoList, todo]);
    setTodo({
      title: "",
      contents: "",
      orderby: 0,
    });
    refTitle.current.focus();

    setTodoCount(() => todoList.length + 1);
  }, [todo, todoList]);

  return (
    <div>
      <h1>todolist 관리자</h1>
      할일제목:
      <input
        ref={refTitle}
        name="title"
        value={todo.title}
        onChange={onTodoChange}
      />
      <br />
      할일내용:
      <input name="contents" value={todo.contents} onChange={onTodoChange} />
      <br />
      우선순위:
      <input name="orderby" value={todo.orderby} onChange={onTodoChange} />
      <br />
      <button onClick={onAdd}>추가</button>
      <hr></hr>
      <ul>
        {todoList.map((item, index) => (
          <li key={index}>
            {item.title}--{item.contents}--{item.orderby}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
