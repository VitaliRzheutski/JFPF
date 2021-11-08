import axios from "axios";
import { fetchSingleCampus } from "./singleCampus";
//action type
const SET_CAMPUSES = "SET_CAMPUSES";
const ADD_CAMPUS = "ADD_CAMPUS";
const DELETE_CAMPUS = "DELETE_CAMPUS";
const UPDATE_CAMPUS = "UPDATE_CAMPUS";

//action creator
export const setCampuses = (campuses) => {
  return {
    type: SET_CAMPUSES,
    campuses,
  };
};
export const addCampus = (campus) => {
  return {
    type: ADD_CAMPUS,
    campus,
  };
};
export const deleteCampus = (id) => {
  return {
    type: DELETE_CAMPUS,
    id,
  };
};
export const updateCampus = (campus) => {
  return {
    type: UPDATE_CAMPUS,
    name: campus.name,
    address: campus.address,
  };
};

export const fetchCampuses = () => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get("/api/campuses");
      // console.log('data:', data);
      dispatch(setCampuses(data));
    } catch (error) {
      console.log(console.error());
    }
  };
};
export const addCampusThunk = (campus) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.post("/api/campuses", campus);
      dispatch(addCampus(data));
    } catch (error) {
      console.log(error);
    }
  };
};
export const deleteCampusThunk = (id) => {
  return async (dispatch) => {
    try {
      await axios.delete(`/api/campuses/${id}`);
      dispatch(deleteCampus(id));
    } catch (error) {
      console.log(error);
    }
  };
};
export const updateCampusTHunk = (id, name, address) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.put(`/api/campuses/${id}`, name, address);
      dispatch(updateCampus(data));
      dispatch(fetchSingleCampus(id));
    } catch (error) {
      console.log(error);
    }
  };
};

//initial state
const initialState = [];
// Take a look at app/redux/index.js to see where this reducer is
// added to the Redux store with combineReducers

//reducer
export default function campusesReducer(state = initialState, action) {
  switch (action.type) {
    case SET_CAMPUSES:
      return action.campuses;
    case ADD_CAMPUS:
      return [...state, action.campus];
    case DELETE_CAMPUS:
      return state.filter((campus) => campus.id !== action.id);
    case UPDATE_CAMPUS:
      return {
        ...state,
        name: action.name,
        address: action.address
      }
    default:
      return state;
  }
}
