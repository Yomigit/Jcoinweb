import 'dotenv/config'
import { connect } from "mongoose";
import express from "express"
import {Request, Response, NextFunction} from "express"

import httpError from "./models/httperrors";
import route from "./routes/route"
import userroute from "./routes/userroute"
import tableRouter from "./routes/tableroute"


console.log(process.env.DB_URI)

const port = process.env.PORT;
const app = express()
    
app.use(express.urlencoded({extended: true}));

    app.use(express.json());

    app.use((req: Request, res: Response, next: NextFunction) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PATCH, DELETE');
    next();
});


    app.use('/', tableRouter);
    app.use("/api", route)
    app.use("/api", userroute)   

    app.use((req:Request, res:Response, next:NextFunction) => {
    const error = new httpError("page does not exist wrong route!", "404")
    throw error;
}) 
 
app.use((error:Error, req:Request, res: Response, next: NextFunction) => {
    if(res.headersSent) {
      return  next(error)
    }
    res.status(500 || error.name)
    res.json(error.message || "Error has occured")
})

connect(`${process.env.DB_URI}`)
.then(() => {
    
    app.listen(port, () => {
        console.log("listening on port 3001 and the Database is connected")
    })
    
})
.catch((err) => {
    console.log(err)
})



