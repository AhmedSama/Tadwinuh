import { BsTrash } from "react-icons/bs"
import Input from "../components/Input"
import Table from "../components/Table"
const titles = [
    "Amount",
    'Exchange rate',
    'Equivalent amount',
    'Note',
    'Delete',
]
const data = [
    ['12,000.00 $',
        1530,
        '17,000,000.00',
        'Please leave a note right over here',
        <BsTrash className="delete-icon" />
    ],
    ['12,000.00 $',
        1530,
        '17,000,000.00',
        'Please leave a note right over here',
        <BsTrash className="delete-icon" />
    ],
    ['12,000.00 $',
        1530,
        '17,000,000.00',
        'Please leave a note right over here',
        <BsTrash className="delete-icon" />
    ],
    ['12,000.00 $',
        1530,
        '17,000,000.00',
        'Please leave a note right over here',
        <BsTrash className="delete-icon" />
    ]
]
export const SellCurrencyFastEntry = () => {
  return (
    <>
    <div style={style}>
        <span>Date </span> <span><Input type="date"/></span>
    </div>
    <Table titles={titles} data={data} />
    <div className="result">
        <div className="result-info">
            <p>Total amount <span className="val">12,000.00 $</span></p>
        </div>
        <div className="result-info">
            <p>Equivalent amount <span className="val">17,000,000.00</span></p>
        </div>
        
    </div>
    </>
  )
}

const style = {
    display : "flex",
    alignItems : "center",
    gap:10,
    marginBottom:10,
}