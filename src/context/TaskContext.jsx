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
    case 'TASK_COMPLETE_STATUS_CHANGE':
      const filteredTask = state.find((task) => task.id === action.payload);
      filteredTask.complete = !filteredTask.complete;
      return state;
    default:
      return state;
  }
};

const studentRoutine = [
  // ***** MORNING *****
  {
    id: 1,
    task: 'Wake up early',
    complete: false,
    time: 'morning',
    img: '/HomeAssets/WakeUpImg.png',
  },
  {
    id: 2,
    task: 'Practice deep breathing or meditation',
    complete: false,
    time: 'morning',
    img: '/HomeAssets/WakeUpImg.png',
  },
  {
    id: 3,
    task: 'Have a healthy breakfast',
    complete: false,
    time: 'morning',
    img: '/HomeAssets/WakeUpImg.png',
  },
  {
    id: 4,
    task: 'Spend some time in nature',
    complete: false,
    time: 'morning',
    img: '/HomeAssets/WakeUpImg.png',
  },
  {
    id: 5,
    task: 'Start your day with a gratitude practice',
    complete: false,
    time: 'morning',
    img: '/HomeAssets/WakeUpImg.png',
  },
  {
    id: 6,
    task: 'Engage in some Creative Activity',
    complete: false,
    time: 'morning',
    img: '/HomeAssets/WakeUpImg.png',
  },
  {
    id: 7,
    task: 'Listen to a motivational podcast ',
    complete: false,
    time: 'morning',
    img: '/HomeAssets/WakeUpImg.png',
  },
  // ***** AFTERNOON *****
  {
    id: 8,
    task: 'Take short breaks between study sessions',
    complete: false,
    time: 'afternoon',
    img: '/HomeAssets/WakeUpImg.png',
  },
  {
    id: 9,
    task: 'Eat a balanced lunch ',
    complete: false,
    time: 'afternoon',
    img: '/HomeAssets/WakeUpImg.png',
  },
  {
    id: 10,
    task: 'Engage in mindfulness exercises',
    complete: false,
    time: 'afternoon',
    img: '/HomeAssets/WakeUpImg.png',
  },
  // ***** NIGHT *****
  {
    id: 11,
    task: 'Finish your academic work and assignments',
    complete: false,
    time: 'night',
    img: '/HomeAssets/GratitudeImg.png',
  },
  {
    id: 12,
    task: 'Limit screen time before bedtime',
    complete: false,
    time: 'night',
    img: '/HomeAssets/GratitudeImg.png',
  },
  {
    id: 13,
    task: 'Practice reading a book',
    complete: false,
    time: 'night',
    img: '/HomeAssets/GratitudeImg.png',
  },
  {
    id: 14,
    task: 'Reflect on your day',
    complete: false,
    time: 'night',
    img: '/HomeAssets/GratitudeImg.png',
  },
  {
    id: 15,
    task: 'Plan for the next day',
    complete: false,
    time: 'night',
    img: '/HomeAssets/GratitudeImg.png',
  },
  {
    id: 16,
    task: 'Connect with friends or family',
    complete: false,
    time: 'night',
    img: '/HomeAssets/GratitudeImg.png',
  },
];
const workingProfessionalRoutine = [
  // ***** MORNING *****
  {
    id: 1,
    task: 'Have a nutritious breakfast',
    complete: false,
    time: 'morning',
    img: '/HomeAssets/WakeUpImg.png',
  },
  {
    id: 2,
    task: 'Engage in some light physical activity',
    complete: false,
    time: 'morning',
    img: '/HomeAssets/WakeUpImg.png',
  },
  {
    id: 3,
    task: 'Review your goals for the day',
    complete: false,
    time: 'morning',
    img: '/HomeAssets/WakeUpImg.png',
  },
  {
    id: 4,
    task: 'Practice affirmations or positive self-talk',
    complete: false,
    time: 'morning',
    img: '/HomeAssets/WakeUpImg.png',
  },
  {
    id: 5,
    task: 'Practice gratitude',
    complete: false,
    time: 'morning',
    img: '/HomeAssets/WakeUpImg.png',
  },
  // ***** AFTERNOON *****
  {
    id: 6,
    task: 'Have a balanced and healthy lunch',
    complete: false,
    time: 'afternoon',
    img: '/HomeAssets/WakeUpImg.png',
  },
  {
    id: 7,
    task: 'Practice deep breathing exercises',
    complete: false,
    time: 'afternoon',
    img: '/HomeAssets/WakeUpImg.png',
  },
  {
    id: 8,
    task: 'Take short breaks to stand up, stretch, or walk around',
    complete: false,
    time: 'afternoon',
    img: '/HomeAssets/WakeUpImg.png',
  },
  // ***** NIGHT *****
  {
    id: 9,
    task: 'Read a book',
    complete: false,
    time: 'night',
    img: '/HomeAssets/GratitudeImg.png',
  },
  {
    id: 10,
    task: 'Create a bedtime ritual, like reducing screen time',
    complete: false,
    time: 'night',
    img: '/HomeAssets/GratitudeImg.png',
  },
  {
    id: 11,
    task: 'Reflect on the day in a journal',
    complete: false,
    time: 'night',
    img: '/HomeAssets/GratitudeImg.png',
  },
  {
    id: 12,
    task: 'Take a Night Walk',
    complete: false,
    time: 'night',
    img: '/HomeAssets/GratitudeImg.png',
  },
  {
    id: 13,
    task: 'Connect with Family and Friends',
    complete: false,
    time: 'night',
    img: '/HomeAssets/GratitudeImg.png',
  },
];
const houseWifeRoutine = [
  // ***** MORNING *****
  {
    id: 1,
    task: 'Wake up early',
    complete: false,
    time: 'morning',
    img: '/HomeAssets/WakeUpImg.png',
  },
  {
    id: 2,
    task: 'Stretch or exercise',
    complete: false,
    time: 'morning',
    img: '/HomeAssets/WakeUpImg.png',
  },
  {
    id: 3,
    task: 'Meditate or practice mindfulness',
    complete: false,
    time: 'morning',
    img: '/HomeAssets/WakeUpImg.png',
  },
  {
    id: 4,
    task: 'Eat a nutritious breakfast',
    complete: false,
    time: 'morning',
    img: '/HomeAssets/WakeUpImg.png',
  },
  {
    id: 5,
    task: 'Practice gratitude',
    complete: false,
    time: 'morning',
    img: '/HomeAssets/WakeUpImg.png',
  },
  // ***** AFTERNOON *****
  {
    id: 6,
    task: 'Practice mindfulness or deep breathing',
    complete: false,
    time: 'afternoon',
    img: '/HomeAssets/WakeUpImg.png',
  },
  {
    id: 7,
    task: 'Engage in a hobby or leisure activity',
    complete: false,
    time: 'afternoon',
    img: '/HomeAssets/WakeUpImg.png',
  },
  {
    id: 8,
    task: 'Connect with people',
    complete: false,
    time: 'afternoon',
    img: '/HomeAssets/WakeUpImg.png',
  },
  // ***** NIGHT *****
  {
    id: 9,
    task: 'Connect with nature',
    complete: false,
    time: 'night',
    img: '/HomeAssets/GratitudeImg.png',
  },
  {
    id: 10,
    task: 'Plan your day',
    complete: false,
    time: 'night',
    img: '/HomeAssets/GratitudeImg.png',
  },
  {
    id: 11,
    task: 'Disconnect from screens',
    complete: false,
    time: 'night',
    img: '/HomeAssets/GratitudeImg.png',
  },
  {
    id: 12,
    task: 'Reflect on the day',
    complete: false,
    time: 'night',
    img: '/HomeAssets/GratitudeImg.png',
  },
];
const oldAgeRoutine = [
  // ***** MORNING *****
  {
    id: 1,
    task: 'Wake up at a consistent time',
    complete: false,
    time: 'morning',
    img: '/HomeAssets/WakeUpImg.png',
  },
  {
    id: 2,
    task: 'Have a nutritious breakfast',
    complete: false,
    time: 'morning',
    img: '/HomeAssets/WakeUpImg.png',
  },
  {
    id: 3,
    task: 'Engage in light mental exercises',
    complete: false,
    time: 'morning',
    img: '/HomeAssets/WakeUpImg.png',
  },
  {
    id: 4,
    task: 'Start with gentle stretches or yoga ',
    complete: false,
    time: 'morning',
    img: '/HomeAssets/WakeUpImg.png',
  },
  {
    id: 5,
    task: 'Playing with GrandChildren',
    complete: false,
    time: 'morning',
    img: '/HomeAssets/WakeUpImg.png',
  },
  {
    id: 6,
    task: 'Participate in social activities, like joining a senior center',
    complete: false,
    time: 'morning',
    img: '/HomeAssets/WakeUpImg.png',
  },
  {
    id: 7,
    task: 'Read Newspaper',
    complete: false,
    time: 'morning',
    img: '/HomeAssets/WakeUpImg.png',
  },
  // ***** AFTERNOON *****
  {
    id: 8,
    task: 'Participate in hobbies or activities that the person enjoys, such as painting, gardening, or playing a musical instrument.',
    complete: false,
    time: 'afternoon',
    img: '/HomeAssets/WakeUpImg.png',
  },
  {
    id: 9,
    task: 'Spend time doing light household chores',
    complete: false,
    time: 'afternoon',
    img: '/HomeAssets/WakeUpImg.png',
  },
  {
    id: 10,
    task: 'Engage in low-impact exercises like chair yoga',
    complete: false,
    time: 'afternoon',
    img: '/HomeAssets/WakeUpImg.png',
  },
  // ***** NIGHT *****
  {
    id: 11,
    task: 'Read books, magazines, or articles on subjects of interest',
    complete: false,
    time: 'night',
    img: '/HomeAssets/GratitudeImg.png',
  },
  {
    id: 12,
    task: 'Take a Walk',
    complete: false,
    time: 'night',
    img: '/HomeAssets/GratitudeImg.png',
  },
  {
    id: 13,
    task: 'Socialize with friends or family',
    complete: false,
    time: 'night',
    img: '/HomeAssets/GratitudeImg.png',
  },
  {
    id: 14,
    task: 'Practice mindfulness or meditation',
    complete: false,
    time: 'night',
    img: '/HomeAssets/GratitudeImg.png',
  },
  {
    id: 15,
    task: 'Watch a lighthearted movie or listen to soothing music',
    complete: false,
    time: 'night',
    img: '/HomeAssets/GratitudeImg.png',
  },
  {
    id: 16,
    task: 'Spend quality time with loved ones',
    complete: false,
    time: 'night',
    img: '/HomeAssets/GratitudeImg.png',
  },
];

const initialState = oldAgeRoutine;
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
