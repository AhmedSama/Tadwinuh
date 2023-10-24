import React, { useState, useId,ChangeEvent,MouseEvent } from "react";
import {AiFillEye,AiFillEyeInvisible} from 'react-icons/ai'
import { formatPhoneNumber, validateNumberAndSplitThemWithCommas } from "../utils/numberFormat";
type InputProps = {
  labelText?: string | null;
  labelTextAlign?: "start" | "center" | "end",
  placeholder?: string;
  type?: "text" | "password" | "email" | "number" | "date" | "phone";
  textAlign?: "left" | "center" | "right";
  onChange?: (text: string) => void;
  textArea? : boolean,
  className?:string,
  disabled? : boolean,
  readonly? : boolean,
  value? : string,
};

const Input: React.FC<InputProps> = ({
  labelText = null,
  placeholder = "",
  type = "text",
  textAlign = "left",
  onChange,
  textArea = false,
  labelTextAlign="start",
  className,
  disabled = false,
  readonly = false,
  value=""
}: InputProps) => {
  const [text, setText] = useState<string>(value);
  const [typeState,setTypeState] = useState(type)
  const id = useId(); 

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const newText = e.target.value;
    if(type === "number"){
      setText(validateNumberAndSplitThemWithCommas(newText))
    }
    else if(type === "phone"){
      // Use a regular expression to remove non-numeric characters and special characters
      const formattedValue = newText.replace(/[^\d+]/g, '');
      // Add phone number formatting
      const formattedPhoneNumber = formatPhoneNumber(formattedValue);
      setText(formattedPhoneNumber);
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
  const handleShowPassword = () => {
    if(typeState === "text"){
      setTypeState("password")
    }
    else{
      setTypeState("text")
    }
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
        disabled ={disabled}
        placeholder={placeholder}
        readOnly={readonly}
        id={id}
        className="input-field" name="" 
         cols={10} rows={5}></textarea>
        :
        <div className="flex align-center rel">
          <input
            value={text}
            disabled ={disabled}
            onChange={handleChange}
            style={{ textAlign }}
            placeholder={placeholder}
            readOnly={readonly}
            id={id}
            className="input-field"
            type={typeState === "number" || typeState === "phone" ? "text" : typeState}
          />
          {type === "password" && typeState === "password" && <AiFillEye onClick={handleShowPassword} style={{right:5,fontSize:20}} className="cp abs" />}
          {type === "password" && typeState === "text" && <AiFillEyeInvisible onClick={handleShowPassword} style={{right:5,fontSize:20}} className="cp abs" />}
        </div>
      }
      
    </div>
  );
};

export default Input;
