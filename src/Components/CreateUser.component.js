import React, { useState } from 'react';

const CreateUser = () => {
    const [username, setUsername] = useState('') ;

    const onUsernameChange = (e) => {
        setUsername(e.target.value) ;
    }

    const onFormSubmit = (e) => {
        e.preventDefault() ;
        const user = {
            username : username
        }
        console.log(user) ;

        setUsername('') ;
    }

    return (
        <div>
            <h3>Create New User</h3>
            <form onSubmit={onFormSubmit}>
                <div className='form-group row my-3'>
                    <label className='col-sm-2 col-form-label'>Username</label>
                    <div className='col-sm-6'>
                        <input
                            type='text'
                            required
                            className='form-control'
                            value={username}
                            onChange={onUsernameChange}
                        />
                    </div>
                </div>
                <div className='form-group my-3 mx-4'>
                    <input type='submit' className='btn btn-primary' value='Create User'/>
                </div>
            </form>
        </div>
    );
}

export default CreateUser;
