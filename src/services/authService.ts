
import axios from 'axios';

const API_URL = 'http:localhost:3000'; // Replace with your API URL

interface RegistrationData {
  username: string;
  password: string;
}

interface LoginData {
  username: string;
  password: string;
}

const register = (data: RegistrationData) => {
  return axios.post(`${API_URL}/register`, data);
};

const login = (data: LoginData) => {
  return axios.post(`${API_URL}/login`, data);
};

export default {
  register,
  login,
};
