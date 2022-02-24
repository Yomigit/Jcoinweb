import  express from 'express';
import axios from 'axios';
import {Router} from  'express';

const tableRouter = Router();

tableRouter.get('', async (req, res) => {
    try {
       
        const response = await axios.get('https://api.nomics.com/v1/currencies/ticker?key=407c9985e57ec72a82bc2d390a09508d&ids=BTC,ETH,LTC,ADA,XRP&interval=1d,30d&convert=USD&per-page=100&page=1')
        const mdata = response.data;
        //console.log(mdata);
        //res.render('table', {vtables: mdata});
        res.json(mdata);       

    } catch(err) {
            console.error(err)
    }

})

export default tableRouter;