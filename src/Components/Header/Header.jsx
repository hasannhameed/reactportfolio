import React from 'react'
import { FaHome } from 'react-icons/fa'
import { FaTelegram,FaFacebook,FaYoutube,FaLinkedinIn,FaTwitter } from 'react-icons/fa'
import "./Header.css"
import tele from '../../assets/tele.png'


const Header = () => {
    return (
        <div className="row p-3">
            
            <div className="col-sm-7 left-header bg-light d-flex justify-content-md-start rounded-start-3">
                <div className="p-3 px-4 bg-warning home rounded-start-3"><FaHome/></div>
                <div className="px-2 d-flex align-items-center align-items-center">
                    <a href="#Resume">Resume</a>
                </div>
                <div className="px-2 d-flex align-items-center align-items-center">
                    <a href="#Portfolio">Portfolio</a>
                </div>
                <div className="px-2 d-flex align-items-center align-items-center">
                    <a href="#Blog">Blog</a>
                </div>
                <div className="px-2 d-flex align-items-center align-items-center">
                    <a href="#Contact">Contact</a>
                </div>
            </div>
            <div className="col-sm-5 bg-light p-3 rounded-end-3 d-flex justify-content-end">
                <div className="px-2 d-flex align-items-center align-items-center"><FaFacebook /></div>
                <div className="px-2 d-flex align-items-center align-items-center"><FaTwitter/></div>
                <div className="px-2 d-flex align-items-center align-items-center"><FaLinkedinIn/></div>
                <div className="px-2 d-flex align-items-center align-items-center"><FaYoutube/></div>
                <div className="px-2 d-flex align-items-center align-items-center">
                    <button className='btn btn-warning rounded-5'>
                        <span className='fw-bold'>Hire me</span>  
                        <span className='icon ps-3' >
                            <img src={tele} alt={tele} className='rounded-5 bg-light p-1 w-25' />
                        </span>
                    </button>
                </div>
            </div>
            
        </div>
    )
}

export default Header;