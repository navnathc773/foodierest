import mongoose from "mongoose";

const connect = mongoose.connect("mongodb://localhost:27017/Foody");

connect
  .then(() => {
    console.log("connected successfully");
  })
  .catch((err) => {
    console.error("connection failed", err);
  });

const createSchema = new mongoose.Schema({
  id:{
    type:Number,
    required:true,
    unique:true,
  },
  src: {
    type: String,
    required: true,
  },
  name: {
    type:String,
    required:true,
  },
  Description:{
    type:String,
    required:true,
  },
  price:{
    type:String,
    required:true,
  }
});

export const FoodyItems = mongoose.model("foodyitems", createSchema);

