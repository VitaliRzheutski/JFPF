import axios from "axios";

const SET_SINGLE_STUDENT = "SET_SINGLE_STUDENT";

export const setSingleStudent = (student) => {
  return {
    type: SET_SINGLE_STUDENT,
    student,
  };
};

export const fetchSingleStudent = (id) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get(`/api/students/${id}`);
      // console.log('data!!!', data)
      dispatch(setSingleStudent(data));
    } catch (error) {
      console.log(error);
    }
  };
};

const initialState = {};

export default function singleStudentReduser (state = initialState, action){
  switch (action.type) {
    case SET_SINGLE_STUDENT:
      return action.student;
    default:
      return state;
  }
}
