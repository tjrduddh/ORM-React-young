//리액트 채팅앱의 모든 화면컴포넌트의 라우팅 규칙을 정의합니다.

import React from "react";
import { Navigate } from "react-router-dom";

// React.lazy() 메소드 화면컴포넌트를 동적으로 렌더링하기 위해 사용함
// React.lazy(import(해당화면-페이지컴포넌트 지정))

//기정의된 페이지 컴포넌트를 참조합니다.
const StaterPage = React.lazy(() => import("../pages/Starter/Index"));
const Dashboard = React.lazy();

const Login = React.lazy();
const Register = React.lazy();
