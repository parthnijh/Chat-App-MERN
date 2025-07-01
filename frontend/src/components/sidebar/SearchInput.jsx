import React, { useState } from 'react'
import { IoSearchSharp } from "react-icons/io5";
import useConversation from '../../zustand/useConversation';
import useGetConversations from '../../hooks/useGetConversations';
import toast from 'react-hot-toast';

const SearchInput = () => {
  const[search,setSearch]=useState("");
  const{setSelectedConversation} =useConversation();
  const {conversations}=useGetConversations();
  const handleSubmit=(e)=>{
    e.preventDefault();
    if(!search) return;
    if(search.length<3){
      return toast.error("search term should be atleast 3 characters")
    }
    const conversation=conversations.find((c)=>c.fullName.toLowerCase().includes(search.toLowerCase()));
    if(conversation){
      setSelectedConversation(conversation)
      setSearch("")
    }
    else{
      toast.error("no such user found")
    }


  }
  return (
    <div className=''>
        <form className='flex gap-2' onSubmit={handleSubmit}>
        
            <input type='text' placeholder='...Search' className='input input-bordered w-full bg-[#0D1117] text-[#E2E8F0] border-[#5E81F4] focus:border-[#5E81F4]'
            value={search}
            onChange={(e)=>setSearch(e.target.value)}></input>
            <button className="btn bg-[#5E81F4] hover:bg-[#4A6BC7] text-white "><IoSearchSharp /></button>
        </form>
    </div>
  )
}
export default SearchInput
// import React from 'react'
// import { IoSearchSharp } from "react-icons/io5";

// const SearchInput = () => {
//   return (
//     <div className=''>
//         <form className='flex'>
        
//             <input type='text' placeholder='...Search' className='input input-bordered w-full bg-[#0D1117] text-[#E2E8F0] border-[#5E81F4] focus:border-[#5E81F4]'></input>
//             <button className="btn bg-[#5E81F4] hover:bg-[#4A6BC7] text-white "><IoSearchSharp /></button>
//         </form>
//     </div>
//   )
// }

// export default SearchInput