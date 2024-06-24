import {useForm} from 'react-hook-form'
import { useEffect} from 'react'
import { createTask, deleteTask, getOne, updateTask} from '../api/Task.api'
import {TaskList,TaskListB,TaskListO} from '../components/TaskList'
import { useNavigate, useParams} from 'react-router-dom'
import {toast} from 'react-hot-toast'
import { MenuComp, PersonOne,Car , Ubication, Plus} from '../components/IconLogo'



export function TaskFormPage(){
    const {register, handleSubmit, formState:{errors},setValue} = useForm()
    const navigate = useNavigate();
    const params = useParams();

    const onSubmit = handleSubmit( async (info) => {
     if (params.id){
        console.log('working')
        await updateTask(params.id,info);
        toast.success('the task was updated')
     }else{ await createTask(info);
        toast.success('the task was created')
     }

      navigate('/task/');

    });

    useEffect(()=> {
        async function loadTask(){
            if(params.id){
                const{ data: {Marca, Sucursal, Aspirante},
            } = await getOne(params.id);
            setValue('Marca', Marca);
            setValue('Sucursal', Sucursal);
            setValue('Aspirante', Aspirante);
        }
    }      
    loadTask();
    },[])
    return(
        <div className="container">
            <div className="grid grid-cols-2 absolute left-20 top-10  p-10 ">
                
                <form onSubmit={onSubmit} className=" grid first-letter:grid-rows-4 p-14 shadow-lg border-r-8 rounded-2xl inset-1">
                    <Plus></Plus>
                    <div className="grid grid-cols-2">
                        <Car></Car>
                        <input className="border-5 border-rose-500 " type="text" placeholder="Marca" 
                              {...register("Marca", {required: true})}/>
                              {errors.title && <span>this is a requiere </span>}
                    </div>
                    <div className="grid grid-cols-2">
                        <Ubication></Ubication>
                        <input className=" border-indigo-500 ..." placeholder="Sucursal" rows="3" {...register("Sucursal", {required: true})}></input>
                    </div>
                    <div className="grid grid-cols-2">
                        <PersonOne ></PersonOne><input type="text" placeholder="Aspirante" 
                        {...register("Aspirante", {required: true})}/>
                        {errors.title && <span>this is a requiere </span>}
                    
                    </div>
                    <div className='grid grid-cols-2'>    
                        <button className="cancelOp">
                            cancelar
                        </button>
                        <button  className="bottonSave">save</button>
                        {
                            params.id &&(
                                <button onClick={async () =>{
                                    const accepted =window.confirm('are you suere about it?');
                                    if(accepted){
                                        await deleteTask(params.id);
                                        toast.success('the task was deleted')
                                        navigate('/task')

                                    }
                                    
                                }}>Delete</button>
                            )
                        }
                        
                    </div>
                    
                    
                </form>
                <div>
                    <table className=" bg-black">
                        <thead>
                            <tr>
                            <th>Song</th>
                            <th>Artist</th>
                            <th>Year</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr><td><TaskList></TaskList></td>
                            </tr>
                            
                            
                            
                            
                        </tbody>
                    </table>
                    
                </div>
                
            </div>
            <div className="absolute bottom-10 left-96  h-15 ">
                <MenuComp/>            
            </div>
            
        </div>
    )
}