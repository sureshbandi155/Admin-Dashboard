import React from 'react';
import Sidebar from '../Sidebar/Sidebar';
import Navbar from '../Navbar/Navbar';



// import classes from './Projects.module.css';

const Timetracker = (props) => {
    return (
        <div>
            <div className="wrapper">
                {/* <!-- Sidebar  -->/ */}
                <Sidebar />
                <div id="content">
                    <Navbar />
                    <p>Timetracker/Report Component.</p>
                </div>
            </div>
        </div>

    );
}
export default Timetracker;