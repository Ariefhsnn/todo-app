import React, { useEffect } from "react";

export const Badge = ({title, color}) => {
    useEffect(() => {
        console.log(color, 'color11')
    }, [color])
    return (       
        <div>
            <span className="py-0.5 px-2 border rounded text-xs" style={{borderColor: color, color: color}}>{title}</span>
        </div>         
    )
}