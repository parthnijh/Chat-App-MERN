import React from 'react'
import { useAuthContext } from '../../context/AuthContext'
import useConversation from '../../zustand/useConversation';
import { extractTime } from '../../utils/extractTime';

const Message = ({message}) => {
  const {authUser} = useAuthContext();
  const {selectedConversation} = useConversation();
  const fromMe = message.senderId === authUser._id;
  const formatedTime=extractTime(message.createdAt)
  
  const containerClassName = fromMe 
    ? "flex justify-end" 
    : "flex justify-start";
  
  const profilePic = fromMe 
    ? authUser.profilepic 
    : selectedConversation.profilepic;
  
  const bubbleBgColor = fromMe 
    ? 'bg-[#5E81F4]' 
    : 'bg-[#15191e]';
  
  const textColor = fromMe 
    ? 'text-white' 
    : 'text-white';

  return (
    <div className={`w-full mb-4 ${containerClassName}`}>
      <div className={`flex max-w-[80%] ${fromMe ? 'flex-row-reverse' : 'flex-row'}`}>
        <div className='avatar self-end mb-1 mx-2'>
          <div className='w-8 h-8 rounded-full'>
            <img src={profilePic} alt="Profile" />
          </div>
        </div>
        
        <div className="flex flex-col">
          <div className={`chat-bubble px-4 py-2 rounded-2xl ${bubbleBgColor} ${textColor}`}>
            {message.message}
          </div>
          <div className={`text-xs opacity-50 mt-1 ${fromMe ? 'text-right' : 'text-left'}`}>
            {formatedTime}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Message























































