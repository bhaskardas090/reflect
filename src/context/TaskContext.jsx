import React, { createContext, useEffect, useReducer } from "react";

export const TaskContext = createContext();
export const TaskReducer = (state, action) => {
  const newState = { ...state };
  switch (action.type) {
    case "ADD_TASK":
      return (state = action.payload);
    case "DELETE_TASK":
      return (state = action.payload);
    case "TASK_COMPLETE_STATUS_CHANGE":
      return (state = action.payload);
    case "SELECT_ROUTINE":
      return (state = action.payload);
    case "SET_REWARD":
      newState.tasks?.length > 0 &&
        (newState.reward = 100 / newState.tasks.length);
      return (state = newState);
    case "SET_TOTAL_REWARD":
      newState.totalReward += newState.reward;
      return (state = newState);
    case "RESET_STATE":
      return (state = action.payload);
    default:
      return state;
  }
};
const initialState = {
  tasks: [],
  reward: 0,
  totalReward: 0,
  loading: false,
};
function TaskContextProvider({ children }) {
  const [state, dispatch] = useReducer(TaskReducer, initialState);

  // ! SETTING THE REWARD PER TASK
  useEffect(() => {
    dispatch({ type: "SET_REWARD" });
  }, [state.tasks]);

  return (
    <TaskContext.Provider value={{ state, dispatch }}>
      {children}
    </TaskContext.Provider>
  );
}

export default TaskContextProvider;
