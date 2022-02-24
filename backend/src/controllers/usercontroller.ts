import express, {RequestHandler } from "express"
import {validationResult} from "express-validator"


import httpError from "../models/httperrors"
import userCollection from "../models/usermodel"

   
      
    
const signup: RequestHandler = async (req, res, next) => {

  // Handle Errors that come from validation
  const errors = validationResult(req)
  if(!errors.isEmpty()) {
        console.log("Error: Invalid input", errors.array())       
        return res.json("Invalid input Please Check your input!")
     }

     let currentUser: any

     const {email, password} = req.body   

     try { 
         currentUser = await userCollection.findOne({email: email}) 
          
         // checking findone is successful
          if(currentUser) {            
            console.log("Result: ", currentUser)          
          }           
          
     }
     // catch error
     catch(err) {
        console.log(err)
         const error = new httpError("Error occured Try later", "512")          
          return next(error)
     }

     if(currentUser) {
          const error = new httpError("User already exist", "513")
          return next(error)
     } 

      const usersignup = new userCollection({
      firstname:req.body.firstname,
      lastname:req.body.lastname,
      email:req.body.email,
      password:req.body.password 
      }) 
          
      
      try {
        await usersignup.save()
        
      }
      catch(err) {
        console.log(err);        
        const error = new httpError("Signing up failed", "514")          
        return next(error)
      }            
      
     //res.json({message: usersignup}) 
     res.json({message: "Registration was successful"}) 
} 

  const login : RequestHandler = async (req, res, next) => {
    const errors = validationResult(req)
    if(!errors.isEmpty()) {
        
        console.log("Error: Invalid input", errors.array())       
      return res.json("Invalid input Please Check your input!")
      
      //return res.json({errors:errors.array()})
    }
      const {email, password} = req.body

      let  currentUser: any    
         
      try {
        currentUser =  await userCollection.findOne({email: email}) 
      }
      catch(err) {
        console.log(err)
        const error = new httpError("Error occured Try later", "512")          
         return next(error)
      }
       
        
    if(!currentUser && currentUser.password !== password) {              
        console.log("Wrong credentials!");        
          const error = new httpError("Wrong credentials!", "515")         
          return next(error)              
    } 

    /* else {
              res.json({error: "Wrong credentials!"})
              console.log("Wrong credentials!")              
            } */

       // }).catch((err => {console.log("Catch Error is : ", err)}))

        res.json(currentUser)              
        console.log("Result: ", currentUser)

  }
  
  export {signup, login}