import React, { useContext, useEffect, useState } from 'react'
import "./login.css"
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { BsApple } from 'react-icons/bs';
import { FcGoogle } from 'react-icons/fc';
import { Authinication } from '../../hooks/authState';
import {useSignIn} from 'react-auth-kit'

const Login = () => {
    const {user,setUser,data,setData}=useContext(Authinication)

    const signIn=useSignIn()

    const [username,setUsername]=useState(null)
    const [password,setPassword]=useState(null)

    const notify = (item) => {
        toast.success("Successfully Logged In.") 
        setTimeout(()=>{
            setUser(true)
            setData(item.data)
        },3000)
    };

    const signInNow=async(e)=>{
        e.preventDefault()
        axios.post(`http://localhost:5000/login`,{
            username,
            password,
        }).then(response => {
            signIn({
                token:response.data._id,
                tokenType:"Bearer",
                expiresIn:3600,
                authState:({id:response.data._id})
            })
            console.log(response.data);
            if(response.status==200){ 
                notify(response)
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
    <div className='login-container'>
        <div className='title'>
            <h1>Flipkart</h1>
        </div>
        <div className='login'>
            <div className='login-it'>
                <h3 id="signin">Sign In</h3>
                <div className='formBox'>
                    <form>
                        <div className='details'>
                            <label>Username</label>
                            <input onChange={(e)=>setUsername(e.target.value)} type='text' id='email' placeholder='Email' />
                        </div>
                        <div className='details'>
                            <label>Password</label>
                            <input onChange={(e)=>setPassword(e.target.value)} type='password' id='email' placeholder='password' />
                        </div>
                        <p id='forget'>Forgot password?</p>
                        <button onClick={signInNow} id="sign">Sign In</button>
                    </form>
                </div>

                <div className='reg'>
                    <p id='sim'>Don't have an account?&nbsp;</p>
                    <p id='register'><Link to={'signup'}>Register here</Link></p>
                </div>
                <ToastContainer />
            </div>
        </div>
    </div>
  )
}

export default Login