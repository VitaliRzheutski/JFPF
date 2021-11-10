import React from "react";
import { connect } from "react-redux";
import { fetchSingleStudent } from "../redux/singleStudent";
import { updateStudentThunk } from "../redux/students";
import { Link } from "react-router-dom";
import UpdateStudent from "./UpdateStudent";

class SingleStudent extends React.Component {
  componentDidMount() {
    const studentId = this.props.match.params.studentId;
    this.props.loadSingleStudent(studentId);
    // this.props.updateStudent(this.props.student.id, this.state);
  }
  render() {
    console.log("this.propsFROMSingleStudent:", this.props);
    const student = this.props.singleStudent;
    return (
      <div>
        <main>
          <h1>Student</h1>
        </main>
        <div className="card">
          <img src={student.imageUrl} />
          <div className="container">
            <h4>{student.firstName} {student.lastName}</h4>
            <p>{student.email}</p>
            <p>GPA:{student.gpa}</p>
          </div>
        </div>
        <div className="univerLink">
          Studies at{" "}
          {student.campus ? (
            <Link to={`/campuses/${student.campusId}`} className="link">
              {student.campus.name}
            </Link>
          ) : (
            "Sorry, no campus assigned:("
          )}
        </div>
        <Link to={`/students/${student.id}/updateStudent`} className="link">
          <button
            type="button"
            className="updateStudent btn btn-success"
          
          >
            Edit student
          </button>
        </Link>

      </div>
    );
  }
}

const mapState = (state) => {
  return {
    singleStudent: state.student,
  };
};
const mapDispatch = (dispatch) => {
  return {
    loadSingleStudent: (id) => dispatch(fetchSingleStudent(id)),
    // updateStudent: (id, student) => dispatch(updateStudentThunk(id, student)),
  };
};
export default connect(mapState, mapDispatch)(SingleStudent);
