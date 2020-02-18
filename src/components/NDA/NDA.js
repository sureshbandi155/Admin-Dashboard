import React from 'react';
import Sidebar from '../Sidebar/Sidebar';
import Navbar from '../Navbar/Navbar';


// import classes from './Projects.module.css';

const NDA = (props) => {
    return (
        <div>
        <div className="wrapper">
            {/* <!-- Sidebar  -->/ */}
            <Sidebar />
            <div id="content">
                <Navbar />
             <p>NDA Component.</p>
            </div>
        </div>
    </div>

    );
}
export default NDA;