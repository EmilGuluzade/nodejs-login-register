import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import "./Login.css"
import  axios from "axios"
const Login = () => {
   
const [email,setEmail]=useState("") 
const [password,setPassword]=useState("") 

const handleSubmit=(e)=>{
e.preventDefault()

axios.post("http://localhost:8080/login",{email,password})
.then(res=>{console.log(res)
    if(res.data=="succsess"){
navigate("/login")
    }
})
.catch(err=>console.log(err))
}
  return (
    <>

<div className="container">
        <div className="login-box">
            <h2>Login</h2>
            <form action="#" onSubmit={handleSubmit}>
                
                <div className="input-box">
                <input  onChange={(e)=>setEmail(e.target.value)}  type="email" required/>
                <label>Email</label>
            </div>
            <div className="input-box">
                <input  onChange={(e)=>setPassword(e.target.value)}  type="password" required/>
                <label>Password</label>
            </div>
                <button type="submit" className="btn">Login</button>
                <div className="signup-link">
                    <p>Have no account yet? <Link to="/register">Signup</Link></p>
                </div>
            </form>
        </div>

        
    </div>
    </>
  )
}

export default Login