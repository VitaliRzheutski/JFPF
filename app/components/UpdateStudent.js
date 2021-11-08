import React from "react";
import { updateStudentThunk } from "../redux/students";
import { connect } from "react-redux";

class UpdateStudent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      lastName: "",
      email: "",
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  handleSubmit(event) {
    event.preventDefault();
    this.props.updateStudent(this.props.student.id, this.state);
    this.setState({
      firstName: "",
      lastName: "",
      email: "",
    });
  }
  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }
  render() {
    console.log("UPDATESTUDENT:", this.props);
    return (
      <div id="container">
        <div id="navbar">Update Student:</div>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="firstName">FirtsName:</label>
          <input
            type="text"
            name="firstName"
            value={this.state.firstName}
            onChange={this.handleChange}
          />

          <label htmlFor="lastName">LastName:</label>
          <input
            type="text"
            name="lastName"
            value={this.state.lastName}
            onChange={this.handleChange}
          />
          <label htmlFor="email">Email:</label>
          <input
            type="text"
            name="email"
            value={this.state.email}
            onChange={this.handleChange}
          />

          <button type="submit">EDIT!</button>
        </form>
      </div>
    );
  }
}

const mapState = (state) => {
  return {
    student: state.student,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    updateStudent: (id, student) => dispatch(updateStudentThunk(id, student)),
  };
};

export default connect(mapState, mapDispatchToProps)(UpdateStudent);
