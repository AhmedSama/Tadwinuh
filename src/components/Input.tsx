import React, { useState, useId,ChangeEvent } from "react";


type InputProps = {
  labelText?: string | null;
  placeholder?: string;
  type?: "text" | "password" | "email" | "number" | "date";
  textAlign?: "left" | "center" | "right";
  onChange?: (text: string) => void;
  textArea? : boolean
};

const Input: React.FC<InputProps> = ({
  labelText = null,
  placeholder = "",
  type = "text",
  textAlign = "left",
  onChange,
  textArea = false
}: InputProps) => {
  const [text, setText] = useState<string>("");

  const id = useId(); 

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const newText = e.target.value;
    setText(newText);
    if(onChange)
      onChange(newText);
  };
  const handleTextAreaChange = (e :React.ChangeEvent<HTMLTextAreaElement>)=>{
    const newText = e.target.value;
    setText(newText);
    if(onChange)
      onChange(newText);
  }


  return (
    <div className="input-container">
      {labelText && (
        <label className="input-label" htmlFor={id}>
          {labelText}
        </label>
      )}
      {
        textArea ?
        <textarea value={text}
        onChange={handleTextAreaChange}
        style={{ textAlign }}
        placeholder={placeholder}
        id={id}
        className="input-field" name="" 
         cols={10} rows={5}></textarea>
        :
        <input
          value={text}
          onChange={handleChange}
          style={{ textAlign }}
          placeholder={placeholder}
          id={id}
          className="input-field"
          type={type}
        />

      }
      
    </div>
  );
};

export default Input;
