import React from "react";
import { connect } from "react-redux";
import { fetchSingleCampus } from "../redux/singleCampus";
import StudentForSingleCampus from "./StudentForSingleCampus";
import { Link } from "react-router-dom";

class SingleStudent extends React.Component {
  componentDidMount() {
    const campusId = this.props.match.params.campusId;
    this.props.loadSingleCampus(campusId);
  }
  render() {
    console.log("this.propsFROMSingleCAMPUS", this.props);
    const campus = this.props.singleCampus;
    const students = this.props.singleCampus.students;
    // console.log("students", students);
    return (
      <div>
        <main>
          <h1>Campus</h1>
        </main>
        <div className="card">
          <img src={campus.imageUrl} />
          <div className="container">
            <h4>{campus.name}</h4>
            <p>{campus.address}</p>
            <p>{campus.description}</p>
            
          </div>
        </div>
              <StudentForSingleCampus studentsProp={students} />
              {/* <UpdateCampus /> */}
              <Link to={`/campuses/${campus.id}/updateCampus`} className="link">
          <button
            type="button"
            className="updateStudent btn btn-success"
          
          >
            Edit campus
          </button>
        </Link>
      </div>
    );
  }
}
const mapState = (state) => {
  return {
    singleCampus: state.campus,
  };
};
const mapDispatch = (dispatch) => {
  return {
    loadSingleCampus: (id) => dispatch(fetchSingleCampus(id)),
  };
};
export default connect(mapState, mapDispatch)(SingleStudent);
