import React from "react";
import { db } from "../firebase/config";
import useAuthContext from "./useAuthContext";
import useTaskContext from "./useTaskContext";
import { v4 as uuid } from "uuid";

function useDB(collection) {
  const { user } = useAuthContext();
  const { state, dispatch } = useTaskContext();

  const ref = db.collection(collection);
  const newState = { ...state };

  const selectRoutine = async (activeTask) => {
    newState.tasks = activeTask;
    dispatch({ type: "SELECT_ROUTINE", payload: newState });
    await ref.doc(user.uid).set({
      uid: user.uid,
      activeRoutine: activeTask,
    });
  };

  const addTask = async (task, time) => {
    const newTask = {
      id: uuid(),
      task: task,
      complete: false,
      time: time.toLowerCase(),
      img: "/HomeAssets/GratitudeImg.png",
    };
    newState.tasks = [...newState.tasks, newTask];
    dispatch({ type: "ADD_TASK", payload: newState });
    await ref.doc(user.uid).set({
      uid: user.uid,
      activeRoutine: newState.tasks,
    });
  };
  const deleteTask = async (taskId) => {
    const newTasks = newState.tasks.filter((task) => task.id !== taskId);
    dispatch({ type: "DELETE_TASK", payload: newState });
    await ref.doc(user.uid).set({
      uid: user.uid,
      activeRoutine: newTasks,
    });
  };

  const updateTaskComplete = async (taskId) => {
    const filteredTask = newState.tasks.find((task) => task.id === taskId);
    filteredTask.complete = !filteredTask.complete;
    dispatch({ type: "SET_TOTAL_REWARD" });
    dispatch({ type: "TASK_COMPLETE_STATUS_CHANGE", payload: newState });
    await ref.doc(user.uid).set({
      uid: user.uid,
      activeRoutine: newState.tasks,
    });
  };

  return { deleteTask, updateTaskComplete, selectRoutine, addTask };
}

export default useDB;
