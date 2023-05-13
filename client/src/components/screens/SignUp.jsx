import React, { useEffect, useState } from 'react'
import "./signup.css"
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { BsApple } from 'react-icons/bs';
import { FcGoogle } from 'react-icons/fc';

const SignUp = () => {
  const navigate=useNavigate()
    const [image,setImage]=useState("")
    const [name,setName]=useState("")
    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")
    const [mobile,setMobile]=useState()

    const notify = () => {
        
    };

    const convertToBase=(e)=>{
        console.log(e)
        const reader = new FileReader()
        reader.readAsDataURL(e.target.files[0])
    
        reader.onload=()=>{
          setImage(reader.result)
          console.log(reader.result)
        }
      }
    
      const uploadToMongo=async(e)=>{
        e.preventDefault()
        const res=await fetch("http://localhost:5000/create",{
          method:"POST",
          headers:{
            "Content-Type":"application/json",
            "Accept":"application/json",
            "Access-Control-Allow-Origin":"*"
          },
          body:JSON.stringify({name,email,password,mobile,image})
        })
        const data=await res.status
        const d=await res.text()
        console.log(data)
        if(data===200){
          toast.success(d)
          setTimeout(()=>{
            navigate("/")
          },3000)
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
                <h3 id="signin">Sign Up</h3>
                <p id='p'>Create Your account for free</p>
                <div className='formBox'>
                    <form>
                        <div className='details'>
                            <label>Username</label>
                            <input onChange={(e)=>setName(e.target.value)} type='text' id='email' placeholder='Enter your unique username' />
                        </div>
                        <div className='details'>
                            <label>Email Address</label>
                            <input onChange={(e)=>setEmail(e.target.value)} type='email' id='email' placeholder='Email' />
                        </div>
                        <div className='details'>
                            <label>Password</label>
                            <input onChange={(e)=>setPassword(e.target.value)} type='password' id='email' placeholder='password' />
                        </div>
                        <div className='details'>
                            <label>Mobile</label>
                            <input  onChange={(e)=>setMobile(e.target.value)} type='password' id='email' placeholder='Enter your 10 digit mobile number' />
                        </div>
                        <div className='details'>
                            <label>Profile Pic</label>
                            <input onChange={convertToBase} type='file' id='email' accept='image/*' />
                        </div>
                        <button onClick={uploadToMongo} id="sign">Sign Up</button>
                    </form>
                    <div className='reg'>
                    <p id='sim'>Already have an account?&nbsp;</p>
                    <p id='register'>Login here</p>
                </div>
                </div>

                
            </div>
        </div>
    </div>
  )
}

export default SignUp