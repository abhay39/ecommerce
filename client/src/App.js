import React, { useEffect, useState } from 'react'
import Dashboard from './components/Dashboard'
import Login from './components/screens/Login'
import SignUp from './components/screens/SignUp'
import { BrowserRouter, Routes,Route } from 'react-router-dom'
import { Authinication } from './hooks/authState'
import UpdateProfile from './components/screens/UpdateProfile'
import AddProduct from './components/screens/AddProduct'
import ProductPage from './components/screens/ProductPage'
import CartPage from './components/screens/CartPage'
import OrderNow from './components/screens/OrderNow'
import { RequireAuth } from 'react-auth-kit'

const App = () => {
  const [user,setUser]=useState(false)
  const [data,setData]=useState("")
  const [cartItem,setCartItem]=useState([]);
  const URL="http://localhost:5000"

  const getData=()=>{
    const le=localStorage.getItem("userState")
    if(le){
      setUser(JSON.parse(le))
    }
    else{
      setUser(false)
    }
  }
  
  useEffect(()=>{
    getData()
  })
 
  return (
    <Authinication.Provider value={{user, setUser,data,setData,URL,cartItem,setCartItem}}>
      <BrowserRouter>
      <div>
        <Routes>
          {user?
          (
            <>
              <Route path='/' element={<Dashboard />} />
              <Route path='/update' element={<UpdateProfile />} />
              <Route path='/addProduct' element={<AddProduct />} />
              <Route path='/product/:id' element={<ProductPage />} />
              <Route path='/cartPage' element={<CartPage />} />
              <Route path='/order' element={<OrderNow />} />
            </>
          ):
          (
            <>
              <Route path='/' element={<Login />} />
              <Route path='/signup' element={<SignUp />} />
            </>
          )}
          {/* <Route path='/' element={<RequireAuth loginPath='/login'><Dashboard /></RequireAuth>} />
          <Route path='/login' element={<Login />} /> */}
          
        </Routes>
        
      </div>
    </BrowserRouter>
    </Authinication.Provider>
  )
}

export default App