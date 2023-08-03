import React, { useContext } from 'react';
import { TaskContext } from '../context/TaskContext';

function useTaskContext() {
  const taskContext = useContext(TaskContext);
  return taskContext;
}

export default useTaskContext;
