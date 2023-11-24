// src/store/actions/tasksActions.ts

export const ADD_TASK = 'ADD_TASK';
export const DELETE_TASK = 'DELETE_TASK';
export const TOGGLE_COMPLETE = 'TOGGLE_COMPLETE';
export const UPDATE_TASK = 'UPDATE_TASK'; // Add this line

export const addTask = (task: any) => ({
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
