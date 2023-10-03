import React, { useState } from "react"
import {IoIosArrowDown,IoIosArrowUp} from "react-icons/io"
type ListItemType = {
    text : string,
    icon : React.ReactNode,
    children? : React.ReactNode,
    onClicked? : () => void,
    active? : boolean,
}

const ListItem = ({text,icon,children,onClicked,active} : ListItemType) => {

    const [show,setShow] = useState(false)

    function handleClick(){
      if(children){
          setShow(!show)
      }
      if(onClicked){
        onClicked()
      }
    }
  return (
    <>
    {/* handle click here and from the ...rest */}
    <li  onClick={handleClick}  className={`list-item ${ active || show ? "active" : ""}`}>
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
        <div className="sub-menu">
            {children}
        </div>
      }
    </>
  )
}

export default ListItem