import React, { useState, useId,ChangeEvent } from "react";


type InputProps = {
  labelText?: string | null;
  placeholder?: string;
  type?: "text" | "password" | "email" | "number" | "date";
  textAlign?: "left" | "center" | "right";
  onChange: (text: string) => void;
};

const Input: React.FC<InputProps> = ({
  labelText = null,
  placeholder = "",
  type = "text",
  textAlign = "left",
  onChange,
}: InputProps) => {
  const [text, setText] = useState<string>("");

  const id = useId(); 

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const newText = e.target.value;
    setText(newText);
    onChange(newText);
  };
  function setDate(date:string){
    setText(date);
    onChange(date);
  }

  return (
    <>
      {labelText && (
        <label className="input-label" htmlFor={id}>
          {labelText}
        </label>
      )}

        <input
          value={text}
          onChange={handleChange}
          style={{ textAlign }}
          placeholder={placeholder}
          id={id}
          className="input-field"
          type={type}
        />
      
    </>
  );
};

export default Input;
