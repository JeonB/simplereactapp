import React from "react";
import UserDataDisplay from "../form/UserDataDisplay";
import { Common } from "../style/Commonstyle";

const About: React.FC = () => {
  return (
    <Common>
      <h1>User 로그인 정보</h1>
      <UserDataDisplay />
    </Common>
  );
};

export default About;
