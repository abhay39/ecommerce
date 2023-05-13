import React, { useContext, useEffect, useState } from 'react'
import "./list.css"
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'
import { Authinication } from '../../hooks/authState'

const ListingProducts = () => {
    const [products, setProducts] = useState([])
    const navigator=useNavigate()
    const {URL}=useContext(Authinication)

    const getData=async()=>{
        const response=await axios.get(`${URL}/products`)
        setProducts(response.data)
    }

    useEffect(()=>{
        getData()
    },[])

  return (
    <div className='top-con'>
        <h1>Mobiles</h1>
        <div className='displaying'>
            {
                products.map((item)=>{
                    return(
                        item.category=="Mobiles"?(<div className='products'>
                        <img src={item.image} height={200} width={230}/>
                        <h3 style={{marginTop:-15}}>{item.name.slice(0,15)}</h3>
                        <p style={{marginTop:-15,fontWeight:'bold'}}>{(item.price || "").toLocaleString('en-IN', {style: 'currency',currency: 'INR'})}</p>
                        <button id='addTo' style={{marginTop:-10,fontWeight:'bold'}} onClick={()=>{
                            
                        }}><Link style={{
                            textDecoration:'none',color:'white'
                        }} state={{
                            item:item._id
                        }} to={`/product/${item._id}` }>Add to cart</Link></button>
                    </div>):("")
                    )
                })
            }
        </div>

        <h1>Electronics</h1>
        <div className='displaying'>
            {
                products.map((item)=>{
                    return(
                        item.category=="Electronics"?(<div className='products'>
                        <img src={item.image} height={200} width={230}/>
                        <h3 style={{marginTop:-15}}>{item.name.slice(0,15)}</h3>
                        <p style={{marginTop:-15,fontWeight:'bold'}}>{(item.price || "").toLocaleString('en-IN', {style: 'currency',currency: 'INR'})}</p>
                        <button id='addTo' style={{marginTop:-10,fontWeight:'bold'}} onClick={()=>{
                            
                        }}><Link style={{
                            textDecoration:'none',color:'white'
                        }} state={{
                            item:item._id
                        }} to={`/product/${item._id}` }>Add to cart</Link></button>
                    </div>):("")
                    )
                })
            }
        </div>


        <h1>Appliances</h1>
        <div className='displaying'>
            {
                products.map((item)=>{
                    return(
                        item.category=="Appliances"?(<div className='products'>
                        <img src={item.image} height={200} width={230}/>
                        <h3 style={{marginTop:-15}}>{item.name.slice(0,15)}</h3>
                        <p style={{marginTop:-15,fontWeight:'bold'}}>{(item.price || "").toLocaleString('en-IN', {style: 'currency',currency: 'INR'})}</p>
                        <button id='addTo' style={{marginTop:-10,fontWeight:'bold'}} onClick={()=>{
                            
                        }}><Link style={{
                            textDecoration:'none',color:'white'
                        }} state={{
                            item:item._id
                        }} to={`/product/${item._id}` }>Add to cart</Link></button>
                    </div>):("")
                    )
                })
            }
        </div>

        <h1>Grocery</h1>
        <div className='displaying'>
            {
                products.map((item)=>{
                    return(
                        item.category=="Grocery"?(<div className='products'>
                        <img src={item.image} height={200} width={230}/>
                        <h3 style={{marginTop:-15}}>{item.name.slice(0,15)}</h3>
                        <p style={{marginTop:-15,fontWeight:'bold'}}>{(item.price || "").toLocaleString('en-IN', {style: 'currency',currency: 'INR'})}</p>
                        <button id='addTo' style={{marginTop:-10,fontWeight:'bold'}} onClick={()=>{
                            
                        }}><Link style={{
                            textDecoration:'none',color:'white'
                        }} state={{
                            item:item._id
                        }} to={`/product/${item._id}` }>Add to cart</Link></button>
                    </div>):("")
                    )
                })
            }
        </div>

        <h1>Fashion</h1>
        <div className='displaying'>
            {
                products.map((item)=>{
                    return(
                        item.category=="Fashion"?(<div className='products'>
                        <img src={item.image} height={200} width={230}/>
                        <h3 style={{marginTop:-15}}>{item.name.slice(0,15)}</h3>
                        <p style={{marginTop:-15,fontWeight:'bold'}}>{(item.price || "").toLocaleString('en-IN', {style: 'currency',currency: 'INR'})}</p>
                        <button id='addTo' style={{marginTop:-10,fontWeight:'bold'}} onClick={()=>{
                            
                        }}><Link style={{
                            textDecoration:'none',color:'white'
                        }} state={{
                            item:item._id
                        }} to={`/product/${item._id}` }>Add to cart</Link></button>
                    </div>):("")
                    )
                })
            }
        </div>
        
        <h1>Home</h1>
        <div className='displaying'>
            {
                products.map((item)=>{
                    return(
                        item.category=="Home"?(<div className='products'>
                        <img src={item.image} height={200} width={230}/>
                        <h3 style={{marginTop:-15}}>{item.name.slice(0,15)}</h3>
                        <p style={{marginTop:-15,fontWeight:'bold'}}>{(item.price || "").toLocaleString('en-IN', {style: 'currency',currency: 'INR'})}</p>
                        <button id='addTo' style={{marginTop:-10,fontWeight:'bold'}} onClick={()=>{
                            
                        }}><Link style={{
                            textDecoration:'none',color:'white'
                        }} state={{
                            item:item._id
                        }} to={`/product/${item._id}` }>Add to cart</Link></button>
                    </div>):("")
                    )
                })
            }
        </div>

        <h1>Appliances</h1>
        <div className='displaying'>
            {
                products.map((item)=>{
                    return(
                        item.category=="Appliances"?(<div className='products'>
                        <img src={item.image} height={200} width={230}/>
                        <h3 style={{marginTop:-15}}>{item.name.slice(0,15)}</h3>
                        <p style={{marginTop:-15,fontWeight:'bold'}}>{(item.price || "").toLocaleString('en-IN', {style: 'currency',currency: 'INR'})}</p>
                        <button id='addTo' style={{marginTop:-10,fontWeight:'bold'}} onClick={()=>{
                            
                        }}><Link style={{
                            textDecoration:'none',color:'white'
                        }} state={{
                            item:item._id
                        }} to={`/product/${item._id}` }>Add to cart</Link></button>
                    </div>):("")
                    )
                })
            }
        </div>

        <h1>Beauty</h1>
        <div className='displaying'>
            {
                products.map((item)=>{
                    return(
                        item.category=="Beauty"?(<div className='products'>
                        <img src={item.image} height={200} width={230}/>
                        <h3 style={{marginTop:-15}}>{item.name.slice(0,15)}</h3>
                        <p style={{marginTop:-15,fontWeight:'bold'}}>{(item.price || "").toLocaleString('en-IN', {style: 'currency',currency: 'INR'})}</p>
                        <button id='addTo' style={{marginTop:-10,fontWeight:'bold'}} onClick={()=>{
                            
                        }}><Link style={{
                            textDecoration:'none',color:'white'
                        }} state={{
                            item:item._id
                        }} to={`/product/${item._id}` }>Add to cart</Link></button>
                    </div>):("")
                    )
                })
            }
        </div>

        <h1>Two Wheelers</h1>
        <div className='displaying'>
            {
                products.map((item)=>{
                    return(
                        item.category=="Two Wheelers"?(<div className='products'>
                        <img src={item.image} height={200} width={230}/>
                        <h3 style={{marginTop:-15}}>{item.name.slice(0,15)}</h3>
                        <p style={{marginTop:-15,fontWeight:'bold'}}>{(item.price || "").toLocaleString('en-IN', {style: 'currency',currency: 'INR'})}</p>
                        <button id='addTo' style={{marginTop:-10,fontWeight:'bold'}} onClick={()=>{
                            
                        }}><Link style={{
                            textDecoration:'none',color:'white'
                        }} state={{
                            item:item._id
                        }} to={`/product/${item._id}` }>Add to cart</Link></button>
                    </div>):("")
                    )
                })
            }
        </div>
        

    </div>
  )
}

export default ListingProducts