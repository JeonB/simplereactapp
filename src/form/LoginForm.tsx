import React from "react";
import { useAuth } from "./AuthContext";
import { Navigate } from "react-router-dom";

const LoginForm: React.FC = () => {
  const { updateLoginData, userData } = useAuth();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const id = (e.currentTarget.elements.namedItem("id") as HTMLInputElement)
      ?.value;
    const password = (
      e.currentTarget.elements.namedItem("password") as HTMLInputElement
    )?.value;

    if (userData.id !== id || userData.password !== password) {
      alert("ID나 비밀번호가 일치하지 않습니다.");
      return <Navigate to="/sign-in" />;
    } else if (id === "" || password === "") {
      alert("ID나 비밀번호를 입력해주세요.");
      return <Navigate to="/sign-in" />;
    }
    updateLoginData(id, password);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        ID:
        <input type="text" name="id" />
      </label>
      <br />
      <label>
        Password:
        <input type="password" name="password" />
      </label>
      <br />
      <button type="submit">Submit</button>
    </form>
  );
};

export default LoginForm;
