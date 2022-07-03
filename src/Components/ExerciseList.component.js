import React, { useEffect, useState } from 'react';
import axios from '../axios/axios' ;
import Exercise from './Exercise.component';

const ExerciseList = () => {
    const [exercises, setExercises] = useState([]) ;

    const getExercisesList = async () => {
        const response = await axios.get('exercises/')
        console.log(response.data) ;
        setExercises(response.data) ;
    }

    const deleteExercise = async (id) => {
        const response = await axios.delete('exercises/' + id)
        console.log(response.data) ;
        setExercises(exercises.filter(exercise => exercise._id !== id))
    }

    useEffect(() => {
        getExercisesList() ;
    }, []) ;

    const renderExerciseList = () => {
        if(exercises.length > 0){
            return(
                exercises.map(currentExercise => <Exercise exercise={currentExercise} deleteExercise={deleteExercise} key={currentExercise._id}/>)
            ) ;
        }
    }

    return (
        <div className='text-center'>
            <h3>Exercises List</h3>
            <table className='table'>
                <thead className='thead-dark'>
                    <tr>
                        <th>Username</th>
                        <th>Description</th>
                        <th>Duration</th>
                        <th>Date</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {renderExerciseList()}
                </tbody>
            </table> 
        </div>
    );
}

export default ExerciseList;

