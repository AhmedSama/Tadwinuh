import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient()
// if you don't use a varibale you have to remove it or change its name to _ 
export async function getAllCurrencies(_:Request,res:Response){
    res.json(await prisma.user.findMany())
}
export async function getOneCurrency(req:Request,res:Response){
    const id =parseInt(req.params.id) 
    const curr = await prisma.user.findFirst({
        where : {
            id : id
        }
    })
    res.json(curr)
}

export async function addOneCurrency(req:Request,res:Response){
    const userData = req.body
    const curr = await prisma.user.create({
        data : userData
    })
    res.json(curr)
}