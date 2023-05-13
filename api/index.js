import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import cors from 'cors'
import User from './models/users.js'
import Product from './models/products.js'
import Cart from './models/cart.js'
import bodyParser from 'body-parser'
import jwt from 'jsonwebtoken'

dotenv.config()

const PORT=process.env.PORT || 8000;
const MONGO_URI=process.env.MONGO_URI;

const connect =async()=>{
    try{
        await mongoose.connect(MONGO_URI,{
            useNewUrlParser:true,
            useUnifiedTopology:true
        });
        console.log("Connected to mongoDB")
    }catch(error){
        throw error
    }
}

mongoose.connection.on("disconnected",()=>{
    console.log("mongoDB Disconnected")
})
mongoose.connection.on("connected",()=>{
    console.log("mongoDB connected")
})

const app=express()
app.use(express.json({limit:'50mb'}))
app.use(cors())



app.get("/",(req,res)=>{
    res.json("Hey welcome dude")
})



app.post("/create",async(req,res)=>{
    const data=req.body;
    try{
        const user=new User(data);

        user.save().then((data)=>{
            res.status(200).send("Successfully Created an account")
        })

    }catch(err){
        throw err;
    }
    res.status(200)
})

app.post("/login",async(req,res)=>{
    const data=req.body
    try{
        const user=await User.findOne({
            name:data.username,
            password:data.password,
        })
        {user?(res.status(200).json(user)):(res.status(404).send("User not found"))}       
    }catch(err){
        console.log(err)
    }
})

app.put("/updateAccount",async(req,res)=>{
    const data=req.body;
    const update=await User.findByIdAndUpdate({
        _id:data.id
    },{
        $set:{
            name:data.name,
            email:data.email,
            password:data.password,
            mobile:data.mobile,
            image:data.image,
        }
    })
    {update?(res.status(200).json(update)):(res.status(404).json("No data found"))}
    // console.log(data.id)
    // res.status(200)
})

app.post("/addProduct",(req,res)=>{
    const data=req.body;
    try{
        const product=new Product(data);
        product.save().then((data)=>{
            res.status(200).json(data)
        })
    }catch(err){
        throw err;
    }
    res.status(200)
    // console.log(data)
})

app.post("/addCart",(req,res)=>{
    const data=req.body;
    try{
        const product=new Cart(data);
        product.save().then((data)=>{
            res.status(200).json("Successfully Added the item.")
        })
    }catch(err){
        throw err;
    }
    res.status(200)
    // console.log(data)
})

app.get("/cart",(req,res)=>{
    Cart.find().then((data)=>{
        res.status(200).json(data)
    })
})

app.post("/cartDelete",(req,res)=>{
    const id=req.body.id;
    Cart.findByIdAndDelete({_id:id}).then((data)=>{
        res.status(200).json("Successfully Deleted")
    })
})

app.get("/products",(req,res)=>{
    Product.find().then((data)=>{
        res.status(200).json(data)
    })
})

app.get("/products/:id",(req,res)=>{
    const id=req.params.id;
    Product.findById(id).then((data)=>{
        res.status(200).json(data)
    })
})

app.listen(PORT,()=>{
    connect()
    console.log(`server is running on port ${PORT}`)
})