import React from 'react'
import { IoSearchSharp } from "react-icons/io5";

const SearchInput = () => {
  return (
    <div className=''>
        <form className='flex gap-2'>
        
            <input type='text' placeholder='...Search' className='input input-bordered w-full bg-[#0D1117] text-[#E2E8F0] border-[#5E81F4] focus:border-[#5E81F4]'></input>
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