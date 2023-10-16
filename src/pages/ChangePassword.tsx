import Input from "../components/Input"
import passwordImage from "../assets/password.svg"
const ChangePassword = () => {
  return (
    <div className="p" style={{background:"white"}}>
        <div className="flex align-center justify-center">
            <img src={passwordImage} alt="password" />
        </div>
        <div className="sells-main-container center">
            <form>
                <div className="divided-section">
                <Input labelText={"Username"} type="text"  />
                <Input labelText={"Old password"} type="password"  />
                </div>
                <div className="divided-section">
                    <Input type="password" labelText={"New password"} />
                    <Input labelText={"Confirm password"} type="password"  />
                </div>
            </form>
        </div>
    </div>
  )
}

export default ChangePassword