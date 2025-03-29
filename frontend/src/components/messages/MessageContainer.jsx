import React from 'react'
import Messages from './Messages'
import MessageInput from './MessageInput'
import { TiMessages } from "react-icons/ti";

const MessageContainer = () => {
    const noChatSelected=true;

  return (
    
    <div className='flex flex-col h-[80%] w-[50%]'>
        {
            noChatSelected ? (<NoChatSelected /> ):(
        <>
        <div className='bg-[#1E2D4C] p-3'>
            <span className='text-[#B0BED3] mr-2'>To : </span>
            <span className='text-[#5E81F4] font-bold'>John Doe</span>
        </div>
        <Messages />
        <MessageInput />
        </>

        )}
        
    </div>
  )
}

export default MessageContainer;

const NoChatSelected = () => {
	
	return (
		<div className='flex items-center justify-center w-full h-full'>
			<div className='px-4 text-center sm:text-lg md:text-xl text-gray-200 font-semibold flex flex-col items-center gap-2'>
				<p>Welcome UserName</p>
				<p>Select a chat to start messaging</p>
				<TiMessages className='text-3xl md:text-6xl text-center' />
			</div>
		</div>
	);
};