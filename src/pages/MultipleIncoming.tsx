import { BsTrash } from "react-icons/bs";
import Input from "../components/Input"
import SelectOption from "../components/SelectOption"
import Table from "../components/Table";
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
const MultipleIncoming = () => {
  return (
    <div>
    <div className="input-fields-container">
        <div className="input-fields">
            <div>
                <SelectOption labelText={"Company"} options={currencyOptions} />
                <Input type="date" labelText={"Date"} />
            </div>
            <div>
                <Input type="text" labelText={"Phone number"} />
                <div className="input-fields">
                    <Input type="text" labelText={"Informer name"} />
                    <Input type="text" labelText={"Informer type"} />
                </div>
            </div>
            <Input labelText={"Note"} textArea />
        </div>
    </div>
    <Table titles={titles} data={data} />
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

export default MultipleIncoming