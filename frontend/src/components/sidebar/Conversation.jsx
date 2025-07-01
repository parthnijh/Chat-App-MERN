import React from 'react'
import useConversation from '../../zustand/useConversation'
import { useSocketContext } from '../../context/SocketContext';

const Conversation = ({conversation, lastIdx}) => {
    const {selectedConversation, setSelectedConversation} = useConversation();
    const isSelected = selectedConversation?._id === conversation?._id;
    const {onlineUsers} = useSocketContext();
    const isOnline = onlineUsers.includes(conversation._id);
    
    return (
        <>
            <div 
                className={`flex gap-2 items-center hover:bg-[#5E81F4] rounded p-2 py-1 cursor-pointer ${isSelected ? "bg-[#5E81F4]" : ""}`} 
                onClick={() => setSelectedConversation(conversation)}
            >
                <div className='avatar relative'>
                    <div className='w-12 rounded-full'>
                        <img 
                            className='w-12 rounded-full' 
                            src={conversation.profilepic}
                            alt={conversation.fullName}
                        />
                    </div>
                    
                    {/* Online indicator dot */}
                    {isOnline ? (
                        <span className='absolute w-3 h-3 bg-green-500 rounded-full bottom-0 right-0 border-2 border-white'></span>
                    ):(<span className='absolute w-3 h-3 bg-red-500 rounded-full bottom-0 right-0 border-2 border-white'></span>)}
                </div>
                
                <div className='flex flex-col flex-1'>
                    <div>
                        <p className='font-bold text-gray-50'>{conversation.fullName}</p>
                    </div>
                </div>
            </div>

            {!lastIdx && <div className='divider my-0 py-0 h-1'></div>}
        </>
    )
}

export default Conversation