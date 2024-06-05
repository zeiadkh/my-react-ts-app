import auth from "../../services/authService";

export const REGISTER_SUCCESS = "REGISTER_SUCCESS";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGOUT = "LOGOUT";

interface RegistrationData {
  username: string;
  password: string;
  confirmPassword: string;
}
interface LoginData{
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
    await auth.register(data);
    dispatch(registerSuccess());
  } catch (error: any) {
    console.log(error)
    throw new Error(error);
  }
};

export const login = (data: LoginData) => async (dispatch: any) => {
  try {
    const response = await auth.login(data);
    const token = response?.data?.access_token;
    console.log(token, response)
    dispatch(loginSuccess(token));
  } catch (error: any) {
    console.log(error?.response?.data?.message)
    throw new Error(error.response.data.message);
  }
};
