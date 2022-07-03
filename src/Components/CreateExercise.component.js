import React, {useEffect, useRef, useState} from 'react' ;
import axios from '../axios/axios' ;
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css' ;

const CreateExercise = () => {
    const userInput = useRef(null) ;//Used in ref in form
    const [exercise, setExercise] = useState({
        username : '',
        description : '' ,
        duration : 0 ,
        date : new Date()
    })

    const [users, setUsers] = useState([]) ;

    const getAllUsers = async () => {
        const response = await axios.get('users/') ;
        const allUsers = response.data.map(user => {
            return user.username ;
        })
        setUsers(allUsers) ;
    }

    useEffect(() => {
        getAllUsers() ;
    }, []) ;

    useEffect(() => {
        setExercise({...exercise, username: users[0]}) ;
    }, [users[0]]) ;

    const onExerciseChange = (event) => {
        const changingProperty = event.target.name ;
        setExercise({...exercise, [changingProperty] : event.target.value})
    }

    const saveExercise = async (exercise) => {
        const response = await axios.post('exercises/add', exercise) ;
        console.log(response.data) ;
    }

    const onExerciseFormSubmit = (event) => {
        event.preventDefault();
        const newExercise = {
            username : exercise.username,
            description : exercise.description,
            duration : Number(exercise.duration),
            date : exercise.date
        }

        saveExercise(newExercise) ;

        window.location = "http://localhost:3000/" ;
    }

    const renderUsernames = () => {
        return(users.map(user => {
            return(
                <option key={user} value={user}>
                    {user}
                </option>
            ) ;
        })) ;
    }
    
    return(
        <div>
            <h3>Create New Exercise Log</h3>
            <form onSubmit={onExerciseFormSubmit}>
                <div className="form-group row my-3">
                    <label className='col-sm-2 col-form-label'>Username</label>
                    <div className='col-sm-6'>
                        <select 
                            className="form-control " 
                            ref={userInput} 
                            required
                            value={exercise.username} 
                            name='username' 
                            onChange={onExerciseChange}
                        >
                            {
                            renderUsernames()
                            }
                        </select>
                    </div>
                </div>
                <div className='form-group row my-3'>
                    <label className='col-sm-2 col-form-label'>Description</label>
                    <div className='col-sm-6'>
                        <input
                            type='text'
                            required
                            className='form-control'
                            value={exercise.description}
                            name='description' 
                            onChange={onExerciseChange}
                        />
                    </div>
                </div>
                <div className='form-group row my-3'>
                    <label className='col-sm-2 col-form-label'>Duration</label>
                    <div className='col-sm-6'>
                        <input
                            type='text'
                            required
                            className='form-control'
                            value={exercise.duration}
                            name='duration' 
                            onChange={onExerciseChange}
                        />
                    </div>
                </div>
                <div className='form-group row my-3'>
                    <label className='col-sm-2 col-form-label'>Date</label>
                    <div className='col-sm-6'>
                        <DatePicker
                            name='date'
                            selected={exercise.date}
                            onChange={(e) =>{
                                setExercise(() => {
                                    return({...exercise, date: e}) ;
                                })
                            }}
                        />
                    </div>
                </div>
                <div className='form-group my-3 col-md-2 offset-md-2'>
                    <input type='submit' className='btn btn-primary' value='Create Exercise Log'/>
                </div>
            </form>
        </div>
    ) ;
}

export default CreateExercise ;