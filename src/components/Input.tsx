import React, { useState, useId,ChangeEvent,MouseEvent } from "react";
import {AiFillEye,AiFillEyeInvisible} from 'react-icons/ai'
type InputProps = {
  labelText?: string | null;
  labelTextAlign?: "start" | "center" | "end",
  placeholder?: string;
  type?: "text" | "password" | "email" | "number" | "date" | "phone";
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
  const [typeState,setTypeState] = useState(type)
  const id = useId(); 
  const formatPhoneNumber = (phoneNumber:string) => {
    // Your formatting logic can go here
    if (phoneNumber.length <= 3) {
      return phoneNumber;
    }

    let countryKey = phoneNumber[0] === '+'  ? '+' : '';
    countryKey = phoneNumber[0] === '0'  ? '0' : '';
    const restOfNumber = phoneNumber.slice(countryKey.length);

    let formattedNumber = countryKey;
    for (let i = 0; i < restOfNumber.length; i += 3) {
      if(i === 3){
        formattedNumber += restOfNumber.slice(i, i + 4) + ' ';
        i+=1
      }
      else{
        formattedNumber += restOfNumber.slice(i, i + 3) + ' ';
      }
    }

    return formattedNumber.trim();
  };
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const newText = e.target.value;
    if(type === "number"){
       // A regular expression to remove non-numeric characters
      const formattedValue = newText.replace(/[^0-9.]/g, '');
      // Format the numeric value with commas
      const numberWithCommas = formattedValue.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
      setText(numberWithCommas)
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
        placeholder={placeholder}
        id={id}
        className="input-field" name="" 
         cols={10} rows={5}></textarea>
        :
        <div className="flex align-center rel">
          <input
            value={text}
            onChange={handleChange}
            style={{ textAlign }}
            placeholder={placeholder}
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
