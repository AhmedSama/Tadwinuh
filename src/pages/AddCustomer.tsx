import {useEffect,useState} from 'react'
import axios from 'axios'
import Input from "../components/Input"
import SelectOption from "../components/SelectOption"
import Loading from '../components/Loading'


const AddCustomer = () => {
    const [items,setItems]= useState([])
    useEffect(()=>{
        const getUsers = async () => {
            const res = await axios.get("http://localhost:6330/api/users")
            const data = res.data
            // @ts-ignore
            const filteredData = data.map(d=>d.firstName)
            console.log(filteredData)
            setItems(filteredData)
        }
        getUsers()
    },[])
  return (
    <div className="input-fields-container p-container">
        <div className="input-fields">
            <Input labelText={"Name"} />
            <Input type="phone" labelText={"Phone number"} />
            {
                items.length > 0 ?
                <SelectOption labelText={"Account Type"} options={items} />
                :
                <div className='center' style={{flex:1}}>
                    <Loading />
                </div>
            }
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