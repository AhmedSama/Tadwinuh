import ListItem from "./components/ListItem"
import {useEffect} from 'react'
import {BsCurrencyExchange,BsFillMoonFill,BsSunFill} from "react-icons/bs"
import {CgMenuLeft} from "react-icons/cg"
import {AiFillSetting} from "react-icons/ai"
import {BsSearch} from 'react-icons/bs'
import {IoMdNotifications} from 'react-icons/io'
import {AiOutlinePrinter} from 'react-icons/ai'
import { useDispatch, useSelector } from "react-redux"
import type { RootState } from './store/store'
import { setTheme } from "./store/slices/themeSlice"
import girl from "./assets/girl.jpg"
import axios from "axios"
import { useState } from "react"
import Sells from "./pages/Sells"
import Tree, { pagesType } from "./components/Tree"
import Table from "./components/Table"
import { SellCurrencyFastEntry } from "./pages/SellCurrencyFastEntry"
import TransactionCurrencies from "./pages/TransactionCurrencies"
import OutwardCashTransfer from "./pages/OutwardCashTransfer"
import MultipleIncoming from "./pages/MultipleIncoming"
import MultipleOutcoming from "./pages/MultipleOutcoming"
import CatchReceipt from "./pages/CatchReceipt"
import ViewConversionDocument from "./pages/ViewConversionDocument"
import SplitedTable from "./components/SplitedTable"
import TransferringCashFromCashierToTreasury from "./pages/TransferringCashFromCashierToTreasury"
import AddCustomer from "./pages/AddCustomer"
import User from "./pages/User"
import Currency from "./pages/Currency"
import ChangePassword from "./pages/ChangePassword"

import { Route, Routes, useLocation } from 'react-router-dom';


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
  const [currentPage,setCurrentPage] = useState<string|null>(null)
  const theme = useSelector((state:RootState) => state.theme)
  const dispatch = useDispatch()
  const location = useLocation();
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
    <div>{currentPage}</div>
    <div className="layout">
      <aside style={{background:theme === "dark" ? "#343943" : "#fff" ,width:300,height:"100vh"}} className="sidebar">
      
          <div className="sidebar-header">
              <div className="center sidebar-toggle-icon">
                <CgMenuLeft/>
              </div>
              <h1 className="sidebar-header-text">Menu</h1>
          </div>

          <nav className="sidebar-nav">
            {
              // <Tree setPage={(text:string) => setCurrentPage(text)} page={currentPage} items={pages} />
            }
            <ul>
              
              <ListItem icon={<BsCurrencyExchange />} text="Buy and sell currencies">
                  <ListItem icon={<BsCurrencyExchange />} active={location.pathname === "/buy"} to="/buy" text="Buy currencies" />
                  <ListItem icon={<BsCurrencyExchange />} active={location.pathname === "/sell"} to="/sell" text="Sell currencies" />
                  <ListItem icon={<BsCurrencyExchange />} active={location.pathname === "/buyfast"} to="/buyfast" text="Buy currencies quick add" />
                  <ListItem icon={<BsCurrencyExchange />} active={location.pathname === "/add-customer"} to="/add-customer" text="Sell currencies quick add" />
                  <ListItem icon={<BsCurrencyExchange />} active={location.pathname === "/transaction"} to="/transaction" text="Transaction currencies" />                  
              </ListItem>
            </ul>
          </nav>

          <div className="sidebar-footer">
              <ul>
                <ListItem text={"theme " + theme}  icon={theme === "dark" ? <BsFillMoonFill/> :<BsSunFill/> } >
                  <ListItem active={theme === "dark"} onClicked={()=>toggleTheme("dark")} text={"Dark"}  icon={<BsFillMoonFill/>} />
                  <ListItem active={theme === "light"} onClicked={()=>toggleTheme("light")} text={"Light"}  icon={<BsSunFill/>} />
                </ListItem>
                <ListItem text={"Setting"} to="/user" active={location.pathname === "/user"}  icon={<AiFillSetting />} />
              </ul>
          </div>
      </aside>
      <div className="hero">
        <div className="hero-header">
            <div className="search-input">
              <input type="text" placeholder="search..." />
              <BsSearch />
            </div>
            <div className="user-info">
              <div className="center notification">
                  <IoMdNotifications />
              </div>
              <div className="user">
                <p className="user-name">Tadwinuh HR</p>
                <div style={{width:40,height:40,overflow:"hidden"}}>
                  <img className="user-img" src={girl} alt="" />
                </div>
              </div>
            </div>
        </div>
        <div className="main">
          <div className="main-header">
                <div className="main-title">
                  <h2>Sells</h2>
                </div>
                <div className="main-actions">
                  <button className="btn">Previous bonds</button>
                  <button className="btn">print
                  <AiOutlinePrinter />
                  </button>
                </div>
          </div>
          <div className="main-container">
          <Routes>
            <Route path="/" element={<Sells />} />
            <Route path="/sell" element={<Sells />} />
            <Route path="/buy" element={<Sells />} />
            <Route path="/transaction" element={<TransactionCurrencies />} />
            <Route path="/sellfast" element={<SellCurrencyFastEntry />} />
            <Route path="/buyfast" element={<SellCurrencyFastEntry />} />
            <Route path="/user" element={<User />} />
            <Route path="/currency" element={<Currency />} />
            <Route path="/add-customer" element={<AddCustomer />} />
            {/* Add more routes for other pages/components */}
          </Routes>
            <div className="main-actions p">
                <button className="btn">Save</button>
                <button className="btn secondary">New</button>
              </div>
          </div>
        </div>
      </div>
    </div>
      
    
    </>
  )
}

export default App
