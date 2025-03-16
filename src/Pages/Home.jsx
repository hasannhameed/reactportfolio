import React from 'react'
import Sidebar from '../Components/Sidebar/Sidebar';
import Header from '../Components/Header/Header';
import Resume from '../Components/Resume/Resume';

function Home() {
  return (
    <div>
        <div className="container">
        <div className="row">
            <div className="col-md-1  p-3 d-none d-md-block"></div>
            <div className="col-md-3 border p-3 ">
                <Sidebar />
            </div>
            <div className="col-md-7 border p-3">
              <Header/>
              <Resume />
            </div>
            <div className="col-md-1  p-3  d-none d-md-block"></div>
        </div>
        </div>
    </div>
  )
}

export default Home;
