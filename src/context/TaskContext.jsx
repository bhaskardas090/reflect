import React, { createContext, useEffect, useReducer } from "react";
import { db } from "../firebase/config";
import useAuthContext from "../hooks/useAuthContext";

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
      // newState.tasks.filter((task)=>task.complete === true)
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
  console.log("REWARD PER TASK: ", state.reward);
  console.log("TOTAL REWARD: ", state.totalReward);

  const { user } = useAuthContext();
  // ! SETTING THE REWARD PER TASK
  useEffect(() => {
    dispatch({ type: "SET_REWARD" });
  }, [state.tasks]);
  // ! FETCHING ROUTINE FROM FIRESTORE
  useEffect(() => {
    const fetchRoutine = async () => {
      await db
        .collection("routines")
        .doc(user?.uid)
        .onSnapshot((doc) => {
          dispatch({
            type: "SELECT_ROUTINE",
            payload: {
              ...state,
              tasks: doc.data()?.activeRoutine,
              reward: doc.data()?.reward,
              totalReward: doc.data()?.totalReward,
            },
          });
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
