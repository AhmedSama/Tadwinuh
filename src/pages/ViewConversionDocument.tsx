import Input from "../components/Input"

const ViewConversionDocument = () => {
  return (
    <div>
        <div className="input-fields-container p-container">
            <div className="input-fields">
                <Input labelText={"Receipt number"} />
                <Input labelText={"Transfer amount"} />
            </div>
            <Input labelText={"Written amount"} />
            <Input textArea labelText={"Note"} />
        </div>
    </div>
  )
}

export default ViewConversionDocument