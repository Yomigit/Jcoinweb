import {Response, Request, NextFunction, Router } from "express";
import axios,  {AxiosResponse} from 'axios';

import httpError from "../models/httperrors"

const currencytable = Router()

currencytable.get('', async (req:Request, res:Response) => {
    try {
       
        const response: AxiosResponse = await axios.get('https://api.nomics.com/v1/currencies/ticker?key=407c9985e57ec72a82bc2d390a09508d&ids=BTC,ETH,LTC,ADA,XRP&interval=1d,30d&convert=USD&per-page=100&page=1')
        const mdata = response.data;
        //console.log(mdata);
        //res.render('table', {vtables: mdata});
        res.json(mdata);         
        
    } catch(err) {
            
          throw  new httpError("An error has occured","404")
            console.error(err)
    }

})

export default currencytable;
