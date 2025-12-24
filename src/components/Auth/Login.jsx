import React, { useState } from "react";

const Login = ({handelLogin}) => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const submitHandeler = (e) =>{
    e.preventDefault()
    handelLogin(email,password)
    console.log('Form is submitted successfully!!')
    console.log('This is Your Email :', email)
    console.log('This is Your Password :', password)
    setEmail('')
    setPassword('')
  }
  return (
    <div className="flex h-screen w-screen items-center justify-center ">
      <div className="border-2 border-amber-700 rounded-xl p-8 shadow-lg  w-[350px]">
        <form onSubmit={(e) =>{
          submitHandeler(e)
        }} className="flex flex-col gap-5">
          <h2 className="text-2xl font-semibold text-center text-black">
            Login
          </h2>

          <input
            required
            value={email}
            onChange={(e) =>{
              setEmail(e.target.value)
            }}
            type="email"
            placeholder="Enter Your Email"
            className="border border-gray-300 placeholder:text-white rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-amber-600"
          />

          <input
            required
            value={password}
            onChange={(e) => {
              setPassword(e.target.value)
            }}
            type="password"
            placeholder="Enter Your Password"
            className="border border-gray-300 placeholder:text-white rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-amber-600"
          />

          <button className="bg-amber-700 text-white py-2 rounded-md hover:bg-amber-800 transition duration-300">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
