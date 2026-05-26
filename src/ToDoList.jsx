import { useState } from "react";

function ToDoList() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  function handleInputChange(event) {
    setNewTask(event.target.value);
  }

  function addTask() {
    if (newTask.trim() !== "") {
      setTasks((tasks) => [...tasks, newTask]);
      setNewTask("");
    }
  }
  function deleteTask(index) {
    const updatedTask = tasks.filter((_, i) => i !== index);
    setTasks(updatedTask);
  }

  function moveToUp(index){
    if(index>0){
        const updatedTask=[...tasks];
        [updatedTask[index],updatedTask[index-1]]= [updatedTask[index-1],updatedTask[index]];
        setTasks(updatedTask);
    }
  }

   function moveToDown(index){
    if(index<tasks.length-1){
        const updatedTask=[...tasks];
        [updatedTask[index],updatedTask[index+1]]= [updatedTask[index+1],updatedTask[index]];
        setTasks(updatedTask);
    }
  }
  return (
    <div className="to-do-list">
      <h1>To-Do List</h1>
      <div className='container'>
        <input
        type="text"
        placeholder="Enter the task..."
        value={newTask}
        onChange={handleInputChange}
        onKeyDown={(event) => {
            if(event.key === "Enter"){
            addTask();
            }
        }}
      />
      <button className="add-btn" onClick={addTask}>
        Add
      </button>
      </div>
       {tasks.length === 0 && <p className="no-task">No tasks yet</p>}

      <ol>
        {tasks.map((task, index) => (
          <li key={index}>
            <span className="text">{task}</span>
            <button className="delete-btn" onClick={() => deleteTask(index)}>
              Delete
            </button>
            <button className="move-btn" onClick={() => moveToUp(index)}>
              &#8593;
            </button>
            <button className="move-btn" onClick={() => moveToDown(index)}>
              &#8595;
            </button>
          </li>
        ))}
      </ol>
    </div>
  );
}
export default ToDoList;
