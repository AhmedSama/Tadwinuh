import Input from "../components/Input"
import SelectOption from "../components/SelectOption"
const dumy=[
    "Customer account",
    "Banking account",
    "Revenue account",
    "Expense account",
    "Reserved account",
]
const AddCustomer = () => {
  return (
    <div className="input-fields-container p-container">
        <div className="input-fields">
            <Input labelText={"Name"} />
            <Input type="phone" labelText={"Phone number"} />
            <SelectOption labelText={"Account Type"} options={dumy} />
        </div>
        <div className="input-fields mt">
            <Input labelText={"Entity"} />
            <Input labelText={"Address"} />
            <Input type="email" labelText={"Email"} />
        </div>
        <div className="input-fields mt">
            <div className="input-fields">
            <Input type="number" labelText={"Max balance limit"} />
            <Input type="number" labelText={"Warning after"} />
            </div>
            <div className="input-fields">
            <Input type="number" labelText={"Discount amount"} />
            <Input type="number" labelText={"Customer number"} />
            </div>
            <Input type="number" labelText={"Quick note"} />
        </div>
    </div>
  )
}

export default AddCustomer