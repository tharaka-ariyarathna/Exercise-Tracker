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

    console.log(exercise) ;
    
    return(
        <div>
            <h2>THis is Create Exercise component</h2>
            <input type='text' name='date' onChange={onExerciseChange}/>
        </div>
    ) ;
}

export default CreateExercise ;