import express from "express";
import { authData, authFetch } from "./Controllers/auth.controller.js";
import dotenv from "dotenv";

dotenv.config();

const app=express();

const PORT = process.env.PORT || 3000;

app.use(express.json());

app.use('/',authData);

app.use('/getAll',authFetch);


app.listen(PORT,()=>{
    console.log(`Server is listening on PORT ${PORT}`);
})