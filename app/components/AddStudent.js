import React from "react";

export class AddStudent extends React.Component {
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
    this.props.createNewStudent(this.state);
    this.setState({
      firstName: "",
      lastName: "",
      email: "",
    });
  }
  // extract the current value from event.target.value, and set that value on state.
  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }
  render() {
    // console.log("this.props from ADDSTUDENT:", this.props);
    return (
      <div id="container">
        <div id="navbar">Add new Student:</div>
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

          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}
