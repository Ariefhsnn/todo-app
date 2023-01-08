import { config } from "."
import axios from "axios"
import { useEffect, useState } from "react";

export const useGetTodo = () => {
    const [taskData, setTaskData] = useState([]);
    
    useEffect(() => {
        const loadTask = async () => {
            try {
                const res = await axios.get('todos', config);
                
                setTaskData(res.data)
            } catch (error) {
                console.log(error.response);
            }
        }

        loadTask();
    }, [])

    return taskData
}

export const usePostTodo = async (title, description) => {
    try {
        const res = await axios.post('todos', {title, description}, config);
        let { status } = res;
        if(status == 201 || status == 200){
            return status;
        }
    } catch (error) {
        console.log(error.response);
    }
}