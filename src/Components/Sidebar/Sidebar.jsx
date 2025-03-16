import React from 'react';
import './Sidebar.css';
import img from '../../assets/1869436.png';
import { FaDownload } from "react-icons/fa";  // ✅ Correct Import

const Sidebar = () => {
    return (
        <>
        <div className="col-12 min-vh-80 bg-light text-dark py-4">
            <div className="col-12 p-3">
                <p className='fw-bold fs-3 m-0'>Hasan Hameed</p>
                <p>Web Developer</p>
            </div>
            <div className="col-12 p-0 m-0 profile"></div>
            <div className="col-12 px-3">
                <div className="col-12 p-2 m-0">
                    <div className="profile-container">
                        <img className="profile-image" src={img} alt="Profile" />
                    </div>
                    <div className="col-10 dot-container">
                        <p><span className="dot p-1"></span> <strong>Name:</strong> Hasan Hameed</p>
                        <p><span className="dot p-1"></span> <strong>Birthday:</strong> 2002/Jan/31</p>
                        <p><span className="dot p-1"></span> <strong>Job:</strong> Intern</p>
                        <p><span className="dot p-1"></span> <strong>Email:</strong> hasan@gmail.com</p>
                        <p><span className="dot p-1"></span> <strong>LinkedIn:</strong></p>
                    </div>
                    <div className='col-12 d-flex justify-content-center'>
                        <button className='btn btn-warning rounded-5'>
                           <span className=' px-2  rounded-5'> Download CV </span><span className='faicon px-2 rounded-5'><FaDownload /></span> 
                        </button>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
};

export default Sidebar;
