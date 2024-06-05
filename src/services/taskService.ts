import axios from 'axios';
import { Task } from '../store/actions/tasksActions';
const API_URL = 'http://localhost:3001'; 

export const getTasks = (token: string) => {
  return axios.get(`${API_URL}/tasks/`, {headers: {Authorization: `Bearer ${token}` }});
};

export const createTask = (taskData: Task) =>{
  console.log("from service")
  return axios.post(`${API_URL}/tasks/`, taskData);
}



const task = {
  getTasks,
  createTask
}
export default task