// src/store/reducers/tasksReducer.ts

import { ADD_TASK, DELETE_TASK, TOGGLE_COMPLETE, UPDATE_TASK } from '../actions/tasksActions';

const initialState = {
  tasks: [],
};

const tasksReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case ADD_TASK:
      return {
        ...state,
        tasks: [...state.tasks, action.payload],
      };
    case DELETE_TASK:
      return {
        ...state,
        tasks: state.tasks.filter((_, index) => index !== action.payload),
      };
    case TOGGLE_COMPLETE:
      return {
        ...state,
        tasks: state.tasks.map((task: any, index) =>
          index === action.payload ? { ...task, completed: !task.completed } : task
        ),
      };
    case UPDATE_TASK:
      const { taskId, updatedTask } = action.payload;
      return {
        ...state,
        tasks: state.tasks.map((task, index) => (index === taskId ? updatedTask : task)),
      };
    default:
      return state;
  }
};

export default tasksReducer;
