import React from 'react'

const Conversation = () => {
  return (
    <>
    <div className='flex gap-2 items-center hover:bg-[#5E81F4] rounded p-2 py-1 cursor-pointer'>
        <div className='avatar online'>
            <div className='w-12 rounded-full'>
                <img className='w-12 rounded full' src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp">
                </img>
            </div>
        </div>
        <div className='flex flex-col flex-1'>
            <div>
                <p className='font-bold text-gray-50'>John Doe</p>
                
            </div>
        </div>
    </div>
    <div className='divider my-0 py-0 h-1'></div>
    </>
  )
}

export default Conversation
// import React from 'react'

// const Conversation = () => {
//   return (
//     <>
//     <div className='flex gap-2 items-center hover:bg-[#5E81F4] rounded p-2 py-1 cursor-pointer'>
//         <div className='avatar online'>
//             <div className='w-12 rounded-full'>
//                 <img className='w-12 rounded full' src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp">
//                 </img>
//             </div>
//         </div>
//         <div className='flex flex-col flex-1'>
//             <div>
//                 <p className='font-bold text-gray-50'>John Doe</p>
                
//             </div>
//         </div>
//     </div>
//     <div className='divider my-0 py-0 h-1'></div>
//     </>
//   )
// }

// export default Conversation