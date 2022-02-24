import express from "express"
import createCurrency from "../controllers/currencycontroller"
const router = express.Router()


router.post("", createCurrency)



export default router