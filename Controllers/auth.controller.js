import { Router } from "express";
import { FoodyItems } from "../Models/auth.model.js";
import foodyData from "../Foodie.json" assert {type:"json"};

const router=Router();


router.get('/',async(req,res)=>{
    const insertData=await FoodyItems.create(foodyData);

    if(insertData){
        console.log("data inserted into table");
    }
    // res.status(200).json({msg:"hello how are you"});
})


router.get('/one',async(req,res)=>{
    const data=await FoodyItems.find();
    res.status(200).json({msg:data});
})




export const authFetch=router;
export const authData=router;