import logo from './logo.svg';
import Navbar from './Navbar';
import Home from './Home';
import Create from './Create';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

function App() {
    
    return (
    <BrowserRouter>
    <div className="App">
      <Navbar></Navbar>
      <div className="content">
        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route exact path="/create" element={<Create />} />
        </Routes>
      </div>
    </div>
    </BrowserRouter>  
  );
}

export default App;
