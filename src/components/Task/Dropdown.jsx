import React, { Fragment } from "react";
import { BsThreeDots } from 'react-icons/bs';
import { Popover, Transition } from '@headlessui/react'
import * as Icons from "react-icons/md";

export const Dropdown = () => {

    const Option = ({name, onClick, danger, icon}) => {
        const Icon = ({ icon, ...props }) => {
            const Icon = Icons[icon];
            return <Icon {...props} />;
        }
        return (
            <button onClick={onClick} className={`flex w-full gap-2 items-center ${danger ? 'hover:text-red-500' : 'hover:text-[#01959F]'}  duration-300`}>
                <Icon 
                     className="w-5 h-5"
                     aria-hidden="true"
                     icon={icon || ''}
                 />
                 <p className="text-sm font-semibold">{name}</p>
            </button>
        )
    }

    return (
        <div className="flex w-full justify-end">
            <Popover>
                {({ open }) => (
                    <>
                    <Popover.Button>
                    <BsThreeDots className="text-gray-500 flex text-xl" />        
                    </Popover.Button>
                     <Transition
                        as="div"
                        appear
                        show={open}                    
                        enter="ease-in-out duration-300"
                        enterFrom="opacity-0 scale-0"
                        enterTo="opacity-100 scale-100"
                        leave="ease-in-out duration-300"
                        leaveFrom="opacity-100 scale-100"
                        leaveTo="opacity-0 scale-0"
                    > 
                        <Popover.Panel as="div" className="absolute right-0.5 z-[10000]">
                            
                            <div className="flex flex-col gap-3 bg-white border rounded-md w-64 py-3.5 px-4">
                                <Option name="Move Right" icon="MdArrowForward" />
                                <Option name="Move Left" icon="MdArrowBack" />
                                <Option name="Edit" icon="MdOutlineEdit" />
                                <Option name="Delete" icon="MdOutlineDelete" danger />
                            </div>
                        </Popover.Panel>
                     </Transition> 
                     </>
                )}
                
            </Popover>
        </div>                
    )
}