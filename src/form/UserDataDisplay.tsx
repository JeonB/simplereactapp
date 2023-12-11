import React from "react";
import { useAuth } from "./AuthContext";

const UserDataDisplay: React.FC = () => {
  const { userData } = useAuth();

  return (
    <div>
      <h2>User Data Display:</h2>
      <p>ID: {userData.id}</p>
      <p>Password: {userData.password}</p>
      <p>Name: {userData.name}</p>
      <p>PhoneNum: {userData.phonenum}</p>
    </div>
  );
};

export default UserDataDisplay;
