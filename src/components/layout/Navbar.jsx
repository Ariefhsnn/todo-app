import React from "react";
import { Button } from "..";
import { MdAdd } from 'react-icons/md'

export const Navbar = ({onClick}) => {
    return (
        <nav className="px-[20px] py-[18px] flex w-full gap-[10px] border-b border-[#E0E0E0] items-center">
            <h1 className="text-[18px] font-bold">Product Roadmap</h1>            
            <Button type="primary" onClick={onClick}>
                <MdAdd className="h-5 w-5"/>
                <p>Add New Group</p>                
            </Button>
        </nav>
    )
}