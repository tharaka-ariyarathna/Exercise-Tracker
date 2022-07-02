import React, {useState} from 'react' ;

const CreateExercise = () => {
    const [exercise, setExercise] = useState({
        username : '',
        description : '' ,
        duration : 0 ,
        date : new Date()
    })

    const [users, setUsers] = useState([]) ;

    const onExerciseChange = (event) => {
        const changingProperty = event.target.name ;
        setExercise({...exercise, [changingProperty] : event.target.value})
    }

    const onExerciseFormSubmit = (event) => {
        event.preventDefault() ;
        const newExercise = {
            username : exercise.username,
            description : exercise.description,
            duration : Number(exercise.duration),
            date : exercise.date
        }

        console.log(newExercise) ;

        window.location = '/' ;
    }

    console.log(exercise) ;
    
    return(
        <div>
            <h2>THis is Create Exercise component</h2>
            <input type='text' name='duration' onChange={onExerciseChange}/>
            <button onClick={onExerciseFormSubmit}>Click</button>
        </div>
    ) ;
}

export default CreateExercise ;