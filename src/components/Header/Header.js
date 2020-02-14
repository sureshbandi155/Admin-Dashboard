import React from 'react';
import { NavLink } from 'react-router-dom';


const header = () => {
    return(

        <div>
            <ul>
                <li>
                    <NavLink to="/login">Login Page</NavLink>
                </li>
                <li>
                    <NavLink to="/signup">Signup Page</NavLink>
                </li>
            </ul>
        </div>
    );
}
export default header;