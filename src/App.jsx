import AddTask from "./components/AddTask";
import Tasks from "./components/Tasks";
import { useEffect, useState } from "react";
import {v4} from 'uuid';



function App() {
  const [tasks, setTasks] = useState( JSON.parse(localStorage.getItem("tasks")) || []);

function onTaskClick(taskId){
    const newTasks = tasks.map(((task)=> {
      if(taskId==task.id){
        return {...task, isCompleted: !task.isCompleted}
      }
      return task;
    }))

    setTasks(newTasks)
}
function onDeleteClick(taskId){
    const newTasks = tasks.filter( task => {
        return task.id != taskId
    })

    setTasks(newTasks)
}

function onAddTask(title, description){
  const newTask = {
    id : v4(),
    title : title,
    description : description,
    isCompleted : false,
  };

  setTasks([...tasks, newTask])
}

useEffect(()=>{
  localStorage.setItem("tasks",JSON.stringify(tasks))
},[tasks])

// useEffect(() => {
//   const fetchTask = async () => {
//     try {
//       const response = await fetch("https://jsonplaceholder.typicode.com/todos?_limit=4", { method: "GET" });
//       const data = await response.json();     
//       console.log(data);
//       setTasks(data); 
//     } catch (error) {
//       console.error("Erro ao buscar tarefas:", error);
//     }
//   };

//   //fetchTask();
// }, []);

  return (
    <div className="w-screen h-screen  bg-slate-500 flex justify-center items-center p-6">
      <div className="w-[500px] flex flex-col gap-14 overflow-auto">
        <div className="text-3xl text text-slate-100 font-bold text-center">Gerenciador de Tarefas</div>
        <AddTask onAddTask = {onAddTask}/>
        <Tasks tasks={tasks} onTaskClick = {onTaskClick} onDeleteClick = {onDeleteClick}/>
      </div>
    </div>
  );
}

export default App;   
