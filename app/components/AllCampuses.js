import React from "react";
import { connect } from "react-redux";
import {
  fetchCampuses,
  addCampusThunk,
  deleteCampusThunk,
} from "../redux/campuses";
import { Link } from "react-router-dom";
import { AddCampus } from "./AddCampus";

// Notice that we're exporting the AllCampuses component twice. The named export
// (below) is not connected to Redux, while the default export (at the very
// bottom) is connected to Redux. Our tests should cover _both_ cases.
export class AllCampuses extends React.Component {
  componentDidMount() {
    this.props.loadCampuses();
    this.props.addCampus();
  }

  render() {
    const campuses = this.props.campuses;
    console.log("campuses!:", campuses);
    console.log("!!!!:", this.props);
    return (
      <div>
        <main>
          <h1>Welcome to view all Campuses:</h1>
        </main>

        <div className="mainCard">
          {Array.isArray(campuses)
          ? campuses.map((campus) => (
            <div className="st" key={campus.id}>
              <Link to={`/campuses/${campus.id}`} key={campus.id}>
                <div className="card">
                  <img src={campus.imageUrl} />
                  <div className="container">
                    <p>{campus.name}</p>
                    <p>{campus.description}</p>
                    <p>{campus.address}</p>
                  </div>
                </div>
              </Link>
              <button
                type="button"
                className="button"
                onClick={() => this.props.deleteCampus(campus.id)}
              >
                DELETE
              </button>
            </div>
          ))
        :null}
        </div>
        <AddCampus
          campuses={this.props.campuses}
          addNewCampus={this.props.addCampus}
        />
      </div>
    );
  }
}

const mapState = (state) => {
  return {
    campuses: state.campuses,
  };
};

const mapDispatch = (dispatch) => {
  return {
    loadCampuses: () => dispatch(fetchCampuses()),
    addCampus: (campus) => dispatch(addCampusThunk(campus)),
    deleteCampus: (id) => dispatch(deleteCampusThunk(id)),
  };
};

export default connect(mapState, mapDispatch)(AllCampuses);
