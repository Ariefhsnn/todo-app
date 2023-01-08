import React from "react";

export const Button = ({type, children, disabled, onClick}, props) => {

    const primary = 'flex items-center gap-2 bg-[#01959F] hover:bg-[#006c73] text-white px-4 py-1 rounded-md text-[12px] font-bold capitalize duration-300 shadow-sm'
    const outlined = 'flex items-center gap-2 bg-white border border-[#E0E0E0] text-[#1D1F20] px-4 py-1 rounded-md text-[12px] font-bold capitalize duration-300 shadow-md'
    const danger = 'flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white px-4 py-1 rounded-md text-[12px] font-bold capitalize duration-300 shadow-sm'

    return (
        <button {...props} disabled={disabled} onClick={onClick} className={`${type === 'primary' ? primary : type === 'danger' ? danger : outlined}`}>
            {!children ? 'Klik' : children}
        </button>
    )
}