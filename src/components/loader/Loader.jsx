import React from "react";
import { BiLoaderAlt } from 'react-icons/bi'

export const Loader = () => {
    return (
        <div className="w-full flex justify-center items-center gap-2">
            <BiLoaderAlt className="h-5 w-5 text-[#01959F] animate-spin" />
            <p className="text-gray-500 text-sm font-bold">Loading</p>
        </div>
    )
}