import React, { useEffect, useState, useReducer } from "react";

const UserEffectHook = () => {
  console.log("호출중");

  //단일 사용자 정보관리용 상태
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    telephone: "",
  });

  //사용자 목록 데이터
  const [userList, setUserList] = useState([]);

  //useEffect훅은 되도록 useState훅 아래영역에 정의합니다.
  //useEffect 사용 시나리오1: 최초로 해당 컴포넌트가 렌더링완료되는 시점
  //보통은 화면 UI가 모두 렌더링(마운팅)이 완료되면 백엔드에서 화면에 표시할 데이터를 가져오거나
  //화면내 특정값을 변경초기화 할때 주로 해당 이벤트를 사용합니다.
  //useEffect(실행함수,변경감지데이터,빈배열[]값을 할당한 경우는 최초 컴포넌트 렌더링 시점을 캐치한다);
  //두번 실행되는 경우는 리액트 index.js React.StrictMode모드를 제거하고 실행하시면 되세요
  //React.StrictMode모드는 개발환경에서만 작동되는 기능으로 서비스 할때는 무시되는 기능입니다.
  useEffect(() => {
    console.log("UseEffectHook 컴포넌트가 최초로 마운팅(렌더링)되었습니다.");
    console.log(
      "최초 화면 렌더링시 필요시 데이터가 있다면 백엔드에서 이시점에서 데이터를 불러오세요."
    );

    //백엔드에서 데이터를 호출해서 결과값을 상태값으로 변경적용한다. ex)userList

    //cleanup 함수를 호출하면 해당 컴포넌트가 사라지기 바로전에 무언가 작업을 진행할 수 있다
    return () => {
      //해당 컴포넌트가 사라지기 바로전에 수행해야하는 작업을 여기에 기능을 정의합니다.
    };
  }, []);

  //사용자 목록 데이터가 변경될 때를 감지해서 특정 기능을 구현해보자
  //신규 사용자가 사용자 목록에 추가되면 감지해서 해당 사용자의 정보로 메일을 보내준다??
  useEffect(() => {
    //userList가 배열값이 바뀔때마다 실행되는 기능 구현을 아래에 구현합니다.
    console.log("사용자 목록 정보가 변경되었습니다.", userList);
  }, [userList]);

  //매번 컴포넌트가 렌더링 될 때마다 무언가를 해야할 때 시점 캐치
  //매번 컴포넌트가 렌더링 된다라는 것은 데이터바인딩에 의해 데이터 소스가 변경되었음을 의미합니다.
  //
  useEffect(() => {}, []);

  //사용자가 입력요소마다 값을 변경할때마다 UI요소에 바인딩된 데이터 속성값을 변경해주는 이벤트 처리함수
  const onUser = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const onSave = () => {
    setUserList([...userList, user]);
  };

  return (
    <div>
      <h1>함수형 컴포넌트 생애주기관리앱 - useEffect 훅 사용하기</h1>
      <input value={user.name} name="name" onChange={onUser}></input>
      <input value={user.email} name="email" onChange={onUser}></input>
      <input value={user.password} name="password" onChange={onUser}></input>
      <input value={user.telephone} name="telephone" onChange={onUser}></input>
      <button onClick={onSave}>사용자등록</button>
      <h3>사용자 입력정보 출력영여</h3>
      <div>이름:{user.name}</div>
      <div>메일:{user.email}</div>
      <div>암호:{user.password}</div>
      <div>전화번호:{user.telephone}</div>
      <hr></hr>총 사용자 등록수: {userList.length}명
    </div>
  );
};

export default UserEffectHook;
