import React, { Fragment, useState } from "react";
import { ProgressBar, Dropdown } from "..";
import { Transition } from '@headlessui/react'

export const TaskCard = ({ data, next, prev, setLoading, todoId, taskId }) => {

    const [selected, setSelected] = useState(false);

    return (
        <Transition 
            appear
            show
            as={Fragment}
            enter="ease-in-out duration-1000"
            enterFrom="opacity-0 scale-70"
            enterTo="opacity-100 scale-100"
            leave="ease-in-out duration-300"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-70"
        >
            <div className={`w-72 border border-gray-300 bg-gray-100 p-4 text-sm rounded ${selected ? 'z-10' : 'z-0'} static`}>
                <p className={`${!data?.name ? 'text-gray-500' : 'border-b border-dashed border-gray-300 pb-2'}`}>{data ? data?.name : 'No Task'}</p>            
                {!data?.progress_percentage ? (
                    null
                ) : (
                    <div className="mt-2 flex items-center">
                        <div className="w-5/6">
                            <ProgressBar progress={data?.progress_percentage} />
                        </div>
                        <div className="w-1/6 flex justify-end">
                            <Dropdown 
                                next={next}
                                prev={prev}
                                setLoading={setLoading} 
                                todoId={todoId} 
                                taskId={taskId} 
                                setSelected={setSelected}
                                data={data}
                            />  
                        </div>
                    </div>
                )}                
            </div>
        </Transition>
    )
}