import React, { useState } from 'react'
import axios from 'axios'
export default function Register() {
  const [username,Setusername] = useState('')
  const [password,Setpassword] = useState('')
  const HandleSubmit = async ()=>{
    try {
      const res = axios.post('http://localhost:5000/api/auth/login',{
        username,
        password
      })
      const data = JSON.stringify(res)
      console.log(data)
      alert('Logged in successfully!')
      window.location.replace('/home')
    } catch (error) {
      const err = JSON.stringify(error)
      console.log(err)
      alert('Invalid Username or Password')
    }
  }
  return (
    <>
    <div className=' flex flex-col h-screen justify-center items-center bg-[#FFFDD0] gap-5'>
        <h1 className=' text-3xl font-mono'>Login</h1>
        <div className=' rounded-3xl bg-teal-500 h-96 lg:w-96 w-80 p-5 flex flex-col justify-center gap-10'>
            <input type="username" placeholder=' username' className=' p-2 outline-none bg-teal-100 border-b-2 border-b-slate-600 text-black rounded-3xl' onChange={(e)=>{
             Setusername(e.target.value) 
            }} />
            <input type="password" placeholder=' password' className=' p-2 outline-none bg-teal-100 border-b-2 border-b-slate-600 text-black rounded-3xl' onChange={(e)=>{
              Setpassword(e.target.value)
            }} />
            <button className=' px-1 py-2 bg-teal-700 w-36 hover:bg-teal-800 ml-24 rounded-xl' onClick={HandleSubmit}>Login</button>
        </div>
        <h1 className=' text-3xl font-mono'>Not Registered?</h1> 
       <a href="/register" className=' text-3xl font-mono hover:text-teal-800'>Click here!</a>
    </div>
    </>
  )
}
