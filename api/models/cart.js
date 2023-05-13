import mongoose from "mongoose";

const Carts=new mongoose.Schema({
    itemID:{
        type:String,
        required:true,
    },
    addedBy:{
        type:String,
        required:true,
    },
    name:{
        type:String,
        required:true,
        unique:true
    },
    price:{
        type:Number,
        required:true,
    },
    category:{
        type:String,
        required:true
    },
    image:{
        type:String,
    }
},{timestamps:true})

export default mongoose.model("Cart",Carts)