import { GET_IP_INFO_SUCCESS } from '../actions/types';

const initState = {
  ip: null,
};

const reducer = (state = initState, action) => {
  switch (action.type) {
    case GET_IP_INFO_SUCCESS:
      return {
        // todo populate state here 
        ...state,
      };
    default:
      return state;
  }
}

export default reducer;