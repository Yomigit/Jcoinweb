import { ChangeEvent, FormEvent, useState} from 'react'
import { useHistory } from 'react-router-dom'
import './signup.css'

const Signup = () => {
    const history = useHistory();

   interface IFDatasignup {
        firstname: string;
        lastname: string
        email: string
        password: string
        confirmpassword: string
        agecheckbox: boolean
    }     

    const [firstname, setFirstname] = useState<string>("")
    const [lastname, setLastname] = useState<string>("")
    const [email, setEmail] = useState<string>("")
    const [password, setPassword] = useState<string>("")
    const [confirmpassword, setConfirmpassword] = useState<string>("")
    const [agecheckbox, setAgecheckbox] = useState<boolean>(false)
    
    

    const onSubmithandler = async (e: FormEvent) => {
        e.preventDefault()
        const formdatacapture: IFDatasignup = {firstname,
            lastname, email, password, 
            confirmpassword, agecheckbox}     

            console.log(formdatacapture);

            
            //console.log(typeof firstname);

            const  dataFetch = async (url:string, config:RequestInit) => {
                try {
                     //url  = 'http://localhost:3001/api/signup'

                     //config = {method: 'POST', headers:{},}

                    const response = await fetch(url, config)
                    console.log(response.json());

                    

                    if (!response.ok) {
                        throw new Error("Signup Fetch Error");                       
                        
                    }  else {
                        history.push('/dialogalert')
                    }  

                    //return (response).json()

                    
                    
                } catch (error) {
                    console.error();
                    throw new Error("Something went wrong with connection please try again later");

                }
            }
         
            dataFetch('http://localhost:3001/api/signup',
            {method: 'POST', 
            headers:{"content-type":"application/json"}, 
            body:JSON.stringify(formdatacapture)})


        
        //alert("Submited")

    }

    
    
    return (
        <div className="signup__container">
        <form onSubmit={onSubmithandler} className="form">
            
            <div className="form__group">
                <input type="text" onChange={(e:ChangeEvent<HTMLInputElement>): void => 
                {setFirstname(e.target.value)}} className="form__input" placeholder="First name" id="firstname" required/> 
                <input type="text" onChange={(e:ChangeEvent<HTMLInputElement>): void => 
                {setLastname(e.target.value)}} className="form__input" placeholder="Last name" id="lastname" required/>              
            </div>
            <div className="form__group">
                
                <input type="email" onChange={(e:ChangeEvent<HTMLInputElement>): void => 
                {setEmail(e.target.value)}} className="form__email" placeholder="Email" id="email" required/>                
           </div>
           <div className="form__group">
                
                <input type="password" onChange={(e:ChangeEvent<HTMLInputElement>): void => 
                {setPassword(e.target.value)}} className="form__input" placeholder="Password" id="password" required/>                 
           </div>
           <div className="form__group">
                
                <input type="password" onChange={(e:ChangeEvent<HTMLInputElement>): void => 
                {setConfirmpassword(e.target.value)}} className="form__input" placeholder="Confirm Password" id="confirmpassword" required/>                 
           </div>
           <div className="form__group">
           <input type="checkbox" onChange={(e:ChangeEvent<HTMLInputElement>): void => 
                {setAgecheckbox(e.target.checked)}} className="form__checkbox" placeholder="" id="agecheckbox" required/>   
           <label className="form__label">I certify that I am 18 years of age or older, and agree to the</label>
           </div>
            
            <div className="form__group">
            <input type="submit"  className="form__submit"/>
               {/* <button className="btn btn__sendit"> &nbsp; &nbsp; &nbsp; &nbsp; Sign-up &nbsp; &nbsp; &nbsp; &nbsp;</button> */}            
           </div>
            
        </form>
        </div>
    )
}


export default Signup
