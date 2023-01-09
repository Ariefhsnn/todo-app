import React, { useEffect } from "react";
import { Navbar, Modal, Form, GroupTask, Loader } from "../components";
import { useState } from "react";
import { GetTodo } from "../hooks/useTodo";

export default function Index(){
    const [isShowModalAddTask, setIsShowModalAddTask] = useState(false);
    const [isShowModalEditTask, setIsShowModalEditTask] = useState(false);
    const [isShowModalDeleteTask, setIsShowModalDeleteTask] = useState(false);
    const [isShowModalAddGroup, setIsShowModalAddGroup] = useState(false);
    const [loading, setLoading] = useState(false);
    const [todoId, setTodoId] = useState('')
    const todoData = GetTodo(loading);

    const openModalAddTask = (todoId) => {
        setTodoId(todoId)
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
        <div className="h-screen">
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
                    setLoading={setLoading}
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
                    setLoading={setLoading}
                    todoId={todoId}
                />
            </Modal>

            <div className="flex h-auto mt-6 overflow-x-auto gap-4 mx-4">
                {todoData.length > 0 ? todoData.map((todo, idx) => (
                    <GroupTask 
                        key={idx} 
                        id={todo.id} 
                        onClick={() => openModalAddTask(todo.id)}
                        title={todo.title} 
                        description={todo.description} 
                        loading={loading}
                        setLoading={setLoading}
                    />                
                )) : (                    
                    <div className="h-[90vh] w-full flex items-center">
                        <Loader />
                    </div>     
                )}                
            </div>

               
        </div>
    )
}