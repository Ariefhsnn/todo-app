import React, { Fragment } from "react";
import { ProgressBar, Dropdown } from "..";
import { Transition } from '@headlessui/react'

export const TaskCard = () => {
    return (
        <Transition 
            appear
            show
            as={Fragment}
            enter="ease-in-out duration-1000"
            enterFrom="opacity-0 scale-70"
            enterTo="opacity-100 scale-100"
        >
            <div className="w-72 border border-gray-300 bg-gray-100 p-4 text-sm rounded">
                <p className="border-b border-dashed border-gray-300 pb-2">Re-designed the zero-g doggie bags. No more spills!</p>            
                <div className="mt-2 flex items-center">
                    <div className="w-5/6">
                        <ProgressBar />
                    </div>
                    <div className="w-1/6 flex justify-end">
                        <Dropdown />
                    </div>
                </div>
            </div>
        </Transition>
    )
}