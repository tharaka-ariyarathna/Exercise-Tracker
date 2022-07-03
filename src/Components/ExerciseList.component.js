import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from '../axios/axios' ;

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

    

    return (
        <div>This is ExerciseList component</div>
    );
}

export default ExerciseList;