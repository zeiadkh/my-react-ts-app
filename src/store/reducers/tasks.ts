import {
  ADD_TASK,
  DELETE_TASK,
  GET_TASKS,
  TOGGLE_COMPLETE,
  UPDATE_TASK,
} from "../actions/tasksActions";

const initialState = {
  tasks: [],
};

const tasksReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case GET_TASKS: 
      return{
        ...state,
        tasks: [...state.tasks, action.payload]
      }
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
          index === action.payload
            ? { ...task, completed: !task.completed }
            : task
        ),
      };
    case UPDATE_TASK:
      const { taskId, updatedTask } = action.payload;
      return {
        ...state,
        tasks: state.tasks.map((task, index) =>
          index === taskId ? updatedTask : task
        ),
      };
    default:
      return state;
  }
};

export default tasksReducer;
