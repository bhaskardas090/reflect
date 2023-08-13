import { db } from "../firebase/config";
import useAuthContext from "./useAuthContext";
import useTaskContext from "./useTaskContext";
import { v4 as uuid } from "uuid";
import { useState, useMemo } from "react";

function useDB(collection) {
  const { user } = useAuthContext();
  const { state, dispatch } = useTaskContext();
  const [breatheData, setBreatheData] = useState(null);
  const [pranayam, setPranayam] = useState(null);
  const ref = db.collection(collection);

  // ! ROUTINE METHODS
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

  // ! Breathe METHODS
  const getPranayamas = async () => {
    const data = [];
    await ref.get().then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        console.log(doc.id);
        data.push({ id: doc.id, data: doc.data() });
        // console.log(doc.id, " => ", doc.data());
      });
    });
    setBreatheData(data);
  };

  const getPranayam = async (id) => {
    const docRef = await ref.doc(id);
    const doc = await docRef.get();

    if (doc.exists) {
      setPranayam({
        imageUrl: doc.data().songImgSrc,
        songUrl: doc.data().songSrc,
        songName: doc.data().songTitle,
      });
    }
    return doc.data();
  };

  return {
    deleteTask,
    updateTaskComplete,
    selectRoutine,
    addTask,
    getPranayamas,
    breatheData,
    getPranayam,
    pranayam,
  };
}

export default useDB;
