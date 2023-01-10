import React, { Fragment } from "react";
import { useForm } from "react-hook-form";
import { MdOutlineWarning } from "react-icons/md";
import { Button } from '..'
import { EditTask, PostTask } from "../../hooks/useTask";
import { PostTodo } from "../../hooks/useTodo";

export const Form = ({ formType, onCancel, setLoading, todoId, onClick, taskData, isEdit }) => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const OnSubmit = async (data) => {
        if(formType === "group"){
            setLoading(true);
            await PostTodo(data.title, data.description);            
            onCancel();    
            setLoading(false);     
        }else if(formType === "task"){
            setLoading(true);
            isEdit ? await EditTask(data.name, data.progress_percentage, todoId, taskData.id) : await PostTask(data.name, data.progress_percentage, todoId);
            
            onCancel();
            setLoading(false);
        }
    } 

    const cancelHandler = (e) => {
        e.preventDefault()
        onCancel();       
    }

    const TaskForm = () => {
        return (
            <form 
                onSubmit={handleSubmit(OnSubmit)}
                className="flex flex-col w-full px-5 pb-5 gap-4 text-xs"
            >
                <div className="flex flex-col gap-2">
                    <label htmlFor="name" className="font-bold text-gray-700">Task Name</label>
                    <input defaultValue={taskData?.name || ''} {...register('name', { required: 'Task Name Required!' })} type="text" placeholder="Type your Task" className="text-gray-500 border-2 border-gray-300 rounded py-2 px-4 outline-none" />
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
                    <input defaultValue={taskData?.progress_percentage || ''} {...register('progress_percentage', { required: 'Percentage Required!' })} type="number" placeholder="70%" className="text-gray-500 border-2 border-gray-300 rounded py-2 px-4 outline-none w-1/3" />
                    {
                        errors.progress_percentage?.type === 'required' &&  
                        <div className="flex items-center text-red-500 gap-1 w-full font-bold">                        
                            <MdOutlineWarning className="h-5 w-5" />
                            <p>{errors.progress_percentage?.message}</p>
                        </div>                    
                    }
                </div>

                <div className="flex w-full justify-end gap-5 items-center">
                    <Button onClick={ onCancel }>
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
                onSubmit={handleSubmit(OnSubmit)}
                className="flex flex-col w-full px-5 pb-5 gap-4 text-xs"
            >
                <div className="flex flex-col gap-2">
                    <label htmlFor="title" className="font-bold text-gray-700">Title</label>
                    <input {...register('title', { required: 'Title Required!' })} type="text" placeholder="Type your Title" className="text-gray-500 border-2 border-gray-300 rounded py-2 px-4 outline-none" />
                    {
                        errors.title?.type === 'required' &&  
                        <div className="flex items-center text-red-500 gap-1 w-full font-bold">                        
                            <MdOutlineWarning className="h-5 w-5" />
                            <p>{errors.title?.message}</p>
                        </div>                    
                    }
                </div>

                <div className="flex flex-col gap-2">
                    <label htmlFor="description" className="font-bold text-gray-700">Description</label>
                    <textarea {...register('description', { required: 'Description Required!' }) } placeholder="Description" className="text-gray-500 border-2 border-gray-300 rounded py-2 px-4 outline-none"></textarea>
                    {
                        errors.description?.type === 'required' &&  
                        <div className="flex items-center text-red-500 gap-1 w-full font-bold">                        
                            <MdOutlineWarning className="h-5 w-5" />
                            <p>{errors.description?.message}</p>
                        </div>                    
                    }
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
                        <Button type="danger" onClick={onClick}>
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
             ) : formType === "group" ? (
                <GroupForm />
             ) : (
                <DeleteTask />
             )}
        </Fragment>
        
    )
}