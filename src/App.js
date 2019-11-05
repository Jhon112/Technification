import React from 'react';
import Sidebar from './components/sidebar';
import Navbar from './components/Navbar';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';

function App() {
  return (
    < div className = "App container-fluid" >
      <div>
        <Navbar />
      </div>
      <div className="row layout">
        < div className = "col-md-3 categories-container" >
          < Sidebar / >
        </div>
        <div className="col-md-9">
          {/* <Content /> */}
        </div>
      </div>
    </div>
  );
}

export default App;
