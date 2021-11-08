import { combineReducers } from 'redux'
import campusesReducer from './campuses'
import studentsReducer from './students'
import singleStudentReduser from './singleStudent'
import singleCampusReducer from './singleCampus'

const appReducer = combineReducers({
  campuses: campusesReducer,
  students: studentsReducer,
  student: singleStudentReduser,
  campus: singleCampusReducer
})

export default appReducer
