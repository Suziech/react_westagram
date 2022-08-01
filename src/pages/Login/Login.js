import React from "react";
import "./Login.scss";
import { Link } from "react-router-dom";

function Login() {
  return (
    <>
      <div className="login_page_container">
        <p className="main_logo logo_font">Westagram</p>
        <div className="id_wrapper">
          <input
            className="id id_pw_input_box"
            type="text"
            placeholder=" 전화번호, 사용자 이름 또는 이메일"
          />
          <input
            className="pw id_pw_input_box"
            type="password"
            placeholder=" 비밀번호"
          />
          <Link to="/main">
            <button className="login_btn">로그인</button>
          </Link>
          <a
            className="forgotPw"
            href="https://www.instagram.com/accounts/password/reset/"
          >
            비밀번호를 잊으셨나요?
          </a>
        </div>
      </div>
    </>
  );
}

export default Login;

// <!DOCTYPE html>
// <html lang="en">
//   <head>
//     <meta charset="UTF-8" />
//     <meta http-equiv="X-UA-Compatible" content="IE=edge" />
//     <meta name="viewport" content="width=device-width, initial-scale=1.0" />
//     <title>Login • Westagram</title>
//     <link rel="stylesheet" href="login.css" />
//     <link rel="stylesheet" href="common.css" />
//     <link rel="preconnect" href="https://fonts.googleapis.com" />
//     <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
//     <link
//       href="https://fonts.googleapis.com/css2?family=Lobster&display=swap"
//       rel="stylesheet"
//     />
//     <script defer src="login.js"></script>
//   </head>
//   <body>
//     <div className="login_page_container">
//       <p className="main_logo logo_font">Westagram</p>
//       <div className="id_wrapper">
//         <input
//           className="id id_pw_input_box"
//           type="text"
//           placeholder=" 전화번호, 사용자 이름 또는 이메일"
//         />
//         <input
//           className="pw id_pw_input_box"
//           type="password"
//           placeholder=" 비밀번호"
//         />

//         <button className="login_btn" onClick="window.open('main.html')">
//           로그인
//         </button>

//         <a
//           className="forgotPw"
//           href="https://www.instagram.com/accounts/password/reset/"
//           >비밀번호를 잊으셨나요?</a
//         >
//       </div>
//     </div>
//   </body>
// </html>
