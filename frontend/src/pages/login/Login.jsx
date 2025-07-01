import React from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import useLogin from '../../hooks/useLogin';
const Login = () => {
    const [username,setUsername]=useState("");
    const [password,setPassword]=useState("");
    const {loading,login}=useLogin();
    const handleSubmit=async(e)=>{
        e.preventDefault();
        await login(username,password)
    }
  return (
    <div className="md:min-h-screen md:min-w-screen h-screen flex items-center justify-center bg-[#121725]">
      <div className="w-full max-w-md p-8 rounded-lg shadow-md bg-[#1E2D4C]">
        <h1 className="text-4xl font-bold text-[#5E81F4] mb-4 text-center">
          Login
          <span className="block text-xl text-[#B0BED3]">Chatapp</span>
        </h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="label">
              <span className="label-text text-[#B0BED3]">Username</span>
            </label>
            <input
              type="text"
              placeholder="Enter Username"
              className="input input-bordered w-full bg-[#0D1117] text-[#E2E8F0] border-[#5E81F4] focus:border-[#5E81F4]"
              onChange={(e)=>setUsername(e.target.value)}
            />
          </div>
          <div className="mb-6">
            <label className="label">
              <span className="label-text text-[#B0BED3]">Password</span>
            </label>
            <input
              type="password"
              placeholder="Enter Password"
              className="input input-bordered w-full bg-[#0D1117] text-[#E2E8F0] border-[#5E81F4] focus:border-[#5E81F4]"
              onChange={(e)=>setPassword(e.target.value)}
            />
          </div>
          <Link to="/signup" className="text-[#5E81F4] block text-center mb-4">
            {"Don't"} have an account?
          </Link>
          <div className="flex justify-center">
            <button className="btn bg-[#5E81F4] hover:bg-[#4A6BC7] text-white w-full" disabled={loading}>
            {loading ? <span className='loading loading-spinner'></span>:"Login"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;