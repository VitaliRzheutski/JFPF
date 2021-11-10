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
    // this.props.addCampus();
  }

  render() {
    const campuses = this.props.campuses;
    // console.log("campuses!:", campuses);
    // console.log("!!!!:", this.props);
    return (
      <div>
        <main>
          <h1>Welcome to view all Campuses:</h1>
        </main>
        <div >
            <AddCampus
          campuses={this.props.campuses}
          addNewCampus={this.props.addCampus}
        />
          </div>
        <div className='container' >
          
          <div className="row my-custom-row justify-content-center align-items-center">
            {Array.isArray(campuses)
              ? campuses.map((campus) => (
                <div className="col-sm-4" key={campus.id}><div className="p-3 border bg-light">

                  <Link to={`/campuses/${campus.id}`} key={campus.id}>
                    <img src={campus.imageUrl} />
                    <p>{campus.name}</p>
                    <p>{campus.description}</p>
                    <p>{campus.address}</p>
                  </Link>
                  <button
                    type="button"
                    className="button btn btn-danger"
                    onClick={() => this.props.deleteCampus(campus.id)}
                  >
                    DELETE
                  </button>
                </div></div>
              ))
              : null}
          </div>

        </div>

        

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
