import { ChevronsRightIcon, TrashIcon } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Button from "./Button"

function Tasks(props) {
    const navigate = useNavigate();

    function onSeeDetailsClick(task){
        const query = new URLSearchParams();
        query.set("title", task.title);
        query.set("description", task.description);
        navigate(`/task?${query.toString()}`)
    }
    return (
        <div className="space-y-4 bg-slate-200 rounded-md p-6 shadow overflow-auto">

            {props.tasks.map((task) => (

                <p key={task.id} className="flex gap-2 text-center" >

                    <button onClick={() => {props.onTaskClick(task.id)}} className={`bg-slate-400 text-white p-2 rounded-md flex w-full text-left ${task.isCompleted && 'line-through'}`}>{task.title}</button>

                    <Button 
                    onClick={() => onSeeDetailsClick(task)}>
                        <ChevronsRightIcon/>
                    </Button>

                    <Button 
                    onClick={() => {props.onDeleteClick(task.id)}} >
                         <TrashIcon />
                    </Button>

                </p>

            ))}
        </div>
        
    );
}
export default Tasks;
