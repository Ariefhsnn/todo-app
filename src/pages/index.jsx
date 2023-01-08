import React, { useEffect } from "react";
import { Navbar, Modal, Form, GroupTask, Loader } from "../components";
import { useState } from "react";
import { useGetTodo } from "../hooks/useTodo";

export default function Index(){
    const [isShowModalAddTask, setIsShowModalAddTask] = useState(false);
    const [isShowModalEditTask, setIsShowModalEditTask] = useState(false);
    const [isShowModalDeleteTask, setIsShowModalDeleteTask] = useState(false);
    const [isShowModalAddGroup, setIsShowModalAddGroup] = useState(false);
    const todoData = useGetTodo();

    useEffect(() => {
        console.log(todoData, 'data')
    }, [todoData])

    const openModalAddTask = () => {
        setIsShowModalAddTask(true);        
    }

    const closeModalAddTask = () => {
        setIsShowModalAddTask(false);
    }

    const openModalAddGroup = () => {
        setIsShowModalAddGroup(true);
    }

    const closeModalAddGroup = () => {
        setIsShowModalAddGroup(false);
    }

    return (
        <>
            <Navbar onClick={openModalAddGroup} />

            {/* Modal Add Group */}
            <Modal
                isOpen={isShowModalAddGroup}
                title="Add Group"
                closeModal={closeModalAddGroup}
            >
                <Form 
                    formType="group"
                    onCancel={closeModalAddGroup}
                />
            </Modal>

            {/* Modal Add Task */}
            <Modal
                isOpen={isShowModalAddTask}
                title="Add Task"
                closeModal={closeModalAddTask}                
            >
                <Form 
                    formType="task" 
                    onCancel={closeModalAddTask} 
                />
            </Modal>

            <div className="flex mt-6 overflow-x-auto gap-4 mx-4">
                {todoData.length > 0 ? todoData.map((todo, idx) => (
                    <GroupTask key={idx} title={todo.title} description={todo.description} />                
                )) : (                    
                    <Loader />
                )}                
            </div>

        </>
    )
}