import React from "react";
import LoginForm from "../form/LoginForm";
import { useAuth } from "../form/AuthContext";
import { Navigate } from "react-router-dom";
import { Common } from "../style/Commonstyle";

const SignIn: React.FC = () => {
  const { userData } = useAuth();
  if (userData.id) {
    return <Navigate to="/" />;
  }
  return (
    <Common>
      <h1>로그인</h1>
      <h3>아이디 비밀번호 입력</h3>
      <LoginForm />
    </Common>
  );
};
export default SignIn;
