import React from 'react';
import GenderCheckbox from './GenderCheckbox';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import useSignup from '../../hooks/useSignup';

const Signup = () => {
    const[inputs,setInputs]=useState({
        fullName:"",
        username:"",
        password:"",
        confirmPassword:"",
        gender:" "

    });
    const {loading,signup}=useSignup();
    const handleGender=(gender)=>{
        setInputs({...inputs,gender})
    }
    const handleSubmit = async(event) => {
        event.preventDefault();// Prevent page reload
        await signup(inputs); 
        
    };
  return (
    <div className="md:min-h-screen md:min-w-screen h-screen bg-[#121725] flex items-center justify-center font-['Poppins', sans-serif]">
      <div className="w-full max-w-md p-8 rounded-lg shadow-md bg-[#1E2D4C]">
        <h1 className="text-3xl font-bold text-[#5E81F4] mb-6 text-center">
          Signup ChatApp
        </h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="label text-[#B0BED3]">
              <span>Full Name</span>
            </label>
            <input type="text" placeholder="John Doe" className="input input-bordered w-full bg-[#0D1117] text-[#E2E8F0] border-[#5E81F4] focus:border-[#5E81F4] focus:ring-[#5E81F4]" value={inputs.fullName} onChange={(e)=>setInputs({...inputs,fullName:e.target.value})}/>
          </div>
          <div className="mb-4">
            <label className="label text-[#B0BED3]">
              <span>Username</span>
            </label>
            <input type="text" placeholder="johndoe" className="input input-bordered w-full bg-[#0D1117] text-[#E2E8F0] border-[#5E81F4] focus:border-[#5E81F4] focus:ring-[#5E81F4]" value={inputs.username} onChange={(e)=>setInputs({...inputs,username:e.target.value})}/>
          </div>
          <div className="mb-4">
            <label className="label text-[#B0BED3]">
              <span>Password</span>
            </label>
            <input type="password" placeholder="Enter Password" className="input input-bordered w-full bg-[#0D1117] text-[#E2E8F0] border-[#5E81F4] focus:border-[#5E81F4] focus:ring-[#5E81F4]" value={inputs.password} onChange={(e)=>setInputs({...inputs,password:e.target.value})}/>
          </div>
          <div className="mb-4">
            <label className="label text-[#B0BED3]">
              <span>Confirm Password</span>
            </label>
            <input type="password" placeholder="Confirm Password" className="input input-bordered w-full bg-[#0D1117] text-[#E2E8F0] border-[#5E81F4] focus:border-[#5E81F4] focus:ring-[#5E81F4]" value={inputs.confirmPassword} onChange={(e)=>setInputs({...inputs,confirmPassword:e.target.value})} />
          </div>
          <GenderCheckbox onCheckBoxChange={handleGender} selectedGender={inputs.gender}/>
          <Link to="/login" className="text-[#5E81F4] block text-center mb-4">
            Already have an account?
          </Link>
          <div className="flex justify-center">
            <button className="btn bg-[#5E81F4] hover:bg-[#4A6BC7] text-white w-full font-semibold" disabled={loading}>
                {loading ? <span className='loading loading-spinner'></span>:"Sign Up"}
              
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;