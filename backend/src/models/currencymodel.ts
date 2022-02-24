import { Schema, model } from "mongoose";

interface ICurrency {
    
    id: string;
    currency:string
    symbol:string
    name:string
    logo_url:string
    status:string
    price:number
    price_date:string
    first_trade:string
    rank:string
    price_change:string
    
}

const Currencyschema: Schema = new Schema<ICurrency>({
    id: {type:String, required:true},
    currency:{type:String, required:true},
    symbol:{type:String, required:true},
    name:{type:String, required:true}
    /* logo_url:{type:String, required:true},
    status:{type:String, required:true},
    price:{type:Number, required:true},
    price_date:{type:String, required:true},
    first_trade:{type:String, required:true},
    rank:{type:String, required:true},
    price_change:{type:String, required:true} */
})

export default model<ICurrency>('Currency', Currencyschema)


