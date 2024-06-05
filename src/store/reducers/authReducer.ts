import { LOGIN_SUCCESS, LOGOUT } from '../actions/authActions';

const initialState = {
  token: null,
};

const authReducer = (state = initialState, action: any) => {
  console.log(action.type, action.payload)
  switch (action.type) {
    // case REGISTER_SUCCESS:
    case LOGIN_SUCCESS:
      console.log("case login", action.payload)
      localStorage.setItem("token", action.payload)
      return {
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
