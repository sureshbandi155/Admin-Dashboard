import React from 'react';
import Sidebar from '../Sidebar/Sidebar';
import Navbar from '../Navbar/Navbar';


// import classes from './Settings.module.css';

const settings = (props) => {
    return (
        <div>
            <div className="wrapper">
                {/* <!-- Sidebar  -->/ */}
                <Sidebar />
                <div id="content">
                    <Navbar />
                    <p>Account Settings Component.</p>
                </div>
            </div>
        </div>

    );
}
export default settings;