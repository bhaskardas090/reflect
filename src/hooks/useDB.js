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
    newState.totalReward = 0;
    dispatch({ type: "SELECT_ROUTINE", payload: newState });
    await ref.doc(user.uid).set({
      uid: user.uid,
      activeRoutine: activeTask,
      reward: newState.reward,
      totalReward: newState.totalReward,
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
    const newTasks = [...newState.tasks, newTask];
    const reward = 100 / newTasks.length;
    const totalReward = calculateTotalReward(newTasks, reward);
    newState.tasks = newTasks;
    newState.reward = reward;
    newState.totalReward = totalReward;
    dispatch({ type: "ADD_TASK", payload: newState });
    await ref.doc(user.uid).set({
      uid: user.uid,
      activeRoutine: newState.tasks,
      reward: newState.reward,
      totalReward: newState.totalReward,
    });
  };
  const deleteTask = async (taskId) => {
    const deletedTask = newState.tasks.filter((task) => task.id === taskId);
    // console.log(deletedTask[0].complete, "DELETED TASK COMPLETE");
    if (!deletedTask[0].complete) {
      const newTasks = newState.tasks.filter((task) => task.id !== taskId);
      const reward = 100 / newTasks.length;
      const totalReward = calculateTotalReward(newTasks, reward);
      newState.tasks = newTasks;
      newState.reward = reward;
      newState.totalReward = totalReward;
      dispatch({
        type: "DELETE_TASK",
        payload: newState,
      });
      // dispatch({ type: "SET_REWARD" });
      // dispatch({ type: "SET_TOTAL_REWARD" });
      await ref.doc(user.uid).set({
        uid: user.uid,
        activeRoutine: newTasks,
        reward: newState.reward,
        totalReward: newState.totalReward,
      });
    } else {
      alert(
        "Action Denied. You can't delete an task while is marked as completed."
      );
    }
  };
  const updateTaskComplete = async (taskId) => {
    const filteredTask = newState.tasks.find((task) => task.id === taskId);
    filteredTask.complete = !filteredTask.complete;
    if (filteredTask.complete) {
      newState.totalReward += newState.reward;
    } else {
      newState.totalReward -= newState.reward;
    }
    dispatch({ type: "TASK_COMPLETE_STATUS_CHANGE", payload: newState });
    await ref.doc(user.uid).set({
      uid: user.uid,
      activeRoutine: newState.tasks,
      reward: newState.reward,
      totalReward: newState.totalReward,
    });
  };
  const calculateTotalReward = (list, reward) => {
    let totalRewardL = 0;
    const filteredTasks = list.filter((task) => task.complete === true);
    filteredTasks.forEach((task) => (totalRewardL += reward));
    return totalRewardL;
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
