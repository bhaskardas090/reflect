import React from "react";
import useTaskContext from "./useTaskContext";
import { useNavigate } from "react-router";
import { v4 as uuid } from "uuid";
import { getHomeTaskIcon } from "./../helper/HomeTaskIcon";

function useRoutine() {
  const { state, dispatch } = useTaskContext();
  const navigate = useNavigate();
  const newState = { ...state };

  const selectRoutine = async (activeTask) => {
    newState.tasks = activeTask;
    newState.reward = 100 / newState.tasks.length;
    newState.totalReward = 0;
    try {
      dispatch({ type: "SELECT_ROUTINE", payload: newState });
      localStorage.setItem("activeRoutine", JSON.stringify(newState));
      navigate("/");
    } catch (error) {
      console.log(error, "SELECT ROUTINE");
    }
  };

  const fetchRoutine = () => {
    try {
      const data = JSON.parse(localStorage.getItem("activeRoutine"));
      if (!!data === false) {
        navigate("/select-routine");
      }
      if (data) {
        dispatch({ type: "SELECT_ROUTINE", payload: data });
      }
    } catch (error) {
      console.log(error, "FETCH ROUTINE");
    }
  };

  const addTask = (task, time) => {
    const newTask = {
      id: uuid(),
      task: task,
      complete: false,
      time: time.toLowerCase(),
      img: getHomeTaskIcon(30),
    };
    const newTasks = [...newState.tasks, newTask];
    const reward = 100 / newTasks.length;

    const totalReward = calculateTotalReward(newTasks, reward);
    newState.tasks = newTasks;
    newState.reward = reward;
    newState.totalReward = totalReward;
    try {
      dispatch({ type: "ADD_TASK", payload: newState });
      localStorage.setItem("activeRoutine", JSON.stringify(newState));
    } catch (error) {
      console.log(error, "ADD TASK");
    }
  };

  const deleteTask = async (taskId) => {
    const deletedTask = newState.tasks.filter((task) => task.id === taskId);
    if (!deletedTask[0].complete) {
      const newTasks = newState.tasks.filter((task) => task.id !== taskId);
      const reward = 100 / newTasks.length;
      const totalReward = calculateTotalReward(newTasks, reward);
      newState.tasks = newTasks;
      newState.reward = reward;
      newState.totalReward = totalReward;

      try {
        dispatch({
          type: "DELETE_TASK",
          payload: newState,
        });
        localStorage.setItem("activeRoutine", JSON.stringify(newState));
      } catch (error) {
        console.log(error, "DELETE TASK");
      }
    } else {
      alert(
        "Action Denied. You can't delete an task while is marked as completed."
      );
    }
  };

  const updateTaskComplete = (taskId) => {
    const filteredTask = newState.tasks.find((task) => task.id === taskId);
    filteredTask.complete = !filteredTask.complete;

    if (filteredTask.complete) {
      newState.totalReward += newState.reward;
    } else {
      newState.totalReward -= newState.reward;
    }
    if (newState.totalReward > 99) {
      newState.totalReward = 100;
    }
    if (newState.totalReward < 1) {
      newState.totalReward = 0;
    }
    try {
      dispatch({ type: "TASK_COMPLETE_STATUS_CHANGE", payload: newState });
      localStorage.setItem("activeRoutine", JSON.stringify(newState));
    } catch (error) {
      console.log(error, "UPDATE TASK COMPLETE");
    }
  };

  const todayRoutineDone = (state) => {
    // Sending the tasks to routineHistory
    const pastRoutinesDone = localStorage.getItem("pastRoutinesDone");
    let pastRoutinesList;

    if (!!pastRoutinesDone) {
      pastRoutinesList = [...JSON.parse(pastRoutinesDone)];
      console.log(pastRoutinesList, "TODAY ROUTINE DONE");
    } else {
      pastRoutinesList = [];
    }

    const routine = {
      title: formatDate(new Date()),
      tasks: state.tasks,
      totalReward: state.totalReward,
    };
    pastRoutinesList.push(routine);

    // Resetting the activeRoutine in Local and Server
    newState.totalReward = 0;
    newState.tasks.forEach((task) => (task.complete = false));

    try {
      dispatch({ type: "SELECT_ROUTINE", payload: newState });
      localStorage.setItem("activeRoutine", JSON.stringify(newState));
      localStorage.setItem("pastRoutineDone", JSON.stringify(pastRoutinesList));
    } catch (error) {
      console.log(error, "TODAY ROUTINE DONE");
    }
  };

  const isRoutineAlreadyDone = () => {
    const formattedDate = formatDate(new Date());
    let res = false;

    const isPastRoutineDone = JSON.parse(
      localStorage.getItem("pastRoutineDone")
    );
    if (!isPastRoutineDone) {
      res = false;
      return res;
    } else {
      const alreadyAdded = isPastRoutineDone.find(
        (routine) => routine.title === formattedDate
      );
      if (alreadyAdded) {
        return (res = true);
      } else {
        return (res = false);
      }
    }
  };

  // ! Helper methods

  const calculateTotalReward = (list, reward) => {
    let totalRewardL = 0;
    const filteredTasks = list.filter((task) => task.complete === true);
    filteredTasks.forEach((task) => (totalRewardL += Number(reward)));
    // console.log(totalRewardL, reward, "calculateTotalReward");

    return totalRewardL;
  };

  function formatDate(dateString) {
    const dateObject = dateString;
    const day = dateObject.getDate();
    const month = dateObject.getMonth() + 1;
    const year = dateObject.getFullYear();

    const formattedDate = `${day < 10 ? "0" : ""}${day}/${
      month < 10 ? "0" : ""
    }${month}/${year}`;

    return formattedDate;
  }

  return {
    selectRoutine,
    fetchRoutine,
    addTask,
    deleteTask,
    updateTaskComplete,
    todayRoutineDone,
    isRoutineAlreadyDone,
  };
}

export default useRoutine;
