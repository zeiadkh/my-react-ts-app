
import { REGISTER_SUCCESS, LOGIN_SUCCESS, LOGOUT } from '../actions/authActions';

const initialState = {
  token: null,
};

const authReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case REGISTER_SUCCESS:
    case LOGIN_SUCCESS:
      return {
        ...state,
        token: action.payload,
      };
    case LOGOUT:
      return {
        ...state,
        token: null,
      };
    default:
      return state;
  }
};

export default authReducer;
