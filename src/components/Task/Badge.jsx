import React, { useEffect } from "react";

export const Badge = ({title, color}) => {
    return (       
        <div>
            <span className="py-0.5 px-2 border rounded text-xs" style={{borderColor: color, color: color}}>{title}</span>
        </div>         
    )
}