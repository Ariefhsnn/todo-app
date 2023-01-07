import React from "react";
import { useForm } from "react-hook-form";
import { MdOutlineWarning } from "react-icons/md";
import { Button } from '../../components'

export const TaskForm = ({ isEdit, onCancel }) => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);

    const cancelHandler = (e) => {
        e.preventDefault()
        onCancel();       
    }

    return (
        <form 
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col w-full px-5 pb-5 gap-4 text-xs"
        >
            <div className="flex flex-col gap-2">
                <label htmlFor="name" className="font-bold text-gray-700">Task Name</label>
                <input {...register('name', { required: 'Task Name Required!' })} type="text" placeholder="Type your Task" className="text-gray-500 border-2 border-gray-300 rounded py-2 px-4 outline-none" />
                {
                    errors.name?.type === 'required' &&  
                    <div className="flex items-center text-red-500 gap-1 w-full font-bold">                        
                        <MdOutlineWarning className="h-5 w-5" />
                        <p>{errors.name?.message}</p>
                    </div>                    
                }
            </div>

            <div className="flex flex-col gap-2">
                <label htmlFor="progress_percentage" className="font-bold text-gray-700">Progress</label>
                <input {...register('progress_percentage', { required: 'Percentage Required!' })} type="number" placeholder="70%" className="text-gray-500 border-2 border-gray-300 rounded py-2 px-4 outline-none w-1/3" />
                {
                    errors.progress_percentage?.type === 'required' &&  
                    <div className="flex items-center text-red-500 gap-1 w-full font-bold">                        
                        <MdOutlineWarning className="h-5 w-5" />
                        <p>{errors.progress_percentage?.message}</p>
                    </div>                    
                }
            </div>

            <div className="flex w-full justify-end gap-5 items-center">
                <Button onClick={ (e) => cancelHandler(e) }>
                    <p>Cancel</p>
                </Button>
                <Button type="primary">
                    <p>Save Task</p>
                </Button>
            </div>

        </form>
    )
}