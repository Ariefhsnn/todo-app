import React, { Fragment } from "react";
import { useForm } from "react-hook-form";
import { MdOutlineWarning } from "react-icons/md";
import { Button } from '..'

export const Form = ({ isEdit, formType, onCancel }) => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);

    const cancelHandler = (e) => {
        e.preventDefault()
        onCancel();       
    }

    const TaskForm = () => {
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

    const GroupForm = () => {
        return (
            <form 
                onSubmit={handleSubmit(onSubmit)}
                className="flex flex-col w-full px-5 pb-5 gap-4 text-xs"
            >
                <div className="flex flex-col gap-2">
                    <label htmlFor="title" className="font-bold text-gray-700">Title</label>
                    <input {...register('title', { required: 'Title Required!' })} type="text" placeholder="Type your Title" className="text-gray-500 border-2 border-gray-300 rounded py-2 px-4 outline-none" />
                    {
                        errors.name?.type === 'required' &&  
                        <div className="flex items-center text-red-500 gap-1 w-full font-bold">                        
                            <MdOutlineWarning className="h-5 w-5" />
                            <p>{errors.name?.message}</p>
                        </div>                    
                    }
                </div>

                <div className="flex flex-col gap-2">
                    <label htmlFor="progress_percentage" className="font-bold text-gray-700">Description</label>
                    <textarea {...register('description')} placeholder="Description" className="text-gray-500 border-2 border-gray-300 rounded py-2 px-4 outline-none"></textarea>
                </div>

                <div className="flex w-full justify-end gap-5 items-center">
                    <Button onClick={ (e) => cancelHandler(e) }>
                        <p>Cancel</p>
                    </Button>
                    <Button type="primary">
                        <p>Submit</p>
                    </Button>
                </div>

            </form>
        )
    }

    const DeleteTask = () => {
        return (
            <div className="flex flex-col px-5 pb-5 gap-4 text-sm">
                <p>Are you sure want to delete this task? your action can’t be reverted.</p>
                <div className="flex w-full justify-end gap-5 items-center">
                        <Button onClick={ (e) => cancelHandler(e) }>
                            <p>Cancel</p>
                        </Button>
                        <Button type="danger">
                            <p>Delete</p>
                        </Button>
                    </div>
            </div>
        )
    }

    return (
        <Fragment>
            {formType === "task" ? (
                <TaskForm />
             ) : formType == "group" ? (
                <GroupForm />
             ) : (
                <DeleteTask />
             )}
        </Fragment>
        
    )
}