import logo from './logo.svg';
import './App.css';
import React from 'react';
import Sidebar from './Sidebar'
import 'bootstrap/dist/css/bootstrap.min.css'
import LoginModal from './LoginModal';
import {Button} from 'react-bootstrap';
import AdvisorCard from './AdvisorCard';
import AtAGlanceCard from './AtAGlanceCard';
import {Camera} from 'react-bootstrap-icons';
import Advisor from '../views/my-app/src/Advisor';


function App() {
  return (
    <div className='App'>
      <div className="App-header">
        <Sidebar/>
      </div>
      <div className='App-body'>
        <Advisor/>
        <Button variant="dark" size='lg' href="#scan"> <Camera size="30" className="snap"/></Button>
      </div>

    </div>
  );
}

export default App;
