import React from 'react' ;
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css' ;

import Navbar from './Components/Navbar' ;
import ExerciseList from './Components/ExerciseList.component' ;
import EditExercise from './Components/EditExercise.component' ;
import CreateExercise from './Components/CreateExercise.component' ;
import CreateUser from './Components/CreateUser.component' ;

const App = () => {
    return(
        <Router >
            <div className='container'>
                <Navbar/>
                <br/>
                <Routes>
                    <Route path="/" exact element={<ExerciseList />} />
                    <Route path="/edit/:id" element={<EditExercise />} />
                    <Route path="/create" element={<CreateExercise />} />
                    <Route path="/user" element={<CreateUser />} />        
                </Routes>
            </div>
        </Router>
    ) ;
}

export default App ;