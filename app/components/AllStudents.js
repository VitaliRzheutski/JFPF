import React from "react";
import { connect } from "react-redux";
import {
  fetchStudents,
  addNewStudentThunk,
  deleteStudentThunk,
} from "../redux/students";
import { Link } from "react-router-dom";
import { AddStudent } from "./AddStudent";

export class AllStudents extends React.Component {
  componentDidMount() {
    this.props.loadStudents();
    this.props.createNewStudent();
    this.props.deleteStudent();
  }
  render() {
    console.log("1this.props:", this.props);
    const students = this.props.students;
    console.log("students:", students);
    //  const studentArr = Object.keys(students);
    //  console.log('studentArr', studentArr)

    //after clicking go to AllStudents i'm getting an Object,but before an array
    return (
      <div>
        <main>
          <h1>Welcome to view all Students:</h1>
        </main>
        <div className="mainCard">

          {Array.isArray(students)
            ? students.map((student) => (
                <div className="st" key={student.id}>
                  <Link to={`/students/${student.id}`} key={student.id}>
                    <div className="card">
                      <img src={student.imageUrl} />
                      <p>
                        {student.firstName} {student.lastName}
                      </p>
                      <p>{student.email}</p>
                    </div>
                  </Link>
                  <button
                    type="button"
                    className="button"
                    onClick={() => this.props.deleteStudent(student.id)}
                  >
                    DELETE
                  </button>
                </div>
              ))
            : null}
        </div>

        <AddStudent
          students={students}
          createNewStudent={this.props.createNewStudent}
        />
      </div>
    );
  }
}

const mapState = (state) => {
  return {
    students: state.students,
  };
};

const mapDispatch = (dispatch) => {
  return {
    loadStudents: () => dispatch(fetchStudents()),
    createNewStudent: (student) => dispatch(addNewStudentThunk(student)),
    deleteStudent: (id) => dispatch(deleteStudentThunk(id)),
  };
};

export default connect(mapState, mapDispatch)(AllStudents);
