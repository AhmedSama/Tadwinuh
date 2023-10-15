import Input from "../components/Input"
import SelectOption from "../components/SelectOption"
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
  
const TransactionCurrencies = () => {
  return (
    <div>
        <div className="title-header btlr">
            <p>Purchased currency</p>
        </div>
        <div className="input-fields-container">
            <div className="input-fields">
                <SelectOption labelText={"Currency"} options={currencyOptions} />
                <Input type="number" labelText={"Exchange rate"} />
                <Input labelText={"Date"} type="date"/>
            </div>
            <div className="input-fields mt">
                <Input type="number" labelText={"Amount"} />
                <Input type="number" labelText={"Equivalent amount"} />
                <Input />
            </div>
        </div>
        <div className="title-header">
            <p>Purchased currency</p>
        </div>
        <div className="input-fields-container">
            <div className="input-fields">
                <SelectOption labelText={"Currency type"} options={currencyOptions} />
                <Input type="number" labelText={"Exchange rate"} />
                <Input labelText={"Written amount"}/>
            </div>
            <Input textArea labelText={"Statement"}/>
        </div>
    </div>
  )
}

export default TransactionCurrencies