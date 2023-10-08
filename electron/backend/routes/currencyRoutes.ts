import {Router } from "express";
import { addOneCurrency, getAllCurrencies, getOneCurrency } from "../controller/currencyController";

const app = Router()


// get all currencies
app.get("/",getAllCurrencies)

// get currency
app.get("/:id",getOneCurrency) 

// add currency
app.post("/",addOneCurrency)

export default app
