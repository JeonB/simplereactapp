import React from "react";
import { Common } from "../style/Commonstyle";
import SignUpForm from "../form/SignUpForm";
import UserDataDisplay from "../form/UserDataDisplay";

const SignUp: React.FC = () => {
  return (
    <Common>
      <h1>회원 가입</h1>
      <SignUpForm />
      <UserDataDisplay />
    </Common>
  );
};

export default SignUp;
