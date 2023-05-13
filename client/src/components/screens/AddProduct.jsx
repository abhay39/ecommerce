import React, { useContext, useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Authinication } from '../../hooks/authState';
import {useNavigate} from 'react-router-dom'

const AddProduct = () => {

    const navigate=useNavigate()
    const {user,setUser,data,setData}=useContext(Authinication)
   
    const addedBy=(data._id)
    const [image,setImage]=useState("")
    const [name,setName]=useState("")
    const [price,setPrice]=useState(0)
    const [desc,setDesc]=useState("")
    const [stock,setStock]=useState(10)
    const [category, setCategory]=useState("")


    const convertToBase=(e)=>{
        console.log(e)
        const reader = new FileReader()
        reader.readAsDataURL(e.target.files[0])
    
        reader.onload=()=>{
          setImage(reader.result)
          console.log(reader.result)
        }
      }

    const updateAccount=async(e)=>{
        e.preventDefault()
        const res=await fetch("http://localhost:5000/addProduct",{
            method:"POST",
            headers:{
            "Content-Type":"application/json",
            "Accept":"application/json",
            "Access-Control-Allow-Origin":"*"
            },
            body:JSON.stringify({name,price,desc,stock,category,addedBy,image})
        })
        const data=await res.status
        const result=await res.text()
        console.log(data)
        if(data===200){
            toast.success("Product Added successfully.")
            setTimeout(()=>{
                navigate("/")
            },5000)
        }
        else{
            toast.error(data)
        }
    }



  return (
    <div className='login-container'>

        <div className='title'>
        <div style={{display:'flex',flexDirection:'column',alignItems:'center'}}>

        {image=="" || image==null?(<img src={require("../../images/user.gif")} height={200} width={200} style={{borderRadius:200}}/>):(<img src={image} height={200} width={200} style={{borderRadius:200,objectFit:'cover'}}/>)}
            <h1>Flipkart.</h1>
        </div>
            
        </div>

        <div className='login'>
            <div className='login-it'>
                <h3 id="signin">Add Product</h3>
                
                <div className='formBox'>
                    <form>
                        <div className='details'>
                            <label>Product Name</label>
                            <input onChange={(e)=>setName(e.target.value)} type='text' id='email' placeholder='Enter product name' />
                        </div>
                        <div className='details'>
                            <label>Product Price</label>
                            <input onChange={(e)=>setPrice(e.target.value)} type='number'  id='email' placeholder='Price' />
                        </div>
                        <div className='details'>
                            <label>Descriptions</label>
                            <input onChange={(e)=>setDesc(e.target.value)} type='text' id='email' placeholder='description of product' />
                        </div>
                        <div className='details'>
                            <label>In Stock</label>
                            <input  onChange={(e)=>setStock(e.target.value)} type='number'  id='email' placeholder='Enter stock of product' />
                        </div>
                        <div className='details'>
                            <select onChange={(e)=>setCategory(e.target.value)}>
                                <option>Product Category</option>
                                <option value="Grocery">Grocery</option>
                                <option value="Mobiles">Mobiles</option>
                                <option value="Fashion">Fashion</option>
                                <option value="Electronics">Electronics</option>
                                <option value="Home">Home</option>
                                <option value="Appliances">Appliances</option>
                                <option value="Travel">Travel</option>
                                <option value="Top Offers">Top Offers</option>
                                <option value="Beauty">Beauty</option>
                                <option value="Two Wheelers">Two Wheelers</option>
                            </select>
                        </div>
                        <div className='details'>
                            <label>Product Thumbnail</label>
                            <input onChange={convertToBase} type='file' id='email'  accept='image/*' />
                        </div>
                        <button onClick={updateAccount} id="sign">Add Product</button>
                    </form>
                    <ToastContainer />
                </div>
            </div>
        </div>
    </div>
  )
}

export default AddProduct