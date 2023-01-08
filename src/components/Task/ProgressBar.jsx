import React from "react";

export const ProgressBar = () => {
    return (
        <div className="w-full flex items-center gap-3">
            <div className="w-full flex bg-gray-200 rounded-full ">
                <div className="h-4 bg-blue-600 rounded-l-full w-[35%]"></div>                
            </div>
            <span className="text-xs">35%</span>    
        </div>        
        
    )
}