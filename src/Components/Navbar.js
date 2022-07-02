import React from 'react' ;
import {Link} from 'react-router-dom' ;

const Navbar = () => {
    return(
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <Link to='/' className='navbar-brand'>Exercise Tracker</Link>
             <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav mr-auto">
                    <li class="nav-item active">
                        <Link to='/' className='nav-link'>Exercise</Link>
                    </li>
                    <li class="nav-item">
                        <Link to='/create' className='nav-link'>Create Exercise</Link>
                    </li>
                    <li class="nav-item">
                        <Link to='/user' className='nav-link'>Create user</Link>
                    </li>
                </ul>
            </div>
        </nav>
    ) ;
}

export default Navbar ;