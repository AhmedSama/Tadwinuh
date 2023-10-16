import React, { useState, useId,ChangeEvent } from "react";


type InputProps = {
  labelText?: string | null;
  labelTextAlign?: "start" | "center" | "end",
  placeholder?: string;
  type?: "text" | "password" | "email" | "number" | "date";
  textAlign?: "left" | "center" | "right";
  onChange?: (text: string) => void;
  textArea? : boolean,
  className?:string,
};

const Input: React.FC<InputProps> = ({
  labelText = null,
  placeholder = "",
  type = "text",
  textAlign = "left",
  onChange,
  textArea = false,
  labelTextAlign="start",
  className
}: InputProps) => {
  const [text, setText] = useState<string>("");

  const id = useId(); 

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const newText = e.target.value;
    if(type === "number"){
      const formattedValue = newText.replace(/[^0-9.]/g, '');
      // Format the numeric value with commas
      const numberWithCommas = formattedValue.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
      setText(numberWithCommas)
    }
    else{
      setText(newText);
    }
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
    <div className={"input-container "+className}>
      {labelText && (
        <label style={{textAlign:labelTextAlign,display:"block"}} className="input-label" htmlFor={id}>
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
          type={type === "number" ? "text" : type}
        />

      }
      
    </div>
  );
};

export default Input;
