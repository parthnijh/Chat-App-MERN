import React from 'react'
import { BiSend } from 'react-icons/bi'
import useSendMessage from '../../hooks/useSendMessage';
import { useState } from 'react';

const MessageInput = () => {
  const [message,setMessage]=useState("");
  const {loading,sendMessage}=useSendMessage();
  const handleSubmit =async(e)=>{
    e.preventDefault();
    
    if(!message){
      return;
    }
    await sendMessage(message);
    setMessage("");


  }
  return (
    <div>
        <form className='flex gap-2 px-4 my-3' onSubmit={handleSubmit}>
            <input type='text' placeholder='Send A Message' className='border text-sm rounded-lg black w-full p-2.5 border-gray-600 text-white' value={message} onChange={(e)=>setMessage(e.target.value)}></input>
            
            <button className="btn bg-[#5E81F4] hover:bg-[#4A6BC7] text-white ">
              {loading ? <div className='loading loading-spinner'></div> :<BiSend /> }</button>
        </form>
    </div>
  )
}

export default MessageInput