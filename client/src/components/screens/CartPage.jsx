import React, { useContext, useEffect, useState } from 'react'
import TopNav from "../header/TopNav"
import { Authinication } from '../../hooks/authState'
import "./cart.css"
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const CartPage = () => {
    const {user,setUser,cartItem,setCartItem,URL,data,setData}=useContext(Authinication)
    const [cartItemsHere,setCartItemHere]=useState([])

    const getData=async()=>{
        const response=await axios.get(`${URL}/cart`)
        setCartItemHere(response.data)
    }

    const deleteItem=async(item)=>{
        const response=await axios.post(`${URL}/cartDelete`,{
            id:item._id
        })
        if(response.status==200){
            toast.success("Successfully Deleted")
        }
    }
    useEffect(()=>{
        getData()
    })

    let all=[]
    let sumofAll=0;
    cartItemsHere.map((item)=>{
        if(item.addedBy==data._id){
            all.push(item)
            sumofAll+=item.price;
        }
    })

  return (
    <div>
        <TopNav />
        <ToastContainer />
        <div style={{display:'flex',alignContent:'center',justifyContent:'space-evenly'}}>
        <div>
                <table>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Category</th>
                            <th>Price</th>
                            <th>Image</th>
                            <th>Status</th>
                        </tr>
                    </thead>
            {all.length>=0?(all.map((item,index)=>{
                return(
                    <>
                        <tbody>
                            <tr>
                                <td>{index+1}</td>
                                <td>{item.name.slice(0,50)}</td>
                                <td>{item.category}</td>
                                <td><p style={{marginTop:-15,fontWeight:'bold'}}>{(item.price || "").toLocaleString('en-IN', {style: 'currency',currency: 'INR'})}</p></td>
                                <td><img src={item.image} alt='pr' style={{
                                    height:80,
                                    width:80,
                                }}/></td>
                                <td>
                                <button class="cssbuttons-io-button"> Order now
  <div class="icon">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"></path><path fill="currentColor" d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z"></path></svg>
  </div>
</button>
                                    <p style={{textAlign:'center'}}>or</p>
                                    <button onClick={()=>{
                                        deleteItem(item)
                                    }}>Delete</button>
                                </td>
                            </tr>
                        </tbody>
                    </>
                )
            })):("No")}
            </table>
        </div>
        <div>
            <div style={{backgroundColor:'red',padding:20,color:'white',borderRadius:30}}>
                <h1>Total Items:{all.length}</h1>
                <p style={{marginTop:-15,fontWeight:'bold'}}>Total Rs.: {(sumofAll || "").toLocaleString('en-IN', {style: 'currency',currency: 'INR'})}</p>
            </div>
        </div>
        </div>
    </div>
  )
}

export default CartPage