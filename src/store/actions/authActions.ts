
import authService from '../../services/authService';

export const REGISTER_SUCCESS = 'REGISTER_SUCCESS';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGOUT = 'LOGOUT';


interface RegistrationData {
    username: string;
    password: string;
}

export const registerSuccess = () => ({
  type: REGISTER_SUCCESS,
});

export const loginSuccess = (token: string) => ({
  type: LOGIN_SUCCESS,
  payload: token,
});

export const logout = () => ({
  type: LOGOUT,
});

export const register = (data: RegistrationData) => async (dispatch: any) => {
  try {
    await authService.register(data);
    dispatch(registerSuccess());
  } catch (error: any) {
    throw new Error(error);
  }
};

export const login = (data: RegistrationData) => async (dispatch: any) => {
  try {
    const response = await authService.login(data);
    const token = response.data.token;
    dispatch(loginSuccess(token));
  } catch (error: any) {
    throw new Error(error);
  }
};
