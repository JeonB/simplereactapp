import React from "react";
import { useAuth } from "./AuthContext";

const LoginForm: React.FC = () => {
  const { updateUserData } = useAuth();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const id = (e.currentTarget.elements.namedItem("id") as HTMLInputElement)
      ?.value;
    const password = (
      e.currentTarget.elements.namedItem("password") as HTMLInputElement
    )?.value;

    updateUserData(id, password);
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
