import React from "react";
import { MdOutlineDone } from "react-icons/md";

export const ProgressBar = ({progress}) => {    
    return (
        <div className="w-full flex items-center gap-3">
            <div className="w-full flex bg-gray-200 rounded-full ">
                <div className={`h-4 ${progress === 100 ? 'rounded-r-full rounded-l-full bg-green-700' : 'rounded-l-full bg-[#01959F]'}`} style={{width: progress + '%'}} ></div>                
            </div>
            {progress === 100 ? (
                <div className="rounded-full text-white bg-green-700"> 
                    <MdOutlineDone className=" h-5 w-5" />
                </div>                
            ) : (
                <span className="text-xs">{progress}%</span>    
            )}
            
        </div>        
        
    )
}