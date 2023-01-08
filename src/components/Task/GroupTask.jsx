import React from "react";
import { Badge } from "..";
import { TaskCard } from "..";
import { IoIosAddCircleOutline } from "react-icons/io";

export const GroupTask = ({title, description}) => {
    return (
        <section className="flex flex-col p-4 border gap-2 border-green-500 rounded bg-green-50">
            <Badge title={title} />
            <p className="text-xs font-bold">{description}</p>
            <div className="max-h-screen">
                <TaskCard />
            </div>
            <button className="flex items-center gap-1.5">
                <IoIosAddCircleOutline className="h-5 w-5 text-gray-500 font-bold" />
                <p className="text-xs">New Task</p>
            </button>
        </section>
    )
}