import { db } from "../firebase/config";
import useTaskContext from "./useTaskContext";
import { v4 as uuid } from "uuid";
import { useState } from "react";
import { getHomeTaskIcon } from "./../helper/HomeTaskIcon";
import { useNavigate } from "react-router";

function useDB(collection) {
  const navigate = useNavigate();

  const { state, dispatch } = useTaskContext();
  const [breatheData, setBreatheData] = useState(null);
  const [pranayam, setPranayam] = useState(null);
  const [meditationMusic, setMeditationMusic] = useState(null);
  const ref = db.collection(collection);

  // ! ROUTINE METHODS
  const newState = { ...state };

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
        credit: doc.data().credit,
      });
    }
    return doc.data();
  };

  // ! Routine History Method

  // ! Journal Methods
  const addJournal = (journal) => {
    const fullJournal = {
      id: uuid(),
      journal: journal,
      title: formatDate(new Date()),
    };
    try {
      localStorage.set("journals", fullJournal);
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
  // const getJournalHistory = async (date, setHistory, setNoData) => {
  //   const formattedDate = formatDateForHistory(date);
  //   await ref
  //     .where("id", "==", user.uid)
  //     .where("title", "==", formattedDate)
  //     .get()
  //     .then((querySnapshot) => {
  //       if (querySnapshot.empty) {
  //         setNoData(true);
  //         setHistory(null);
  //       }
  //       if (!querySnapshot.empty) {
  //         setNoData(false);
  //         querySnapshot.forEach((doc) => {
  //           setHistory(doc.data());
  //         });
  //       }
  //     })
  //     .catch((error) => {
  //       console.log(error, "GET JOURNAL HISTORY");
  //     });
  // };
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
    getPranayamas,
    breatheData,
    getPranayam,
    pranayam,
    // getRoutineHistory,
    getMeditationMusic,
    meditationMusic,
    addJournal,
    isJournalAlreadyDone,
    // getJournalHistory,
    getBlogs,
    getBlog,
    getVideos,
    getPodcasts,
  };
}

export default useDB;
