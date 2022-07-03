import react from 'react' ;
import { Link } from 'react-router-dom';

const Exercise = props => {
    return(
        <tr>
            <td>{props.exercise.username}</td>
            <td>{props.exercise.description}</td>
            <td>{props.exercise.duration}</td>
            <td>{props.exercise.date.substring(0,10)}</td>
            <td>
                <Link to={`edit/${props.exercise._id}`}><button className='btn btn-primary mx-4'>Edit</button></Link>
                <button className='btn btn-danger mx-4' onClick={() => {props.deleteExercise(props.exercise._id)}}>Delete</button>
            </td>
        </tr>
    ) ;
}

export default Exercise ;