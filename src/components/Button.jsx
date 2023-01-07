import React from "react";

export const Button = ({type, children, disabled}) => {

    const primary = 'flex items-center gap-[4px] bg-[#01959F] hover:bg-[#006c73] text-white px-[16px] py-[4px] rounded-md text-[12px] font-bold capitalize duration-300 shadow-sm'
    const outlined = 'flex items-center gap-[4px] bg-white border border-[#E0E0E0] text-[#1D1F20] px-[16px] py-[4px] rounded-md text-[12px] font-bold capitalize duration-300 shadow-md'
    const danger = 'flex items-center gap-[4px] bg-red-600 hover:bg-red-700 text-white px-[16px] py-[4px] rounded-md text-[12px] font-bold capitalize duration-300 shadow-sm'

    return (
        <button disabled={disabled} className={`${type === 'primary' ? primary : type === 'danger' ? danger : outlined}`}>
            {!children ? 'Klik' : children}
        </button>
    )
}