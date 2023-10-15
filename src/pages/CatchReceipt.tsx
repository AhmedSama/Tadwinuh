import Input from "../components/Input"
import SelectOption from "../components/SelectOption"
const dummy2 = [
    "Al watan",
    "Al rafedyin",
    "Al rasheed",
    "etc"
  ]
const CatchReceipt = () => {
  return (
    <div>
        <div className="title-header btlr">
            <p>Date of money transfer</p>
        </div>
        <div className="input-fields-container">
            <div className="input-fields">
                <SelectOption labelText={"Currency"} options={dummy2} />
                <SelectOption labelText={"Account name"} options={dummy2} />
                <Input type="number" labelText={"Amount"} />
            </div>
            <div className="input-fields mt">
                <Input type="date" labelText={"Date"} />
                <Input type="date" labelText={"Box account"} />
                <div className="input-fields">
                    <Input type="number" labelText={"Equivalent amount"} />
                    <Input type="number" labelText={"Discount"} />
                </div>
            </div>
            <Input textAlign="center" labelText={"Written amount"} />
            <Input textAlign="center" textArea  labelText={"Statement"} />
        </div>
    </div>
  )
}

export default CatchReceipt