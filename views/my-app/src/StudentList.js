import React, { Component } from "react";
import { Table } from "reactstrap";

class StudentList extends Component {
    render() {
      const students = this.props.students;
      return (
        <Table light>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Document</th>
              <th>Phone</th>
              <th>Registration</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {!students || students.length <= 0 ? (
              <tr>
                <td colSpan="6" align="center">
                  <b>Ops, no one here yet</b>
                </td>
              </tr>
            ) : (
              students.map(student => (
                <tr key={student.pk}>
                  <td>{student.name}</td>
                  <td>{student.email}</td>
                  <td>{student.document}</td>
                  <td>{student.phone}</td>
                  <td>{student.registrationDate}</td>
                </tr>
              ))
            )}
          </tbody>
        </Table>
      );
    }
  }
  
  export default StudentList;