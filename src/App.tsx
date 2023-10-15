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

const pagesData = [
  {
    name : "Buy and sell currencies",
    isPage : false,
    isActive : false,
    icon : <BsCurrencyExchange />,
    subPages : [
      {
        name : "Buy currencies",
        isPage : true,
        isActive : false,
        icon : <BsCurrencyExchange />,
        subPages : null
      },
      {
        name : "Sell currencies",
        isPage : true,
        isActive : true,
        icon : <BsCurrencyExchange />,
        subPages : null
      },
      {
        name : "Buy currencies quick add",
        isPage : true,
        isActive : false,
        icon : <BsCurrencyExchange />,
        subPages : null
      },
      {
        name : "Sell currencies quick add",
        isPage : true,
        isActive : false,
        icon : <BsCurrencyExchange />,
        subPages : null
      },
      {
        name : "Transaction currencies",
        isPage : true,
        isActive : false,
        icon : <BsCurrencyExchange />,
        subPages : null
      },
    ]
  },
  {
    name : "Transaction",
    isPage : false,
    isActive : false,
    icon : <BsCurrencyExchange />,
    subPages : [

    ]
  },
  {
    name : "Cash",
    isPage : false,
    isActive : false,
    icon : <BsCurrencyExchange />,
    subPages : [

    ]
  },
  {
    name : "Add user",
    isPage : false,
    isActive : false,
    icon : <BsCurrencyExchange />,
    subPages : [

    ]
  },
  {
    name : "Financial reports",
    isPage : false,
    isActive : false,
    icon : <BsCurrencyExchange />,
    subPages : [

    ]
  },
  {
    name : "Exchange reports",
    isPage : false,
    isActive : false,
    icon : <BsCurrencyExchange />,
    subPages : [

    ]
  },
  {
    name : "Competitive reports",
    isPage : false,
    isActive : false,
    icon : <BsCurrencyExchange />,
    subPages : [

    ]
  }
]

function App() {
  const [pages,setPages] = useState(pagesData)
  const [currentPage,setCurrentPage] = useState<string|null>(null)
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
              <Tree setPage={(text:string) => setCurrentPage(text)} page={currentPage} items={pages} />
            }
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
                <img className="user-img" src={girl} alt="" />
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
              <SplitedTable />
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
