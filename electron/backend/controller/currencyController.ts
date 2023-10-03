import { Request, Response } from "express";

export function getAllCurrencies(req:Request,res:Response){
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