import React, { Fragment, useEffect, useState } from "react";
import { BsThreeDots } from 'react-icons/bs';
import { Popover, Transition } from '@headlessui/react'
import * as Icons from "react-icons/md";
import { DeleteTask, EditTask, MoveTask } from "../../hooks/useTask";

export const Dropdown = ({todoId, taskId, setLoading, next, prev, setSelected}) => {

    const [isOpen, setIsOpen] = useState(false);
    

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

    const onDelete = async() => {
        setLoading(true);
        await DeleteTask(todoId, taskId);
        setLoading(false)        
    }

    const onMoveNext = async() => {
        setLoading(true);
        await MoveTask(todoId, taskId, next);
        setLoading(false);
    }

    const onMovePrev = async() => {
        setLoading(true);
        await MoveTask(todoId, taskId, prev);
        setLoading(false);
    }

    const onEdit = async() => {
        setLoading(true);
        await EditTask
    }   

    return (
        <div className="flex w-full justify-end relative">
            <Popover>
                {({ open }) => {                                      
                    return (                    
                        <>                   
                        <Popover.Button as="button" onClick={() => setSelected(curr => !curr)}>
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
                            <Popover.Panel as="div" className="absolute z-[1000] w-64 right-0.5">                            
                                <div className="flex flex-col gap-3 bg-white border rounded-md py-3.5 px-4">
                                    {next && (
                                        <Option 
                                            name="Move Right" 
                                            icon="MdArrowForward" 
                                            onClick={onMoveNext}
                                        />
                                    )}
                                    {prev && (
                                        <Option 
                                            name="Move Left" 
                                            icon="MdArrowBack" 
                                            onClick={onMovePrev}
                                        />
                                    )}                                
                                    <Option name="Edit" icon="MdOutlineEdit" />
                                    <Option 
                                        name="Delete" 
                                        icon="MdOutlineDelete" 
                                        danger   
                                        onClick={onDelete}                              
                                    />
                                </div>
                            </Popover.Panel>
                         </Transition> 
                         </>
                    )
                }}
                
            </Popover>
        </div>                
    )
}