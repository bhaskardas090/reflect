import { db } from "../firebase/config";
import { useState } from "react";

function useDB(collection) {
  const [breatheData, setBreatheData] = useState(null);
  const [pranayam, setPranayam] = useState(null);
  const [meditationMusic, setMeditationMusic] = useState(null);
  const ref = db.collection(collection);

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

  return {
    getPranayamas,
    breatheData,
    getPranayam,
    pranayam,
    getMeditationMusic,
    meditationMusic,
  };
}

export default useDB;
