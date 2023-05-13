import mongoose from "mongoose";

const Products=new mongoose.Schema({
    name:{
        type:String,
        required:true,
        unique:true
    },
    price:{
        type:Number,
        required:true,
    },
    desc:{
        type:String,
        required:true
    },
    stock:{
        type:Number,
        required:true
    },
    addedBy:{
        type:String,
        required:true
    },
    category:{
        type:String,
        required:true
    },
    image:{
        type:String,
    }
},{timestamps:true})

export default mongoose.model("Product",Products)