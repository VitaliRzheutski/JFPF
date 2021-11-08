import React from "react";
import { Link } from "react-router-dom";

export class StudentForSingleCampus extends React.Component {
  render() {
    // console.log("!NNEWthis.props:", this.props);
    const studentsIntihisCampus = this.props.studentsProp;
    // console.log("studentsIntihisCampus:", studentsIntihisCampus);
    return (
      <div>
        <div>Student form this Campus:</div>
        {studentsIntihisCampus &&
          studentsIntihisCampus.map((singleStudent) => (
            <Link to={`/students/${singleStudent.id}`} key={singleStudent.id}>
              <div className="singleStudenntFromCampus">
                <ul>
                    <li>{singleStudent.firstName} {singleStudent.lastName}</li>
                </ul>
                  
              </div>
            </Link>
          ))}
      </div>
    );
  }
}
export default StudentForSingleCampus;
