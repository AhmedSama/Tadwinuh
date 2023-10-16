import Input from "../components/Input"
import UserInfo from "../components/UserInfo"

const User = () => {
  return (
    <>
    <UserInfo />
    <div className="input-fields-container p-container">
        <div className="input-fields">
            <Input labelText={"Name"}/>
            <Input labelText={"Phone number"} type="phone"/>
            <Input labelText={"username"}/> 
        </div>
        <div className="input-fields mt">
            <Input type="password" labelText={"Password"}/>
            <Input labelText={"Box name"}/>
            <div style={{flex:1}}></div>
        </div>
    </div>
    </>
  )
}

export default User