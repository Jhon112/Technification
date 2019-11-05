import React from 'react';
import Sidebar from './components/sidebar';
import Navbar from './components/Navbar';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';

function App() {
  return (
    < div className = "App container-fluid" >
      <div className="row">
        <Navbar />
        <Sidebar />
      </div>
    </div>
  );
}

export default App;
