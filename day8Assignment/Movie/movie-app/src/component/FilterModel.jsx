import React, { useState } from 'react'

const FilterModel = ({ name,list, handleSelect }) => {
    const [isDropdownOpen, setisDropdownOpen] = useState(false);
   
    return (
        <div className="w-full relative" onClick={() => setisDropdownOpen(prev => !prev)}>
            <div className="flex justify-between bg-[#173d77] text-white px-5 py-[5px] text-base rounded-full">
                <div className="flex justify-center items-center">{name}</div>
                <div className="flex justify-center items-center gap-2" ><span>|</span><i className={`fa-solid fa-angle-${isDropdownOpen?'up':'down'}`}></i></div>
            </div>
            <div>
                {isDropdownOpen && (
                    <div className="absolute w-full mt-1 bg-white border-gray-300 rounded shadow-lg max-h-40 overflow-y-auto z-10">
                        {list && list.length > 0 && list.map((genre, index) => (
                            <div
                                key={index}
                                onClick={() => handleSelect(genre)}
                                className={`p-2 cursor-pointer border-gray-400 border-b-[1px] hover:bg-gray-100 ${(name == genre?.name) ? "bg-blue-100" : ""
                                    }`}
                            >
                                {genre?.name}
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    )
}

export default FilterModel