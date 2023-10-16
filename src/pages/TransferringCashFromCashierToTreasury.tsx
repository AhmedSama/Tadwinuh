import Input from "../components/Input"
import SplitedTable from "../components/SplitedTable"

const TransferringCashFromCashierToTreasury = () => {
  return (
    <div>
        <SplitedTable />
        <Input className="mt" textAlign="center" labelText={"Transfer amount"} type="number" labelTextAlign="center" />
    </div>
  )
}

export default TransferringCashFromCashierToTreasury