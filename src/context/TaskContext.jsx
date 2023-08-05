import React, { createContext, useReducer, useState } from 'react';

export const TaskContext = createContext();
export const TaskReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TASK':
      return [...state, action.payload];
    case 'DELETE_TASK':
      return state.filter((task) => task.id !== action.payload);
    case 'TASK_COMPLETE':
      return state.filter((task) => task.id === action.payload);
    case 'TASK_COMPLETE_STATUS_CHANGE':
      const filteredTask = state.find((task) => task.id === action.payload);
      filteredTask.complete = !filteredTask.complete;
      return state;
    case 'SELECT_TASK':
      console.log(action.payload);
      return (state = action.payload);
    default:
      return state;
  }
};
const initialState = [];

function TaskContextProvider({ children }) {
  const [state, dispatch] = useReducer(TaskReducer, initialState);
  console.log(state, 'Current State Value');
  return (
    <TaskContext.Provider value={{ state, dispatch }}>
      {children}
    </TaskContext.Provider>
  );
}

export default TaskContextProvider;
