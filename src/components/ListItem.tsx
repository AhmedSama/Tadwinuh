import React, { useState } from "react"
import {IoIosArrowDown,IoIosArrowUp} from "react-icons/io"
import { Link } from "react-router-dom"
type ListItemType = {
    text : string,
    icon? : React.ReactNode,
    children? : React.ReactNode,
    onClicked? : (text:string) => void,
    active? : boolean,
    to? : string
}

const ListItem = ({text,icon,children,onClicked,active,to=""} : ListItemType) => {

    const [show,setShow] = useState(false)
    function handleClick(text:string){
      if(children){
          setShow(!show)
      }
      if(onClicked){
        onClicked(text)
      }
    }
    if(to !== ""){
      return(
    <>
        <Link to={to}>
      <li  onClick={() => handleClick(text)}  className={`list-item ${ active || show ? "active" : ""}`}>
          <div className="icon-text">
              <div className="active-left-bar"></div>
              <div className="icon center">
                  {icon}
              </div>
              <div className="text">
              <p>{text}</p>
              </div>
          </div>
          {
            show ? 
            children && <IoIosArrowUp className="arrow-icon" />
              :
              children && <IoIosArrowDown className="arrow-icon" />
              
            }
        </li>
        </Link>
        {
          children && show &&
          <ul className="sub-menu">
              {children}
          </ul>
        }
    </>
      )
    }
  return (
    
    <>
    <li  onClick={() => handleClick(text)}  className={`list-item ${ active || show ? "active" : ""}`}>
        <div className="icon-text">
            <div className="active-left-bar"></div>
            <div className="icon center">
                {icon}
            </div>
            <div className="text">
            <p>{text}</p>
            </div>
        </div>
        {
            show ? 
            children && <IoIosArrowUp className="arrow-icon" />
            :
            children && <IoIosArrowDown className="arrow-icon" />
            
        }
      </li>
      {
        children && show &&
        <ul className="sub-menu">
            {children}
        </ul>
      }
    </>
  )
}

export default ListItem