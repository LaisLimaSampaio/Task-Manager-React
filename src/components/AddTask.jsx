import Input from "./Input";
import { useState } from "react"

function AddTask({onAddTask}){
    const [title , setTitle] = useState("");
    const [description , setDescription] = useState("");

    return(
        <div className="space-y-4 bg-slate-200 rounded-md p-6 shadow flex flex-col justify-center items-center gap-2">

            <Input 
            type="text" 
            placeholder="Digite o título da tarefa" 
            value={title} 
            onChange={(event)=>{setTitle(event.target.value)}} />

            <Input 
            type="text" 
            placeholder="Digite a descrição da tarefa" 
            value={description} 
            onChange={(event)=>{setDescription(event.target.value)}} />

            <button onClick={()=>{
                if(!title.trim() || !description.trim()){
                    return alert("Todos os campos devem ser preenchidos");
                }
                onAddTask(title,description)}} className="bg-slate-400 w-full p-2 font-bold rounded-md text-white">Adicionar</button>

        </div>
    )
}
export default AddTask