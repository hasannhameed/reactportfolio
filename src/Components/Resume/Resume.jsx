import React from 'react'
import edu from '../../assets/ecucation.png'
import deg from '../../assets/deg.png'
import './Resume.css'

const Resume = () => {
    return(
        <div className="row p-3">
            
                <div className="col-12 col-md-6 bg-light p-4 min-vh-100">
                    <h3>Resume</h3>
                    <div className='col-12 d-flex justify-content-space-between flex-column' >
                        <div className='col-12 d-flex my-3'>
                            <img src={edu} alt={edu} className='rounded-5 img bg-warning'/>
                            <p className='fw-bold m-2 mx-3 fs-5'>Skills history</p>
                        </div>
                        <div className='col-12 d-flex justify-content-space-between flex-column'>
                            <p><span className="dot p-1"></span> <strong>Javascript:</strong> 95%</p>
                            <p><span className="dot p-1"></span> <strong>Java</strong> 95%</p>
                            <p><span className="dot p-1"></span> <strong>CSS</strong> 90%</p>
                            <p><span className="dot p-1"></span> <strong>HTML</strong>90%</p>
                            <p><span className="dot p-1"></span> <strong>LinkedIn:</strong></p>
                        </div >
                        
                    </div>
                </div>
                <div className="col-12 col-md-6 bg-light p-4 min-vh-100">
                    <h3 className='text-light'>Resume</h3>
                    <div className='col-12 d-flex justify-content-space-between flex-column'  >
                        <div className='col-12 d-flex my-3'>
                            <img src={deg} alt={deg} className='rounded-5 img bg-warning'/>
                            <p className='fw-bold m-2 mx-3 fs-5'>Education history</p>
                        </div>
                        <div className='col-12 d-flex justify-content-space-between flex-column'>
                            <p>
                                <span className="dot p-1"></span> 
                                <strong>Graduation:</strong> 
                                <span>Usmaniya University 2021-2024</span>
                                
                            </p>
                            <p><span className="dot p-1"></span> <strong>Java</strong> 95%</p>
                            <p><span className="dot p-1"></span> <strong>CSS</strong> 90%</p>
                            <p><span className="dot p-1"></span> <strong>HTML</strong>90%</p>
                            <p><span className="dot p-1"></span> <strong>LinkedIn:</strong></p>
                        </div >
                    </div>
                </div>
           
        </div>
    )
}

export default Resume;