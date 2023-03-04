import logo from './logo.svg';
import Navbar from './Navbar';
import Home from './Home';
import { API_URL } from ".//constants";
import axios from "axios";


function App() {

  axios.get(API_URL).then(res => {
    console.log(res.data)});
    
    return (
    <div className="App">
      <Navbar></Navbar>
      <div className="content">
        <Home />
      </div>
    </div>
  );
}

export default App;
