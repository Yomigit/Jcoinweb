import express from "express";
import { Mongoose } from "mongoose";
import {mpost} from "../controllers/controller";

const router = express.Router()

router.post("/mpost", mpost)

export default router