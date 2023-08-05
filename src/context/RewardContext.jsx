import React, { createContext, useReducer } from 'react';

export const RewardContext = createContext();

export const rewardContext = (state, action) => {
  switch (action.type) {
    case 'ADD_REWARD':
      return (state.progress += action.payload);
    default:
      break;
  }
};

function RewardContextProvider({ children }) {
  const [state, dispatch] = useReducer(rewardReducer, { progress: 0 });
  return (
    <RewardContext.Provider value={{ state, dispatch }}>
      {children}
    </RewardContext.Provider>
  );
}

export default RewardContext;
