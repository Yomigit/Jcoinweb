import {RequestHandler } from "express";

import currencyCollection from "../models/model";

const mpost: RequestHandler = async (req, res, next) => {
  const currencypost = new currencyCollection({
    currency:req.body.currency,
    symbol:req.body.symbol,
    name:req.body.name 
    }) 

    await currencypost.save()
    .then(() => {console.log("data posted")})
    
    .catch((err => {console.log(err);
    }))

    res.json({message: currencypost})
} 

export {mpost}