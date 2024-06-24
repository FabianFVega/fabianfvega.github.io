import {Link} from 'react-router-dom';
import {MenuLogo} from './IconLogo';
import { useNavigate } from 'react-router-dom';
export function MenuComp(){
    const navigate = useNavigate();
    return(
        <div className="container mx-auto">
            <nav className="grid grid-cols-2 absolute left-3 top-4 inset-x-0  h-16  ...">
              <MenuLogo ></MenuLogo>
              <button   className="w-28 h-10 absolute  left-3/4 startMenu"  onClick={() =>{ navigate('/task-create')}}>Empezar</button>
            </nav>
           
            <div className="absolute left-44 top-60 text-center" >
                <h1 className="leading-2">BIENVENIDO A</h1>
                <h2 className="text">MONITORING INNOVATION</h2> 
            </div>
            <div className=" grid grid-cols-4 absolute bottom-10 left-28 space-x-36 ">
                <Link  to="https://monitoringinnovation.com/" >   MONITORING INOVATION  </Link>
                <Link to="https://gpscontrol.co/">    GPS CONTROL   </Link>
                <Link to="/task-create"> Link repo front</Link>
                <Link to="/task-create"> link repo back</Link>
            </div>
            
        </div>
       



    )
}
