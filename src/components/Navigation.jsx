import {Link} from 'react-router-dom'
export function Navigation(){
    return(
        <div>
            <Link to="/task">
                <h1>
                    Task app
                </h1>
            </Link>
            <Link to="/task-create"> Task create</Link>
        </div>
    )
}
