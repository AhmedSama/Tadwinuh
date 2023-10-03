import { Request, Response } from "express";

// if you don't use a varibale you have to remove it or change its name to _ 
export function getAllCurrencies(_:Request,res:Response){
    res.json({hello:"currency"})
}
export function getOneCurrency(req:Request,res:Response){
    const id = req.params.id
    res.json({currencyId:id})
}

export function addOneCurrency(req:Request,res:Response){
    const id = req.params.id
    res.json({currencyId:id,state:"added"})
}