import React, { createContext, useReducer } from 'react';

export const TaskContext = createContext();
export const TaskReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TASK':
      return [...state, action.payload];
    case 'DELETE_TASK':
      return state.filter((task) => task.id !== action.payload);
    case 'TASK_COMPLETE':
      return state.filter((task) => task.id === action.payload);
    default:
      return state;
  }
};

const initialState = [
  // ***** MORNING *****
  {
    id: 1,
    task: 'Wake up at 5.30 AM.',
    complete: false,
    time: 'morning',
    img: '/HomeAssets/WakeUpImg.png',
  },
  // ***** AFTERNOON *****
  {
    id: 2,
    task: 'Show your gratitude to God.',
    complete: false,
    time: 'afternoon',
    img: '/HomeAssets/WakeUpImg.png',
  },
  // ***** NIGHT *****
  {
    id: 3,
    task: 'Go to bed',
    complete: false,
    time: 'night',
    img: '/HomeAssets/GratitudeImg.png',
  },
];
function TaskContextProvider({ children }) {
  const [state, dispatch] = useReducer(TaskReducer, initialState);
  console.log(state);
  return (
    <TaskContext.Provider value={{ state, dispatch }}>
      {children}
    </TaskContext.Provider>
  );
}

export default TaskContextProvider;
