import React from "react";
import { Navbar, Modal, TaskForm } from "../components";
import { useState } from "react";

export default function Index(){
    const [isShowModalAddTask, setIsShowModalAddTask] = useState(false);
    const [isShowModalEditTask, setIsShowModalEditTask] = useState(false);
    const [isShowModalDeleteTask, setIsShowModalDeleteTask] = useState(false);
    const [isShowModalAddGroup, setIsShowModalAddGroup] = useState(false);

    const openModalAddTask = () => {
        setIsShowModalAddTask(true);        
    }

    const closeModalAdd = () => {
        setIsShowModalAddTask(false);
    }
     
    return (
        <>
            <Navbar onClick={openModalAddTask} />
            <Modal
                isOpen={isShowModalAddTask}
                title="Add Task"
                closeModal={closeModalAdd}                
            >
                <TaskForm onCancel={closeModalAdd} />
            </Modal>
        </>
    )
}