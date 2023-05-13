import React, { useContext, useEffect, useLayoutEffect, useState } from 'react'
import "./topnav.css"
import { BsSearch } from 'react-icons/bs';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { Authinication } from '../../hooks/authState';
import { Link,useNavigate } from 'react-router-dom';



const TopNav = () => {
    const navigate=useNavigate()

    const {user,setUser,data,setData,cartItem,setCartItem}=useContext(Authinication)
    
    const [totalItems,setTotalItems]=useState([])
    

    const setState=()=>{
        localStorage.setItem("userState",user)
    }

    const removeState=()=>{
        localStorage.clear()
    }

    useLayoutEffect(()=>{
        setState()
    },[])

    const getCart=()=>{
        if(user){
            fetch('http://localhost:5000/cart')
            .then(res=>res.json())
            .then(data=>{
                setTotalItems(data)
            })
        }
    }

    useEffect(()=>{
        getCart()
    })

    let local=[]

    totalItems.map((item)=>{
        if(item.addedBy==data._id){
            local.push(item)
        }
    })
    // alert(local.length)
    // console.log(local)

    // console.log(local.length)

  return (
    <div className='container'>
        <div className='top-cont'>
            <div className='items'>

                <div id='logo'>
                    <img loading='lazy' src={require("../../images/flipkart.png")} height={20} width={"100%"}/>
                    <p id='join'>Join Plus</p>
                </div>

                <div className='search'>
                    <input id='se' placeholder='Search for products, brands and more'/>
                    <BsSearch size={15} id='searchIcon' color='#2874f0'/>

                </div>
                <div class="dropdown">
                    <button id="uName">{data.name}</button>
                    <div class="dropdown-options">
                        
                        <p id="optiosn" onClick={()=>{
                        navigate("/update")
                    }} style={{fontWeight:'bold',fontSize:16,cursor:'pointer',color:'black'}}>Profile Update</p>
                        
                        <p id="optiosn" onClick={()=>{
                        navigate("/update")
                    }} style={{fontWeight:'bold',fontSize:16,cursor:'pointer',color:'black'}}>Dashboard</p>
                        
                        <p id="optiosn" onClick={()=>{
                        removeState()
                        setUser(false)
                        navigate("/")
                    }} style={{fontWeight:'bold',fontSize:16,cursor:'pointer',color:'black'}}>Logout</p>

                    </div>
                </div>
                
                {data.isAdmin?(<p onClick={()=>{
                    navigate("/addProduct")
                }} style={{fontWeight:'bold',fontSize:16,cursor:'pointer'}}>Add Product</p>):("")}

                <div className='more'>
                    <select>
                        <option value=''>More</option>
                        <option value='1'>Notifications Preference</option>
                        <option value='2'>24X7 Customer Service</option>
                        <option value='3'>Advertise</option>
                        <option value='4'>Download App</option>
                        
                    </select>
                </div>

                <div className='cart' onClick={()=>{
                    navigate("/cartPage")
                }}>
                    <AiOutlineShoppingCart size={20} style={{marginRight:10}}/>
                    <p style={{
                        
                    }}>Cart</p>
                    <p style={{
                                backgroundColor:'red',
                                padding:2,
                                borderRadius:20,
                                width:20,
                                fontSize:15,
                                marginTop:10,
                                textAlign:'center'
                    }}>{local.length}</p>
                </div>
                
            </div>
        </div>
    </div>
  )
}

export default TopNav