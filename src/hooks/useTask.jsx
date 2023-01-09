import { config, token } from "."
import axios from "axios"
import { useEffect, useState } from "react";

export const GetTask = (loading, todoId) => {
    const [taskData, setTaskData] = useState([]);
    
    useEffect(() => {
        const loadTask = async () => {
            try {
                const res = await axios.get(`todos/${todoId}/items`, config);
                
                setTaskData(res.data)
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

export const EditTask = async (name, todoId, taskId, targetId) => {
    try {
        const res = await axios.patch(`todos/${todoId}/items/${taskId}`, {name, target_todo_id: targetId}, config);
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