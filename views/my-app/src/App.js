import 'bootstrap/dist/css/bootstrap.min.css'
import logo from './logo.svg';
import './App.css';
import React from 'react';
import Sidebar from './Sidebar'
import LoginModal from './LoginModal';
import {Button} from 'react-bootstrap';
import AdvisorCard from './AdvisorCard';
import AtAGlanceCard from './AtAGlanceCard';
import {BrowserEdge, Camera} from 'react-bootstrap-icons';
import Advisor from './Advisor';
import {BrowserRouter, Routes, Route, Link } from "react-router-dom"
import Home from './Home';

function App() {
  return (
    <BrowserRouter>

    <div>
      <div className="App-header">
      <Sidebar/>
      </div>
      <div className='App-body'>
        <Routes>
        <Route path="/advisor" element={<Advisor />}></Route>
        <Route path="/scan" element={<Home />}></Route>
        <Route path="/analytics" element={<Home />}></Route>
        <Route path="/" element={<Home />}></Route>

        </Routes>
      </div>
      <Button variant="dark" size='lg' href="#scan"> <Camera size="30" className="snap"/></Button>
    </div>
    </BrowserRouter>

  );
}

export default App;
