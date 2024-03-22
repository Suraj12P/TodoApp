import React, { useState } from 'react'


const ToDoList = () => {
    const [tasks, setTasks] = useState(["read books"]);
    const [newTask, setNewTask] = useState("");
    function handleInputChange(event) {
        setNewTask(event.target.value);
    }
    function addTask() {
        if (newTask.trim() !== "") {
            setTasks(t => [...t, newTask]);
            setNewTask("");
        }
    }
    function deleteTask(index) {
        const updateTasks = tasks.filter((_, i) => i != index);
        setTasks(updateTasks);
    }
    function moveTaskUp(index) {
        if(index>0){
            const updatedTasks =[...tasks];
            [updatedTasks[index],updatedTasks[index-1]]=[updatedTasks[index-1],updatedTasks[index]];
            setTasks(updatedTasks);
        }
    }
    function moveTaskDown(index) {
        if(index<tasks.length-1){
            const updatedTasks =[...tasks];
            [updatedTasks[index],updatedTasks[index+1]]=[updatedTasks[index+1],updatedTasks[index]];
            setTasks(updatedTasks);
        }
    }
    return (


        <div className='to-do-list'>
            <h1>To-Do-List</h1>
            <div>
                <input type="text" placeholder='add your tasks....' value={newTask} onChange={handleInputChange} />
                <button className="add-btn" onClick={addTask}>Add</button>
            </div>

            <ol>
                {tasks.map((task, index) =>
                    <li key={index}>
                        <span className='text'>{task}</span>
                        <button className="del-btn" onClick={() => deleteTask(index)}>Delete</button>
                        <button className="move-btn" onClick={() => moveTaskUp(index)}>👆</button>
                        <button className="move-btn" onClick={() => moveTaskDown(index)}>👇</button>
                    </li>)}
            </ol>
        </div>
    );
}


export default ToDoList;
