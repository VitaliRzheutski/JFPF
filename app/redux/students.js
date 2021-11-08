import axios from "axios";
import { fetchSingleStudent } from "./singleStudent";

//action type
const SET_STUDENTS = "SET_STUDENTS";
const ADD_NEW_STUDENT = "ADD_NEW_STUDENT";
const DELETE_STUDENT = "DELETE_STUDENT";
const UPDATESTUDENT = "UPDATESTUDENT";

//action creator
export const setStudents = (students) => {
  return {
    type: SET_STUDENTS,
    students,
  };
};
export const addNewStudent = (student) => {
  return {
    type: ADD_NEW_STUDENT,
    student,
  };
};
export const deleteStudent = (id) => {
  return {
    type: DELETE_STUDENT,
    id,
  };
};
export const updateStudent = (student) => {
  return {
    type: UPDATESTUDENT,
    firstName: student.firstName,
    lastName: student.lastName,
    email: student.email,
  };
};

export const fetchStudents = () => {
  //thunk
  return async (dispatch) => {
    try {
      const { data } = await axios.get("/api/students");
      // console.log('dataStudents:',data)
      dispatch(setStudents(data));
    } catch (error) {
      console.log(error);
    }
  };
};
export const addNewStudentThunk = (student) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.post("/api/students", student);
      dispatch(addNewStudent(data));
    } catch (error) {
      console.log(error);
    }
  };
};
export const deleteStudentThunk = (id) => {
  return async (dispatch) => {
    try {
      await axios.delete(`/api/students/${id}`);
      // console.log('THUNK!!!!!')
      dispatch(deleteStudent(id));
    } catch (error) {
      console.log(error);
    }
  };
};
export const updateStudentThunk = (id, firstName, lastName, email) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.put(`/api/students/${id}`, firstName, lastName, email);
      console.log("DATA!:", data)
      dispatch(updateStudent(data));
      dispatch(fetchSingleStudent(id))
    } catch (error) {
      console.log(error);
    }
  };
};
const initialState = [];
// Take a look at app/redux/index.js to see where this reducer is
// added to the Redux store with combineReducers
//reducer
export default function studentsReducer(state = initialState, action) {
  switch (action.type) {
    case SET_STUDENTS:
      return action.students;
    case ADD_NEW_STUDENT:
      return [...state, action.student];
    case DELETE_STUDENT:
      return state.filter((student) => student.id !== action.id);
    case UPDATESTUDENT:
      return {
        ...state,
        firstName: action.firstName,
        lastName: action.lastName,
        email: action.email,
      };
    default:
      return state;
  }
}
