import React, { createContext, useEffect, useReducer } from "react";
import { db } from "../firebase/config";
import useAuthContext from "../hooks/useAuthContext";

export const TaskContext = createContext();
export const TaskReducer = (state, action) => {
  const newState = { ...state };
  switch (action.type) {
    case "ADD_TASK":
      newState.tasks = [...newState.tasks, action.payload];
      return (state = newState);
    case "DELETE_TASK":
      newState.tasks = newState.tasks.filter(
        (task) => task.id !== action.payload
      );
      return (state = newState);
    case "TASK_COMPLETE_STATUS_CHANGE":
      const filteredTask = newState.tasks.find(
        (task) => task.id === action.payload
      );
      filteredTask.complete = !filteredTask.complete;
      return (state = newState);
    case "SELECT_TASK":
      newState.tasks = action.payload;
      return (state = newState);
    case "SET_REWARD":
      newState.tasks?.length > 0 &&
        (newState.reward = 100 / newState.tasks.length);
      return (state = newState);
    case "SET_TOTAL_REWARD":
      newState.totalReward += newState.reward;
      return (state = newState);
    default:
      return state;
  }
};
const initialState = {
  tasks: [],
  reward: 0,
  totalReward: 0,
};

function TaskContextProvider({ children }) {
  const [state, dispatch] = useReducer(TaskReducer, initialState);

  const { user } = useAuthContext();
  console.log(state, "Current State Value");
  useEffect(() => {
    dispatch({ type: "SET_REWARD" });
  }, [state.tasks]);

  useEffect(() => {
    const fetchRoutine = async () => {
      await db
        .collection("routines")
        .doc(user?.uid)
        .onSnapshot((doc) => {
          dispatch({ type: "SELECT_TASK", payload: doc.data()?.activeRoutine });
        });
    };
    fetchRoutine();
  }, [user]);

  return (
    <TaskContext.Provider value={{ state, dispatch }}>
      {children}
    </TaskContext.Provider>
  );
}

export default TaskContextProvider;
