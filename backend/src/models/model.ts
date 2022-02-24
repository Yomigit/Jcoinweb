import { Schema, model } from "mongoose";

interface ICurrency {  
    currency:string
    symbol:string
    name:string    
}

const Currencyschema: Schema = new Schema<ICurrency>({    
    currency:{type:String, required:true},
    symbol:{type:String, required:true},
    name:{type:String, required:true}
    
})

export default model<ICurrency>('currencyCollection', Currencyschema)
