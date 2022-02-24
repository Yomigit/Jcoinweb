import { useHistory, useLocation } from 'react-router-dom';
import { useState, FormEvent, ChangeEvent, useContext} from 'react';
import {authContext} from './authContext'

import './login.css'

const Login = (props:any) => {

    const location = useLocation();
    const history = useHistory();
    const authC = useContext(authContext)

interface IFDatalogin {     
     email: string
     password: string    
     signcheckbox:boolean
 }     

    
    const [email, setEmail] = useState<string>("")
    const [password, setPassword] = useState<string>("")
    const [signcheckbox, setSigncheckbox] = useState<boolean>(false)
    
    const onSubmithandler = async (e: FormEvent) => {
        e.preventDefault()
        const formdatacapture: IFDatalogin = { email, password, 
            signcheckbox}     

            console.log(formdatacapture);

            
            //console.log(typeof firstname);
            

            const  dataFetch = async (url:string, config:RequestInit) => {
                try {
                     //url  = 'http://localhost:3001/api/login'

                     //config = {method: 'POST', headers:{},}

                    const response = await fetch(url, config)
                    console.log(response.json());

                    

                    if (!response.ok) {
                        throw new Error("Login Fetch Error");                       
                        
                    }  else {
                        console.log('login');
                        console.log(history);
                        history.push('/landing')
                        console.log(location);                        
                        authC.login()
                        
                        
                    }  

                    //return (response).json()

                    
                    
                } catch (error) {
                    console.error();
                    throw new Error("Something went wrong with fetch connection please try again later");

                }
            }
         
            dataFetch('http://localhost:3001/api/login',
            {method: 'POST', 
            headers:{"content-type":"application/json"}, 
            body:JSON.stringify(formdatacapture)})


        
        //alert("Submited")

    }


    return (
        <div className="login__container">
        <form onSubmit={onSubmithandler}  className="formlog">                       
            <div className="form__group">                
                <input type="email" onChange={(e:ChangeEvent<HTMLInputElement>): void => 
                {setEmail(e.target.value)}} className="form__email" placeholder="Email" id="email" required/>                
           </div>
           <div className="form__group">                
                <input type="password" onChange={(e:ChangeEvent<HTMLInputElement>): void => 
                {setPassword(e.target.value)}} className="form__email" placeholder="Password" id="password" required/>                 
           </div>           
           <div className="form__group">
           <input type="checkbox" onChange={(e:ChangeEvent<HTMLInputElement>): void => 
                {setSigncheckbox(e.target.checked)}} className="form__checkbox" placeholder="" id="signcheckbox" required/>   
           <label className="form__label">Keep me signed in on this computer</label>
           <input type="submit"  className="form__submit1"/>
           </div>                              
        </form>
        </div>
    )

}

export default Login