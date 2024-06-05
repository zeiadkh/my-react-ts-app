import axios from 'axios';
const API_URL = 'http://localhost:3001'; 

interface RegistrationData {
  username: string;
  password: string;
  confirmPassword: string;
}

interface LoginData {
  username: string;
  password: string;
}

export const register = (data: RegistrationData) => {
  return axios.post(`${API_URL}/users/register`, data);
};

export const login = (data: LoginData) => {
  return axios.post(`${API_URL}/users/login`, data);
};


const auth = {
  register,
  login
}
export default auth