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
  const dummy1 = [
    "total power",
    "total power1",
    "total power2",
    "etc"
  ]
  const dummy2 = [
    "Al watan",
    "Al rafedyin",
    "Al rasheed",
    "etc"
  ]
const OutwardCashTransfer = () => {
  return (
    <div>
        <div className="title-header btlr">
            <p>Purchased currency</p>
        </div>
        <div className="input-fields-container p-container">
            <div className="input-fields">
                <Input type="number" labelText={"Amount"} />
                <Input type="number" labelText={"Percentage"} />
                <Input type="number" labelText={"Commission"} />
                <Input type="number" labelText={"On each"} />
                <Input type="number" labelText={"Commission"} />
                <Input type="number" labelText={"Send after"} />
            </div>
            <div className="input-fields mt">
                <SelectOption labelText={"Currency"} options={currencyOptions} />
                <SelectOption labelText={"Beneficiary"} options={currencyOptions} />
                <SelectOption labelText={"Company"} options={currencyOptions} />
            </div>
            <div className="input-fields mt">
                <SelectOption labelText={"The beneficiary"} options={currencyOptions} />
                <Input type="date" labelText={"Date"} />
            </div>
        </div>
        <hr />
        <div className="input-fields-container p-container">
            <div className="input-fields">
            <SelectOption labelText={"Client"} options={dummy1} />
            <SelectOption labelText={"Dispatcher"} options={dummy2} />
                <Input type="number" labelText={"Commission"} />
                <Input type="number" labelText={"On each"} />
            </div>
            <Input textArea labelText={"Note"}/>
        </div>

    </div>
  )
}

export default OutwardCashTransfer