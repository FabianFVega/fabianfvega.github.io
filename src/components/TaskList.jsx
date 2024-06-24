import { useEffect, useState } from "react";
import { getAllTask } from "../api/Task.api";
import { TaskCard, TaskCardC, TaskCardB } from "./TaskCard";


export function TaskList(){
    const [task, setTask] = useState([]);

    useEffect(() => {
        async function LoadTask(){
            const res = await getAllTask();
            setTask(res.data);
            console.log(res)
        }
        LoadTask();
         
    }, []);
    return <div>
        <tr>
            <td>{task.map(info => (
            <TaskCard key ={info.id} info={info}/>
        ))}</td></tr>
        
    </div>;
    
}
export function TaskListO(){
    const [task, setTask] = useState([]);

    useEffect(() => {
        async function LoadTask(){
            const res = await getAllTask();
            setTask(res.data);
            console.log(res)
        }
        LoadTask();
         
    }, []);
    return <div>
        <tr>
            <td>{task.map(info => (
            <TaskCardC key ={info.id} info={info}/>
        ))}</td></tr>
        
    </div>;
    
}
export function TaskListB(){
    const [task, setTask] = useState([]);

    useEffect(() => {
        async function LoadTask(){
            const res = await getAllTask();
            setTask(res.data);
            console.log(res)
        }
        LoadTask();
         
    }, []);
    return <div>
        
            {task.map(info => (
            <TaskCardB key ={info.id} info={info}/>
        ))}
        
    </div>;
    
}