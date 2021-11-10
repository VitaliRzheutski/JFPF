import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Route } from "react-router-dom";
import AllCampuses from "./AllCampuses";
import AllStudents from "./AllStudents";
import SingleCampus from "./SingleCampus";
import SingleStudent from "./SingleStudent";
import HomePage from "./HomePage";
import Navbar from "./NavBar";
import { AddStudent } from "./AddStudent";
import UpdateStudent from "./UpdateStudent";
import UpdateCampus from "./UpdateCampus";
import { AddCampus } from "./AddCampus";
const Routes = () => {
  return (
    <Router>
      <div>
        <nav>
          {" "}
          <Navbar />
        </nav>
        
        <Route exact path="/" component={HomePage} />
        <Route exact path="/campuses" component={AllCampuses} />

        <Route  path="/campuses/:campusId" component={SingleCampus} />
        <Route  path ="/createCampus" component={AddCampus} />

        <Route exact path="/students" component={AllStudents} />
        <Route path="/students/:studentId" component={SingleStudent} />
        <Route path="/createStudent" component={AddStudent} />
        <Route
          path="/students/:studentId/updateStudent"
          component={UpdateStudent}
        />
        
        <Route
          path="/campuses/:campusId/updateCampus"
          component={UpdateCampus}
        />
        
      </div>
    </Router>
  );
};

export default Routes;
