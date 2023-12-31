import React, { useEffect, useState } from "react";
import LoginForm from "../form/LoginForm";
import { useAuth } from "../form/AuthContext";
import { Link, Navigate } from "react-router-dom";
import { Common } from "../style/Commonstyle";
import "../style/login.css";

const SignIn: React.FC = () => {
  const { loginData, userData, updateLoginData } = useAuth();
  const [isAlertShown, setAlertShown] = useState(false);

  useEffect(() => {
    // loginData.id가 변경되고 isAlertShown이 false일 때만 실행
    if (loginData.id && !isAlertShown) {
      alert("로그인 완료");
      setAlertShown(true);
    }
  }, [loginData.id, isAlertShown]);
  // loginData에 데이터 존재할 시 메인페이지 이동
  if (loginData.id) {
    return <Navigate to="/" />;
  }
  // 폼 submit 실행 후 로직
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const id = (e.currentTarget.elements.namedItem("id") as HTMLInputElement)
      ?.value;
    const password = (
      e.currentTarget.elements.namedItem("password") as HTMLInputElement
    )?.value;

    if (
      id !== "" &&
      password !== "" &&
      (userData.id !== id || userData.password !== password)
    ) {
      alert("ID나 비밀번호가 일치하지 않습니다.");
      return <Navigate to="/sign-in" />;
    } else if (id === "") {
      alert("ID를 입력해주세요.");
      return <Navigate to="/sign-in" />;
    } else if (password === "") {
      alert("비밀번호를 입력해주세요.");
      return <Navigate to="/sign-in" />;
    }
    updateLoginData(id, password);
  };

  return (
    // <Common>
    //   <h1>로그인</h1>
    //   <h3>아이디 비밀번호 입력</h3>
    //   <LoginForm />
    // </Common>
    <div className="test">
      <div className="container" id="container">
        <div className="form-container sign-in-container">
          <form onSubmit={handleSubmit}>
            <h1>Sign in</h1>
            <span>or use your account</span>
            <input type="id" name="id" />
            <input type="password" name="password" />
            <Link to="#">Forgot your password?</Link>
            <button type="submit">Sign In</button>
          </form>
        </div>
        <div className="overlay-container">
          <div className="overlay">
            <div className="overlay-panel overlay-right">
              <h1>Hello, Friend!</h1>
              <p> Enter your personal details and start the journey with us</p>
              <Link to="/sign-up">
                <button className="ghost" id="signUp">
                  Sign Up
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
