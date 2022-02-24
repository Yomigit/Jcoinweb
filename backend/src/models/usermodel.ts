import {Schema, model} from "mongoose"


/* {"name":"Timo Seun",
"email":"tim@seun.com",
"password": "timobig"
}
 */

interface IUser {    
        firstname: string;
        lastname: string
        email: string
        password: string
       // confirmpassword: string
        //agecheckbox: boolean
}

const userSchema:Schema = new Schema<IUser> ({
    firstname:{type:String, required:true},
    lastname:{type:String, required:true},
    email:{type:String, required:true, index:true, unique: true},
    password: {type:String, required:true},
    //confirmpassword: {type:String, required:true},
    //agecheckbox: {type:Boolean, required:true}
})


export default model<IUser>("userCollection", userSchema)
