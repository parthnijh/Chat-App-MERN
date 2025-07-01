import React, { useEffect,useRef } from 'react'
import Message from './Message'
import useGetMessages from '../../hooks/useGetMessages'
import MessageSkeleton from '../skeletons/MessageSkeleton';
import useListenMessages from '../../hooks/useListenMessages';

const Messages = () => {
  const{loading,messages} =useGetMessages();
  useListenMessages();
  const lastMessageRef=useRef();
  useEffect(()=>{
    setTimeout(()=>{
      lastMessageRef.current?.scrollIntoView({behaviour:"smooth"});
    },100);
    

  },[messages])
  console.log("messages",messages);
  return (
    <div className='px-4 flex-1 overflow-auto'>
      {!loading && messages.length>0 && messages.map((message)=>(
        <div  key={message._id} ref={lastMessageRef}>
          <Message message={message} />
        </div>
        
      ))}
        {loading && [...Array(5)].map((_,idx)=><MessageSkeleton key={idx} />)}
        {!loading && messages.length===0 &&(
          <p className='text-center text-[#5E81F4]'>Send A Message To Start Your Conversation !!</p>
        )}
    </div>
  )
}

export default Messages