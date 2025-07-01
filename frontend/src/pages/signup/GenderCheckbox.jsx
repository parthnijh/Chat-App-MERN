import React from 'react'

const GenderCheckbox = ({onCheckBoxChange,selectedGender}) => {
  return (
    <div className="flex justify-center gap-4">
        <div className='form-control'>
            <label className="label cursor-pointer flex items-center gap-2">
                <span className="label-text text-[#B0BED3]">Male</span>
                <input 
                    type="radio" 
                    className="checkbox checkbox-primary border-[#5E81F4] checked:bg-[#5E81F4]"
                    name="gender"
                    checked={selectedGender==="male"}
                    onChange={()=>onCheckBoxChange("male")}
                />
            </label>
        </div>
        <div className='form-control'>
            <label className="label cursor-pointer flex items-center gap-2">
                <span className="label-text text-[#B0BED3]">Female</span>
                <input 
                    type="radio" 
                    className="checkbox checkbox-primary border-[#5E81F4] checked:bg-[#5E81F4]"
                    name="gender"
                    checked={selectedGender==="female"}
                    onChange={()=>onCheckBoxChange("female")}
                />
            </label>
        </div>
    </div>
  )
}

export default GenderCheckbox
//starter code
// import React from 'react'

// const GenderCheckbox = () => {
//   return (
//     <div className="flex justify-center gap-4">
//         <div className='form-control'>
//             <label className="label cursor-pointer flex items-center gap-2">
//                 <span className="label-text text-[#B0BED3]">Male</span>
//                 <input 
//                     type="radio" 
//                     className="checkbox checkbox-primary border-[#5E81F4] checked:bg-[#5E81F4]"
//                     name="gender"
//                 />
//             </label>
//         </div>
//         <div className='form-control'>
//             <label className="label cursor-pointer flex items-center gap-2">
//                 <span className="label-text text-[#B0BED3]">Female</span>
//                 <input 
//                     type="radio" 
//                     className="checkbox checkbox-primary border-[#5E81F4] checked:bg-[#5E81F4]"
//                     name="gender"
//                 />
//             </label>
//         </div>
//     </div>
//   )
// }

// export default GenderCheckbox