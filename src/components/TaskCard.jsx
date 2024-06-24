import { useNavigate} from "react-router-dom";

export function TaskCard({info}){
    const navigate = useNavigate()
    return(
        <div style={{background : 'black'}} onClick={() =>{ navigate('/task-create/'+ info.id)}} className="grid grid-cols-3 ">
            <p>{info.Marca}</p>
        </div>
    );  
}

export function TaskCardC({info}){
    const navigate = useNavigate()
    return(
        <div style={{background : 'black'}} onClick={() =>{ navigate('/task-create/'+ info.id)}} className="grid grid-cols-3 ">
            <p>{info.Sucursal}</p>
        </div>
    );  
}
export function TaskCardB({info}){
    const navigate = useNavigate()
    return(
        <div style={{background : 'black'}} onClick={() =>{ navigate('/task-create/'+ info.id)}} className="grid grid-cols-3 ">
            <p>{info.Aspirante}</p>
        </div>
    );  
}
           