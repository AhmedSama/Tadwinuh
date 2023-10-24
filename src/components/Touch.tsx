import {useState} from 'react'
import { validateNumberAndSplitThemWithCommas } from '../utils/numberFormat'
const Touch = () => {
    const [quantity,setQuantity] = useState("")
    const [discount,setDiscount] = useState("")
    const [rate,setRate] = useState("")
    const [quantityOn,setQuantityOn] = useState(true)
    const [discountOn,setDiscountOn] = useState(false)
    const [rateOn,setRateOn] = useState(false)
    function validate(oldVal:string,newVal:string){
        if(oldVal.length === 1 && oldVal[0] === '0' && newVal !== '.'){
            return newVal
        }
        else{
            return oldVal + newVal
        }
    }
    function handleBtnClick(val:string){
        if(quantityOn){
            setQuantity(validateNumberAndSplitThemWithCommas(quantity+ val))
        }
        else if(discountOn){
            setDiscount(validateNumberAndSplitThemWithCommas(discount+ val))
        }
        else if(rateOn){
            setRate(validateNumberAndSplitThemWithCommas(rate+ val))
        }
    }
    function handleDelete(){
        if(quantityOn){
            setQuantity(validateNumberAndSplitThemWithCommas(quantity.slice(0,quantity.length - 1)) )
        }
        else if(discountOn){
            setDiscount(validateNumberAndSplitThemWithCommas(discount.slice(0,discount.length - 1)))
        }
        else if(rateOn){
            setRate(validateNumberAndSplitThemWithCommas(rate.slice(0,rate.length - 1)))
        }
    }
    function handleRemove(){
        if(quantityOn){
            setQuantity("")
        }
        else if(discountOn){
            setDiscount("")
        }
        else if(rateOn){
            setRate("")
        }
    }
  return (
    <div>
        {
           quantityOn && <input readOnly value={quantity} className="input-field"/>
        }
        {
           discountOn && <input readOnly value={discount} className="input-field"/>
        }
        {
           rateOn && <input readOnly value={rate} className="input-field"/>
        }
        <div className="grid mt">
            <div className="grid-item prevent-select" onPointerDown={()=>handleBtnClick('1')}>1</div>
            <div className="grid-item prevent-select" onPointerDown={()=>handleBtnClick('2')}>2</div>
            <div className="grid-item prevent-select" onPointerDown={()=>handleBtnClick('3')}>3</div>
            <div className={`grid-item prevent-select c2 ${quantityOn && "active"} `} onPointerDown={()=>{setQuantityOn(true);setDiscountOn(false);setRateOn(false)}}>Quantity</div>
            <div className="grid-item prevent-select" onPointerDown={()=>handleBtnClick('4')}>4</div>
            <div className="grid-item prevent-select" onPointerDown={()=>handleBtnClick('5')}>5</div>
            <div className="grid-item prevent-select" onPointerDown={()=>handleBtnClick('6')}>6</div>
            <div className={`grid-item prevent-select c2 ${discountOn && "active"} `} onPointerDown={()=>{setDiscountOn(true);setRateOn(false);setQuantityOn(false)}}>Discount</div>
            <div className="grid-item prevent-select" onPointerDown={()=>handleBtnClick('7')}>7</div>
            <div className="grid-item prevent-select" onPointerDown={()=>handleBtnClick('8')}>8</div>
            <div className="grid-item prevent-select" onPointerDown={()=>handleBtnClick('9')}>9</div>
            <div className={`grid-item prevent-select c2 ${rateOn && "active"} `} onPointerDown={()=>{setRateOn(true);setQuantityOn(false);setDiscountOn(false)}}>Rate</div>
            <div className="grid-item prevent-select" onPointerDown={()=>handleBtnClick('.')}>.</div>
            <div className="grid-item prevent-select" onPointerDown={()=>handleBtnClick('0')}>0</div>
            <div onPointerDown={handleDelete} className="grid-item prevent-select">Delete</div>
            <div onPointerDown={handleRemove} className="grid-item prevent-select c2 danger">Remove</div>
            <div className="grid-item prevent-select span-all primary">Checkout</div>
        </div>
    </div>
  )
}

export default Touch