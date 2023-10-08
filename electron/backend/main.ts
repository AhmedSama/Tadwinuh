import  express from 'express'
import currencyRoutes from "./routes/currencyRoutes"

const expressApp = express()

expressApp.use(express.json())
// http://localhost:3000/api/currency/
expressApp.use("/api/currency/",currencyRoutes)

// if you use it like 
// expressApp.use(currencyRoutes)
// without prefixing it with a some rote 
// the routes gonna be the root http://localhost:3000/


export default expressApp

