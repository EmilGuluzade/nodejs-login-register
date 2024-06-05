import React from 'react'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import "./Signup.css"
import axios from "axios"

const Signup = () => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()

        axios.post("http://localhost:8080/register", { name, email, password })
            .then(res => {
                console.log(res)
                navigate("/login")
            })
            .catch(err => console.log(err))
    }
    return (
        <div><div className="container">
            <div className="login-box">
                <h2>Signup</h2>
                <form action="#" onSubmit={handleSubmit}>
                    <div className="input-box">
                        <input onChange={(e) => setName(e.target.value)} type="text" required />
                        <label>Name</label>
                    </div>
                    <div className="input-box">
                        <input onChange={(e) => setEmail(e.target.value)} type="email" required />
                        <label>Email</label>
                    </div>
                    <div className="input-box">
                        <input onChange={(e) => setPassword(e.target.value)} type="password" required />
                        <label>Password</label>
                    </div>
                    <div className="forgot-pass">
                        <a href="#">Forgot your password?</a>
                    </div>
                    <button type="submit" className="btn">Register</button>
                    <div className="signup-link">
                        <p>Have  account already? <Link to="/login">Login</Link></p>
                    </div>
                </form>
            </div>


        </div></div>
    )
}

export default Signup