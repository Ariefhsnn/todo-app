import React, { Fragment, useState } from "react";
import { Badge, Dropdown } from "..";
import { TaskCard } from "..";
import { IoIosAddCircleOutline } from "react-icons/io";
import { Transition } from '@headlessui/react';
import { GetTask } from '../../hooks/useTask'

export const GroupTask = ({title, description, onClick, id, loading, setLoading}) => {    
    const taskData = GetTask(loading, id)

    return (
        <Transition
            appear        
            show
            as={Fragment}
            enter="ease-in-out duration-200"
            enterFrom="opacity-0 translate-y-20 scale-80"
            enterTo="opacity-100 translate-y-0 scale-100"                        
        >
            <div className="h-[90vh]">
                <div className="flex z-0 h-auto flex-col p-4 border gap-2 border-green-500 rounded bg-green-50">
                    <Badge title={title} />
                    <p className="text-xs font-bold">{description}</p>
                    <div className="max-h-screen flex flex-col gap-3">
                        {taskData.length > 0 ?taskData?.map((task, idx) => (
                            <TaskCard 
                                key={idx} 
                                todoId={id} 
                                taskId={task.id} 
                                data={task} 
                            > 
                                <div className="z-10">
                                    <Dropdown 
                                        setLoading={setLoading} 
                                        todoId={id} 
                                        taskId={task.id} 
                                    />  
                                </div>                                 
                            </TaskCard>
                        )): (
                            <TaskCard />
                        )}
                    </div>
                    <button onClick={onClick} className="flex items-center gap-1.5">
                        <IoIosAddCircleOutline className="h-5 w-5 text-gray-500 font-bold" />
                        <p className="text-xs">New Task</p>
                    </button>
                </div>    
            </div>
        </Transition>
        
    )
}