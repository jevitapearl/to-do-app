import { useState } from 'react'
import './App.css'
import Task from './Task.jsx'

function App() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  const addTask = (event) =>{
    event.preventDefault();
    
    if (!newTask.trim()) return;

    const task = {
      id: tasks.length? tasks[tasks.length - 1].id + 1 : 1,
      status: false,
      taskName: newTask
    }

    setTasks([...tasks, task]);
    setNewTask("");
  };

  const deleteTask = (taskDel) => {
    setTasks(tasks.filter((task) => task.id !== taskDel.id));
  };

  const completeTask = (taskComplete) => {
    setTasks(tasks.map((task) => {
      return task.id === taskComplete.id ? {...task, status: !task.status} : task
    }));
  };

  const handleChange = (event) => {
    setNewTask(event.target.value);
  };

  const completed = tasks.filter(t => t.status).length;
  const pending = tasks.length - completed;

  return (
    <div className="container">
      <h2>To-do list</h2>
      <div>
        <form onSubmit={addTask}>
          <input onChange={handleChange} type="text" placeholder="Add Task" value={newTask}/>
          <button className="submit-btn" type="submit">+ Add task</button>
        </form>
        
      </div>
        <p>Completed tasks: {completed}</p>
        <p>Tasks pending: {pending} </p>
        <div className="list">
          <ul>
            {tasks.map((task) => {
              return <Task 
                className={task.status ? "strike":""}
                taskName={task.taskName} 
                id={task.id} 
                status={task.status}
                deleteTask={deleteTask} 
                completeTask={completeTask}
                />

            })}
          </ul>


      </div>
    </div>
  )
}

export default App
