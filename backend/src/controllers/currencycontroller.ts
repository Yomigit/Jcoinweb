import { RequestHandler } from "express";
import {Types, connect} from "mongoose";
import httpError  from "../models/httperrors";
import Currency from "../models/currencymodel"

const createCurrency:RequestHandler = (req, res, next) => {

  let  {currency,
    symbol,
    name

    } = req.body

    /* logo_url,
    status,
    price,
    price_date,
    first_trade,
    rank,
    price_change */

  const currencyunit = new Currency({
      _id: new Types.ObjectId(),
      currency,
      symbol,
      name
      
  }) 
  
  /* logo_url,
      status,
      price,
      price_date,
      first_trade,
      rank,
      price_change */
  
   return currencyunit
  .save()
  .then((result) => {
      return res.status(201).json({        
        currencyunit:result
      })
  })
  .catch((err) => {
    //console.log(err)
    const error = new httpError(" Unable to create currency", "501")
    return next(error) 
    
  })
 
    

}


export default createCurrency