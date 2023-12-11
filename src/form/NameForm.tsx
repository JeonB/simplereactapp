import React, { useState } from "react";

interface NameFormProps {
  text: string;
}

const NameForm: React.FC<NameFormProps> = ({ text }) => {
  const [value, setValue] = useState<string>("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    alert("A name was submitted: " + value);
    event.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        {text}: {/* 외부에서 전달된 text prop 사용 */}
        <input type="text" value={value} onChange={handleChange} />
      </label>
      <input type="submit" value="Submit" />
    </form>
  );
};

export default NameForm;
