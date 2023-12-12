import React from "react";
import { useAuth } from "./AuthContext";

const SignUpForm: React.FC = () => {
  const { updateUserData } = useAuth();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const id = (e.currentTarget.elements.namedItem("id") as HTMLInputElement)
      ?.value;
    const password = (
      e.currentTarget.elements.namedItem("password") as HTMLInputElement
    )?.value;
    const name = (
      e.currentTarget.elements.namedItem("name") as HTMLInputElement
    )?.value;
    const phonenum = (
      e.currentTarget.elements.namedItem("phonenum") as HTMLInputElement
    )?.value;
    updateUserData(id, password, name, phonenum);
    alert("회원가입 완료");
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
        <input type="text" name="password" />
      </label>
      <br />
      <label>
        Name:
        <input type="text" name="name" />
      </label>
      <br />
      <label>
        PhoneNum:
        <input type="text" name="phonenum" />
      </label>
      <br />
      <button type="submit">확인</button>
    </form>
  );
};

export default SignUpForm;
