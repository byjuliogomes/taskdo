import React from "react";
import Task from "../Task";


const TaskList = ({ tasks, onTaskDeleted, onTaskUpdated }) => {
    return (
        <>
            <div>{tasks.map((task) => (
            <Task 
                task={task}
                onTaskDeleted={onTaskDeleted}
                onTaskUpdated={onTaskUpdated}
                key={task.id}>
            </Task>
                ))}</div>
        </>
    );
};

export default TaskList;
