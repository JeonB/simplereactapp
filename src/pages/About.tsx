import React from "react";
import { Common } from "../style/Commonstyle";
import LoginDataDisplay from "../form/LoginDataDisplay";

const About: React.FC = () => {
  return (
    <Common>
      <h1>User 로그인 정보</h1>
      <LoginDataDisplay />
    </Common>
  );
};

export default About;
