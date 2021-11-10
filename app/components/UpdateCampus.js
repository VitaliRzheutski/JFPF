import React from "react";
import { updateCampusTHunk } from "../redux/campuses";
import { connect } from "react-redux";

class UpdateCampus extends React.Component {
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
    this.props.updateCampus(this.props.campus.id, this.state);
    this.setState({
      name: "",
      address: "",
    });
  }
  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }
  render() {
    console.log("UPDATECampus:", this.props);
    return (
      <div id="container">
        <div id="navbar">Update Campus:</div>
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

          <button type="submit" className="btn btn-success">Update Campus</button>
        </form>
      </div>
    );
  }
}

const mapState = (state) => {
  return {
    campus: state.campus,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    updateCampus: (id, campus) => dispatch(updateCampusTHunk(id, campus)),
  };
};

export default connect(mapState, mapDispatchToProps)(UpdateCampus);
