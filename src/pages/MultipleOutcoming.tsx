import { BsTrash } from "react-icons/bs"
import Input from "../components/Input"
import Table from "../components/Table"
const titles =[
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
const MultipleOutcoming = () => {
  return (
    <div>
    <div className="input-fields-container p-container">
        <div className="input-fields" style={{alignItems:"flex-start"}}>
            
            <Input labelText={"Note"} textArea />
            <Input labelText={"Date"} type="date" />
        </div>
    </div>
    <Table data={data} titles={titles} />
    <div className="result">
        <div className="result-info">
            <p>Number of dinar transfers <span className="val">12,000.00 $</span></p>
        </div>
        <div className="result-info">
            <p>Total dinar amounts <span className="val">17,000,000.00</span></p>
        </div>
        <div className="result-info">
            <p>Total of dinar commissions <span className="val">17,000,000.00</span></p>
        </div>
        <div className="result-info">
            <p>Number of dinar transfers <span className="val">12,000.00 $</span></p>
        </div>
        <div className="result-info">
            <p>Total dinar amounts <span className="val">17,000,000.00</span></p>
        </div>
        <div className="result-info">
            <p>Total of dinar commissions <span className="val">17,000,000.00</span></p>
        </div>
    </div>
</div>
  )
}

export default MultipleOutcoming