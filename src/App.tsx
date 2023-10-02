import { useState } from "react"
import ListItem from "./components/ListItem"
import {BsCurrencyExchange,BsFillMoonFill,BsSunFill} from "react-icons/bs"
import {CgMenuLeft} from "react-icons/cg"
import {AiFillSetting} from "react-icons/ai"
import { useDispatch, useSelector } from "react-redux"
import type { RootState } from './store/store'
import { setTheme } from "./store/slices/themeSlice"
import Input from "./components/Input"
import SelectOption from "./components/SelectOption"


const currencyOptions = [
  'IQD - Iraqi Dinnar',
  'USD - United States Dollar',
  'EUR - Euro',
  'GBP - British Pound Sterling',
  'JPY - Japanese Yen',
  'CAD - Canadian Dollar',
  'AUD - Australian Dollar',
  'CHF - Swiss Franc',
  'CNY - Chinese Yuan',
  'INR - Indian Rupee',
  'SGD - Singapore Dollar',
];


function App() {
  const theme = useSelector((state:RootState) => state.theme)
  const dispatch = useDispatch()

  function toggleTheme(theme:string) {
    dispatch(setTheme(theme))
  }
  const handleSelect = (selectedOption: string) => {
    console.log('Selected option:', selectedOption);
  };
  function handleChange(text:string){
    console.log(text)
  }
// FFB300
  return (
    <>
    <aside style={{background:theme === "dark" ? "#343943" : "#fff" ,width:300,height:"100vh"}} className="sidebar">
    <SelectOption labelText={"Currency"} onSelect={handleSelect} options={currencyOptions} />
    <Input onChange={handleChange} type="text" placeholder="add text..." labelText={"Buy"} />
        <div className="sidebar-header">
            <div className="center sidebar-toggle-icon">
              <CgMenuLeft/>
            </div>
            <h1 className="sidebar-header-text">Menu</h1>
        </div>

        <nav className="sidebar-nav">
            <ul>
              <ListItem text={"Buy and sell currencies"}  icon={<BsCurrencyExchange />}>
                <ListItem text={"Sell currencies"}  icon={<BsCurrencyExchange />} />
                <ListItem text={"Buy currencies quick add"}  icon={<BsCurrencyExchange />} />
                <ListItem text={"Sell currencies quick add"}  icon={<BsCurrencyExchange />}>
                  <ListItem text={"Buy currencies"}  icon={<BsCurrencyExchange />} />
                  <ListItem text={"Sell currencies"}  icon={<BsCurrencyExchange />}>
                    <ListItem text={"Buy currencies"}  icon={<BsCurrencyExchange />} />
                    <ListItem text={"Sell currencies"}  icon={<BsCurrencyExchange />} />
                  </ListItem>
                  <ListItem text={"Buy currencies quick add"}  icon={<BsCurrencyExchange />} />
                </ListItem>
                <ListItem text={"Transaction currencies"}  icon={<BsCurrencyExchange />} />
            </ListItem>

            </ul>
        </nav>

        <div className="sidebar-footer">
            <ul>
              <ListItem text={"theme " + theme}  icon={theme === "dark" ? <BsFillMoonFill/> :<BsSunFill/> } >
                <ListItem active={theme === "dark"} onClicked={()=>toggleTheme("dark")} text={"Dark"}  icon={<BsFillMoonFill/>} />
                <ListItem active={theme === "light"} onClicked={()=>toggleTheme("light")} text={"Light"}  icon={<BsSunFill/>} />
              </ListItem>
              <ListItem text={"Setting"}  icon={<AiFillSetting />} />
            </ul>
        </div>
    </aside>
      
    
    </>
  )
}

export default App
