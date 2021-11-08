import React from "react";

export class AddCampus extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      address: "",
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  handleSubmit(event) {
    event.preventDefault();
    this.props.addNewCampus(this.state);
    this.setState({
      name: "",
      address: "",
    });
  }
  // extract the current value from event.target.value, and set that value on state.
  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }
  render() {
    console.log("this.props from ADDCAMPUS:", this.props);
    return (
      <div id="container">
        <div id="navbar">Add new Campus:</div>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            name="name"
            value={this.state.name}
            onChange={this.handleChange}
          />

          <label htmlFor="address">Address:</label>
          <input
            type="text"
            name="address"
            value={this.state.address}
            onChange={this.handleChange}
          />

          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}
