import React, { useState } from 'react'
import axios from 'axios'
export default function Register() {
    const [email,Setemail] = useState('')
    const [username,Setusername] = useState('')
    const [password,Setpassword] = useState('')
    const handleSubmit = async ()=>{
     try {
      const res = await axios.post('http://localhost:5000/api/auth/register',{
        email,
        username,
        password,   
      })
      const data = JSON.stringify(res.data)
      alert(data)
      data && window.location.replace('/login')
     } catch (error) {
      const err = JSON.stringify(error)
      alert('Username already taken')
     }
    }
  return (
    <>
    <div className=' flex flex-col h-screen justify-center items-center bg-[#FFFDD0] gap-5'>
        <h1 className=' text-3xl font-mono'>Register</h1>
        <div className=' rounded-3xl bg-teal-500 h-96 lg:w-96 w-80 p-5 flex flex-col justify-center gap-10'>
            <input type="email" placeholder=' Email' className=' p-2 outline-none bg-teal-100 border-b-2 border-b-slate-600 text-black rounded-3xl' onChange={(e)=>{Setemail(e.target.value)}} />
            <input type="username" placeholder=' username' className=' p-2 outline-none bg-teal-100 border-b-2 border-b-slate-600 text-black rounded-3xl' onChange={(e)=>{Setusername(e.target.value)}}  />
            <input type="password" placeholder=' password' className=' p-2 outline-none bg-teal-100 border-b-2 border-b-slate-600 text-black rounded-3xl' onChange={(e)=>{Setpassword(e.target.value)}}  />
            <button className=' px-1 py-2 bg-teal-700 w-36 hover:bg-teal-800 ml-24 rounded-xl' onClick={handleSubmit}>Signup</button>
        </div>
        <h1 className=' text-3xl font-mono'>Registered?</h1> 
       <a href="/login" className=' text-3xl font-mono hover:text-teal-800'>Login!</a>
    </div>
    </>
  )
}
