import express, {Request, Response, NextFunction} from "express";
import {check, validationResult} from "express-validator"

import httpError from "../models/httperrors"
import {signup, login} from "../controllers/usercontroller";


const router = express.Router()

router.post("/signup", 
 [check('firstname').isLength({min:3}),
 check('lastname').isLength({min:3}),
 check('email').normalizeEmail().isEmail(),
 check('password').isLength({min:8})], 
  signup)

router.post("/login", 
check('email').normalizeEmail().isEmail().withMessage("must be an email"),
check('password').isLength({min:6}).withMessage("must be six or more character"),  

login)

export default router