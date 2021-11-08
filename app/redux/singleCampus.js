import axios from "axios";

const SET_SINGLE_CAMPUS = "SET_SINGLE_CAMPUS";

export const setSingleCampus = (campus) => {
  return {
    type: SET_SINGLE_CAMPUS,
    campus,
  };
};

export const fetchSingleCampus = (id) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get(`/api/campuses/${id}`);
    //   console.log("!data!:", data);
      dispatch(setSingleCampus(data));
    } catch (error) {
      console.log(error);
    }
  };
};

const initialState = {};

export default function singleCampusReducer(state = initialState, action) {
  switch (action.type) {
    case SET_SINGLE_CAMPUS:
      return action.campus;
    default:
      return state;
  }
}
