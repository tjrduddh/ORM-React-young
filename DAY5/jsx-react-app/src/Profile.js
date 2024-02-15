import React from 'react'
import Child1 from './ThirdComponent'

//Props속성의 필수입력여부 또는 데이터 타입 유효성 검사 기능제공
import PropTypes from 'prop-types'

// const Profile = (props) => {
//     return (
//         <div>
//             <h1>{props.children}</h1>
//             아이디:{props.userid}
//             <br />
//             이름:{props.name}
//             <br />
//             메일주소:{props.email}
//             <br />
//             전화번호:{props.telephone}
//             <br />
//         </div>
//     )
// }

const Profile = ({ children, userid, name, email, telephone }) => {
    return (
        <div>
            <h1>{children}-NO Props</h1>
            아이디:{userid}
            <br />
            이름:{name}
            <br />
            메일주소:{email}
            <br />
            전화번호:{telephone}
            <br />
            <Child1 name={name}></Child1>
        </div>
    )
}

Profile.defaultProps = {
    address: '서울시 마포구',
}

Profile.propTypes = {
    age: PropTypes.number.isRequired,
    userid: PropTypes.string.isRequired,
}

export default Profile
