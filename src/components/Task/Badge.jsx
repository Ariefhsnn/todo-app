import React from "react";

export const Badge = ({title}) => {
    return (       
        <div>
            <span className=" py-0.5 px-2 border border-green-500 rounded-md text-xs text-green-500">{title}</span>
        </div>         
    )
}