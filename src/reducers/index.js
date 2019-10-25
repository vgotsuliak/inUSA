import { GET_IP_INFO_SUCCESS } from '../actions/types';

const initState = {
  location: null,
  us: false,
  distance: 0,
};

const reducer = (state = initState, action) => {
  switch (action.type) {
    case GET_IP_INFO_SUCCESS:
      return {
        ...state,
        location: action.payload.location,
        us: action.payload.us,
        distance: action.payload.distance,
      };
    default:
      return state;
  }
}

export default reducer;