import React, { Component } from "react";
import StudentList from './StudentList';
import axios from "axios";
import { API_URL } from ".//constants";



class Home extends Component {
    state = {
        students: []
      };


      componentDidMount() {
        this.resetState();
      }
      
      
    getStudents = () => {
        axios.get(API_URL).then(res => {
            this.setState({ students: res.data })
        });
      };

      resetState = () => {
        this.getStudents();
      };

    render () {return ( 
        <div className="home">
            <h2>Cash Cam</h2>
            <StudentList
              students={this.state.students}
              resetState={this.resetState}
            />
        </div>
     );
}
}
 
export default Home;