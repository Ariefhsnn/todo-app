import { config, token } from "."
import axios from "axios"
import { useEffect, useState } from "react";

export const GetTask = (loading, todoId) => {
    const [taskData, setTaskData] = useState([]);
    
    useEffect(() => {
        const loadTask = async () => {
            try {
                const res = await axios.get(`todos/${todoId}/items`, config);
                
                let sorted = res.data.sort((a, b) => {
                    let prev = new Date(a.created_at).getTime(); 
                    let curr = new Date(b.created_at).getTime();                    
                    return prev < curr ? 1 : -1;
                });                                 

                setTaskData(sorted)
            } catch (error) {
                console.log(error.response);
            }
        }

        loadTask();
    }, [loading])

    return taskData
}

export const PostTask = async (name, progress_percentage, todoId) => {
    try {
        const res = await axios.post(`todos/${todoId}/items`, {name, progress_percentage}, config);
        let { status } = res;
        if(status === 201 || status === 200){
            return status;
        }
    } catch (error) {
        console.log(error.response);
    }
}

export const EditTask = async (name, progress_percentage, todoId, taskId, ) => {
    try {
        const res = await axios.patch(`todos/${todoId}/items/${taskId}`, {name, progress_percentage}, config);
        let { status } = res;
        if(status === 201 || status === 200){
            return status;
        }
    } catch (error) {
        console.log(error.response);
    }
}

export const DeleteTask = async (todoId, taskId) => {
    try {        
        const res = await axios.delete(`todos/${todoId}/items/${taskId}`, config)
        let { status } = res;
        if(status === 204 || status === 200){
            return status;
        }
    } catch (error) {
        console.log(error.response);
    }
}

export const MoveTask = async (todoId, taskId, targetId) => {
    try {
        const res = await axios.patch(`todos/${todoId}/items/${taskId}`, {target_todo_id: targetId}, config);
        let { status } = res;
        if(status === 200 || status === 201){
            return status;
        }
    } catch (error) {
        console.log(error.response);   
    }
}