import React from 'react';
import Sidebar from '../Sidebar/Sidebar';
import Navbar from '../Navbar/Navbar';



// import classes from './Projects.module.css';

const support = (props) => {
    return (
        <div>
        <div className="wrapper">
            {/* <!-- Sidebar  -->/ */}
            <Sidebar />
            <div id="content">
                <Navbar />
             <p>Support Component.</p>
            </div>
        </div>
    </div>

    );
}
export default support;