import React from 'react' ;
import {Link} from 'react-router-dom' ;

const Navbar = () => {
    return(
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <Link to='/' className='navbar-brand'>Exercise Tracker</Link>
             <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                        <Link to='/' className='nav-link'>Exercise</Link>
                    </li>
                    <li className="nav-item">
                        <Link to='/create' className='nav-link'>Create Exercise</Link>
                    </li>
                    <li className="nav-item">
                        <Link to='/user' className='nav-link'>Create user</Link>
                    </li>
                </ul>
            </div>
        </nav>
    ) ;
}

export default Navbar ;