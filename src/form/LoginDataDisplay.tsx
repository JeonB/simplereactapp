import React from "react";
import { useAuth } from "./AuthContext";

const LoginDataDisplay: React.FC = () => {
  const { loginData } = useAuth();

  return (
    <div>
      <h2>User Data Display:</h2>
      <p>ID: {loginData.id}</p>
      <p>Password: {loginData.password}</p>
    </div>
  );
};

export default LoginDataDisplay;
