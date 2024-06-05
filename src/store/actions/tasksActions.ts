import task from "../../services/taskService";

export const ADD_TASK = 'ADD_TASK';
export const DELETE_TASK = 'DELETE_TASK';
export const TOGGLE_COMPLETE = 'TOGGLE_COMPLETE';
export const UPDATE_TASK = 'UPDATE_TASK'; 
export const GET_TASKS = "GET_TASKS"

export type Task = {
  title: string;
  description: string;
  category: string;
  dueDate: string
}
export const addTask = (task: Task) => ({
  type: ADD_TASK,
  payload: task,
});

export const deleteTask = (taskId: number) => ({
  type: DELETE_TASK,
  payload: taskId,
});

export const toggleComplete = (taskId: number) => ({
  type: TOGGLE_COMPLETE,
  payload: taskId,
});

export const updateTask = (taskId: number, updatedTask: any) => ({
  type: UPDATE_TASK,
  payload: { taskId, updatedTask },
});

export const getTasks = (token: string) => async (dispatch: any) =>{
  try {
    
    const response = await task.getTasks(token)
    dispatch({type: GET_TASKS, payload: response.data})
    console.log(response)
  } catch (error) {
    console.log(error)
  }
}

export const createTask = (taskData: Task) => async(dispatch: any) => {
  console.log("live")
  try {
    console.log("action")
    const response = await task.createTask(taskData)
    const result = response.data
    dispatch({type: ADD_TASK, payload: result})
    console.log(response.data, result)
  } catch (error: any) {
    console.log(error)
    throw new Error(error?.response?.data?.message)
  }
}

