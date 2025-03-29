import React from 'react'
import { BiSend } from 'react-icons/bi'

const MessageInput = () => {
  return (
    <div>
        <form className='flex gap-2 px-4 my-3'>
            <input type='text' placeholder='Send A Message' className='border text-sm rounded-lg black w-full p-2.5 border-gray-600 text-white'></input>
            <button className="btn bg-[#5E81F4] hover:bg-[#4A6BC7] text-white "><BiSend /></button>
        </form>
    </div>
  )
}

export default MessageInput