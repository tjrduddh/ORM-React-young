import React, { useState } from 'react'

import logo from './logo.svg'
import './App.css'

//자식 컴포넌트 참조하기

//함수형 자식 컴포넌트를 참조합니다.
import FChild from './FunctionChild'

//클래스형 자식 컴포넌트를 참조합니다.
import CChild from './ClassChild'

//내 프로필 컴포넌트 참조하기
import MyProfile from './Profile'

//함수형 컴포넌트 생성하기
//리액트 UI컴포넌트는 반환값으로 JSX UI요소정보를 반환하여 최종 웹브라우저에 UI를 표현합니다.
//JSX UI요소를 제어하기위해 함수내에 기능구현 영역에서 필요한 데이터와 이벤트를 처리합니다.
function App() {
    //기능구현코드
    //이벤트 기능 구현
    //헤당 컴포넌트의 STATE(로컬데이터) 값과 JSX영역내 UI요소간 데이터 바인딩을 통해
    //데이터 바인딩 기법으로 (MVVM패턴기반)으로 UI요소와 데이터를 편리하게 관리합니다.

    //샘플용 로컬 문자열 테스트 데이터(스테이트) 정의 및 초기값 할당하기
    const [sample, setSample] = useState('샘플데이터')

    //사용자 정보 JSON데이터 상태값 정의 및 할당
    const [user, setUser] = useState({
        userid: 'alex',
        name: '알렉스',
        email: 'alex@text.com',
        telephone: '010-9448-9163',
        address: '서울시 용산구',
    })

    return (
        <div>
            <h1>안녕! 너의 방문을 환영해!{sample}</h1>

            {/* 각종 UI컴포넌트의 반환결과값이 결국 JSX요소들이기 때문에 참조한 UI는 결국 부모컴포넌트에 JSX영역에서 사용된다. */}

            {/* 함수형 자식 컴포넌트 결과물(JSX요소)표시하기 */}
            <FChild companyName="리액트컴퍼니" telephone="02-466-9431" address="서울시 강남구" sampleData={sample}>
                우리회사소개
            </FChild>

            {/* 클래스형 자식 컴포넌트 결과물(JSX요소)표시하기 */}
            <CChild deptName="개발1팀" deptRole="협업솔루션개발" employeee={10} sampleData={sample}>
                개발팀소개
            </CChild>

            {/* 내 프로필 자식 컴포넌트 표시하기 */}
            <MyProfile userid="young" name="오영석" email="test@test.com" telephone="010-6131-4911">
                내 소개 페이지
            </MyProfile>

            {/* 내 프로필 자식 컴포넌트 표시하기 */}
            <MyProfile userid={user.userid} name={user.name} email={user.email} telephone={user.telephone}>
                스테이트 기반 내 소개 페이지
            </MyProfile>
        </div>
    )
}

export default App
