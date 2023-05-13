import React, { useContext, useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Authinication } from '../../hooks/authState';
import {useNavigate} from 'react-router-dom'

const UpdateProfile = () => {

    const navigate=useNavigate()
    const {user,setUser,data,setData}=useContext(Authinication)
   
    const id=data._id

    const [image,setImage]=useState(data.image)
    const [name,setName]=useState(data.name)
    const [email,setEmail]=useState(data.email)
    const [password,setPassword]=useState(data.password)
    const [mobile,setMobile]=useState(data.mobile)



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
        const res=await fetch("http://localhost:5000/updateAccount",{
            method:"PUT",
            headers:{
            "Content-Type":"application/json",
            "Accept":"application/json",
            "Access-Control-Allow-Origin":"*"
            },
            body:JSON.stringify({name,email,password,mobile,image,id})
        })
        const data=await res.status
        const result=await res.text()
        console.log(data)
        if(data===200){
            toast.success("Successfully Updated the profile")
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
                <h3 id="signin">Update Account</h3>
                <p id='p'>Update Your account for free</p>
                <div className='formBox'>
                    <form>
                        <div className='details'>
                            <label>Username</label>
                            <input onChange={(e)=>setName(e.target.value)} type='text' value={name} id='email' placeholder='Enter your unique username' />
                        </div>
                        <div className='details'>
                            <label>Email Address</label>
                            <input onChange={(e)=>setEmail(e.target.value)} type='email' value={email} id='email' placeholder='Email' />
                        </div>
                        <div className='details'>
                            <label>Password</label>
                            <input onChange={(e)=>setPassword(e.target.value)} type='password' value={password} id='email' placeholder='password' />
                        </div>
                        <div className='details'>
                            <label>Mobile</label>
                            <input  onChange={(e)=>setMobile(e.target.value)} type='number' value={mobile} id='email' placeholder='Enter your 10 digit mobile number' />
                        </div>
                        
                        <div className='details'>
                            <label>Profile Pic</label>
                            <input onChange={convertToBase} type='file' id='email'  accept='image/*' />
                        </div>
                        <button onClick={updateAccount} id="sign">Update</button>
                    </form>
                    <ToastContainer />
                </div>
            </div>
        </div>
    </div>
  )
}

export default UpdateProfile