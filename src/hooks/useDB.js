import { db } from "../firebase/config";
import useAuthContext from "./useAuthContext";
import useTaskContext from "./useTaskContext";
import { v4 as uuid } from "uuid";
import { useState } from "react";
import { getHomeTaskIcon } from "./../helper/HomeTaskIcon";
import { useNavigate } from "react-router";

function useDB(collection) {
  const navigate = useNavigate();

  const { user } = useAuthContext();
  const { state, dispatch } = useTaskContext();
  const [breatheData, setBreatheData] = useState(null);
  const [pranayam, setPranayam] = useState(null);
  const [meditationMusic, setMeditationMusic] = useState(null);
  const ref = db.collection(collection);

  // ! ROUTINE METHODS
  const newState = { ...state };
  const fetchRoutine = async () => {
    try {
      await ref.doc(user?.uid).onSnapshot((doc) => {
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
    } catch (error) {
      console.log(error, "FETCH ROUTINE");
    }
  };
  const selectRoutine = async (activeTask) => {
    newState.tasks = activeTask;
    newState.reward = 100 / newState.tasks.length;
    newState.totalReward = calculateTotalReward(
      newState.tasks,
      newState.reward
    );
    dispatch({ type: "SELECT_ROUTINE", payload: newState });
    try {
      await ref.doc(user.uid).set({
        uid: user.uid,
        activeRoutine: activeTask,
        reward: newState.reward,
        totalReward: newState.totalReward,
      });
    } catch (error) {
      console.log(error, "SELECT ROUTINE");
    }
  };
  const addTask = async (task, time) => {
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
    dispatch({ type: "ADD_TASK", payload: newState });
    try {
      await ref.doc(user.uid).set({
        uid: user.uid,
        activeRoutine: newState.tasks,
        reward: newState.reward,
        totalReward: newState.totalReward,
      });
    } catch (error) {
      console.log(error, "ADD TASK");
    }
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
      try {
        await ref.doc(user.uid).set({
          uid: user.uid,
          activeRoutine: newTasks,
          reward: newState.reward,
          totalReward: newState.totalReward,
        });
      } catch (error) {
        console.log(error, "DELETE TASK");
      }
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
    try {
      await ref.doc(user.uid).set({
        uid: user.uid,
        activeRoutine: newState.tasks,
        reward: newState.reward,
        totalReward: newState.totalReward,
      });
    } catch (error) {
      console.log(error, "UPDATE TASK COMPLETE");
    }
  };
  const todayRoutineDone = async (userId, state) => {
    // Sending the tasks to routineHistory
    try {
      await ref.add({
        id: userId,
        title: formatDate(new Date()),
        tasks: state.tasks,
        totalReward: state.totalReward,
      });
    } catch (error) {
      console.log(error, "TODAY ROUTINE DONE - ROUTINE HISTORY");
    }
    // Resetting the activeRoutine in Local and Server
    newState.totalReward = 0;
    newState.tasks.forEach((task) => (task.complete = false));
    try {
      await db.collection("routines").doc(user.uid).set({
        uid: user.uid,
        activeRoutine: newState.tasks,
        reward: newState.reward,
        totalReward: newState.totalReward,
      });
    } catch (error) {
      console.log(error, "TODAY ROUTINE DONE - RESET ROUTINE");
    }

    dispatch({ type: "SELECT_ROUTINE", payload: newState });
  };
  const isRoutineAlreadyDone = async (userId) => {
    const formattedDate = formatDate(new Date());
    const res = await ref
      .where("id", "==", userId)
      .where("title", "==", formattedDate)
      .get()
      .then((querySnapshot) => {
        if (querySnapshot.empty) {
          return false;
        }
        if (!querySnapshot.empty) {
          return true;
        }
      })
      .catch((error) => {
        console.log(error, "ROUTINE ALREADY DONE");
      });
    return res;
  };
  // ! Breathe METHODS
  const getPranayamas = async () => {
    const data = [];
    try {
      await ref.get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          data.push({ id: doc.id, data: doc.data() });
        });
      });
    } catch (error) {
      console.log(error, "GET PRANAYAMS'S");
    }

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

  // ! Meditation METHODS
  const getMeditationMusic = async (id) => {
    const docRef = await ref.doc(`med-${id}`);
    const doc = await docRef.get();

    if (doc.exists) {
      setMeditationMusic({
        imageUrl: doc.data().songImgSrc,
        songUrl: doc.data().songSrc,
        songName: doc.data().songTitle,
        bgSrc: doc.data().bgImgSrc,
      });
    }
    return doc.data();
  };

  // ! Routine History Method
  const getRoutineHistory = async (date, setHistory, setNoData) => {
    const formattedDate = formatDateForHistory(date);
    await ref
      .where("id", "==", user.uid)
      .where("title", "==", formattedDate)
      .get()
      .then((querySnapshot) => {
        if (querySnapshot.empty) {
          setNoData(true);
          setHistory(null);
        }
        if (!querySnapshot.empty) {
          setNoData(false);
          querySnapshot.forEach((doc) => {
            setHistory(doc.data());
          });
        }
      })
      .catch((error) => {
        console.log(error, "GET ROUTINE HISTORY");
      });
  };
  // ! Journal Methods
  const addJournal = async (userId, journal) => {
    try {
      await ref.add({
        id: userId,
        journal: journal,
        title: formatDate(new Date()),
      });
    } catch (error) {
      console.log(error, "ADD JOURNAL");
    }
  };
  const isJournalAlreadyDone = async (userId) => {
    const formattedDate = formatDate(new Date());
    const res = await ref
      .where("id", "==", userId)
      .where("title", "==", formattedDate)
      .get()
      .then((querySnapshot) => {
        if (querySnapshot.empty) {
          return false;
        }
        if (!querySnapshot.empty) {
          return true;
        }
      })
      .catch((error) => {
        console.log(error, "JOURNAL ALREADY DONE");
      });
    return res;
  };
  const getJournalHistory = async (date, setHistory, setNoData) => {
    const formattedDate = formatDateForHistory(date);
    await ref
      .where("id", "==", user.uid)
      .where("title", "==", formattedDate)
      .get()
      .then((querySnapshot) => {
        if (querySnapshot.empty) {
          setNoData(true);
          setHistory(null);
        }
        if (!querySnapshot.empty) {
          setNoData(false);
          querySnapshot.forEach((doc) => {
            setHistory(doc.data());
          });
        }
      })
      .catch((error) => {
        console.log(error, "GET JOURNAL HISTORY");
      });
  };
  // ! Resources Method
  const getBlogs = async () => {
    const blogs = [];
    try {
      const res = await ref.get();
      await res.forEach((doc) =>
        blogs.push({
          id: doc.id,
          title: doc.data().title,
          description: doc.data().description,
          img: doc.data().img,
        })
      );
    } catch (error) {
      console.log(error, "GET BLOGS");
    }
    return blogs;
  };
  const getBlog = async (id) => {
    const docRef = ref.doc(id);

    try {
      const doc = await docRef.get();
      if (doc.exists) {
        return doc.data();
      } else {
        console.log("No such document!");
      }
    } catch (error) {
      console.log("Error getting document:", error);
    }
  };
  const getVideos = async () => {
    const videos = [];
    try {
      const res = await ref.get();
      await res.forEach((doc) =>
        videos.push({
          id: doc.id,
          title: doc.data().title,
          description: doc.data().description,
          img: doc.data().img,
          source: doc.data().source,
        })
      );
    } catch (error) {
      console.log(error, "GET VIDEOS");
    }
    return videos;
  };
  const getPodcasts = async () => {
    const podCasts = [];
    try {
      const res = await ref.get();
      await res.forEach((doc) =>
        podCasts.push({
          id: doc.id,
          title: doc.data().title,
          description: doc.data().description,
          img: doc.data().img,
          source: doc.data().source,
        })
      );
    } catch (error) {
      console.log(error, "GET PODCASTS");
    }
    return podCasts;
  };
  // ! Account Methods
  const addUser = async (email, username) => {
    try {
      await ref.doc(username).set({
        email: email,
        username: username,
      });
    } catch (error) {
      console.log(error, "ADD USER");
    }
  };
  const getUser = async (username) => {
    const userRef = await ref.doc(username);
    const doc = await userRef.get();

    if (doc.exists) {
      return doc.data();
    }
  };
  const updateUser = async (data) => {
    try {
      await ref.doc(user.displayName).set({
        email: user.email,
        username: user.displayName,
        name: data.name,
        age: data.age,
        dob: data.dob,
        phone: data.phone,
        gender: data.gender,
        working: data.working,
      });
      navigate("/");
    } catch (error) {
      console.log(error, "UPDATE USER");
    }
  };

  // ? Helper Method
  function formatDateForHistory(dateString) {
    const months = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];

    const dateComponents = dateString.split(" ");
    const day = parseInt(dateComponents[2], 10);
    const monthIndex = months.indexOf(dateComponents[1]);
    const year = parseInt(dateComponents[3], 10);

    const formattedDate = `${day < 10 ? "0" : ""}${day}/${
      monthIndex < 9 ? "0" : ""
    }${monthIndex + 1}/${year}`;

    return formattedDate;
  }
  const calculateTotalReward = (list, reward) => {
    let totalRewardL = 0;
    const filteredTasks = list.filter((task) => task.complete === true);
    filteredTasks.forEach((task) => (totalRewardL += reward));
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
    deleteTask,
    updateTaskComplete,
    selectRoutine,
    addTask,
    getPranayamas,
    breatheData,
    getPranayam,
    pranayam,
    getRoutineHistory,
    todayRoutineDone,
    isRoutineAlreadyDone,
    getMeditationMusic,
    meditationMusic,
    addJournal,
    isJournalAlreadyDone,
    getJournalHistory,
    getBlogs,
    getBlog,
    getVideos,
    getPodcasts,
    addUser,
    getUser,
    updateUser,
    fetchRoutine,
  };
}

export default useDB;
