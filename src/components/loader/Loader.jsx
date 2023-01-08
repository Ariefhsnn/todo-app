import React from "react";
import { BiLoaderAlt } from 'react-icons/bi'

export const Loader = () => {
    return (
        <div className="w-full h-[90vh] flex justify-center items-center gap-2">
            <BiLoaderAlt className="h-10 w-10 text-[#01959F] animate-spin" />
            <p className="text-gray-500 font-bold">Loading</p>
        </div>
    )
}