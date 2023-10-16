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

const Sells = () => {
  return (
    <div>
      <p className="doc-title">Document number : 16</p>
      <div className="sells-main-container center">
          <form>
            <div className="divided-section">
              <Input labelText={"Document type"} type="text"  />
              <Input labelText={"Account name"} type="text"  />
            </div>
            <div className="divided-section">
              <SelectOption default_value={currencyOptions[0]} labelText={"Currency type"} options={currencyOptions} />
              <Input  labelText={"Date"} type="date"  />
            </div>
            <Input textAlign="center" />
            <div className="divided-section">
              <Input type="text"  />
              <Input labelText={"Equivalent amount"} type="text"  />
            </div>
            <Input textArea textAlign="center"/>
          </form>
      </div>
    </div>
  )
}

export default Sells