import React, { useContext, useEffect, useState } from 'react'
import "./product.css"
import TopNav from "../header/TopNav"
import { useLocation, useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'
import { Authinication } from '../../hooks/authState'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ProductPage = () => {

    const {URL}=useContext(Authinication)
    // alert(URL)

    const [products, setProducts] = useState([])
    const location=useLocation()
    const id=location.state?.id;
    const d=useParams()
    const finalID=d.id;

    const getData=async()=>{
        const response=await axios.get(`${URL}/products/${finalID}`)
        // console.log(response.data)
        setProducts(response.data)
    }

    const navigate=useNavigate()

    const {user,setUser,data,setData,cartItem,setCartItem}=useContext(Authinication)
    
    
    const setState=()=>{
        localStorage.setItem("userState",user)
        localStorage.setItem("userData",data)
    }
    const removeState=()=>{
        localStorage.clear()
    }

    useEffect(()=>{
        getData()
        setState()
    },[])

    const handleAdd=async(item)=>{
        axios.post(`http://localhost:5000/addCart`,{
            itemID:finalID,
            name:item.name,
            category:item.category,
            price:item.price,
            image:item.image,
            addedBy:data._id
        }).then(response => {
            console.log(response.data);
            if(response.status==200){ 
                toast.success("Added Successfully")
            }
        })
        .catch(error => {
            if (error.response) {
                toast.error(error.response.data);
            }
            else if (error.request) {
                toast.error(error.request);
            }
            else {
                toast.error(error.message);
            }
        });       
    }
    

  return (
    <div className='mainC'>
        <div className='topp'>
            <TopNav />
            <ToastContainer />
        </div>
        <h1>{products.category}</h1>
        <div className='ppd'>
            {/* left side */}
            <div>
                <div className='imgBOX'>
                    <img id='pp' src={products.image} alt='Image'/>
                </div>
                <div className='supButton'>
                    <button onClick={()=>{
                        handleAdd(products)
                    }}>Add to Cart</button>
                    <button>Buy Now</button>
                </div>
            </div>
            {/* right side */}
            <div>
                <p>{products.category}</p>
                <h2>{products.name}</h2>
                <h4>{(products.price || "").toLocaleString('en-IN', {
            style: 'currency',
            currency: 'INR'
        })}</h4>
                {products.stock>0?(<p style={{
                    color:'green',
                    fontWeight:'700'
                }}>In Stock</p>):(<p style={{
                    color:'red',
                    fontWeight:'700'
                }}>Not in Stock</p>)}
                <div>
                    <input id="email" placeholder='Enter your pin code'/>
                    <button>Search</button>
                </div>
                <p style={{
                    textAlign:'justify',
                    width:'80%'
                }}>{products.desc}</p>
            </div>
        </div>

    </div>
  )
}

export default ProductPage