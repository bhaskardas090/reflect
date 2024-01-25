import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA8xMHCWB1uJdZ5qX6VN_OcKy8UWAQ0KIA",
  authDomain: "reflect-manas.firebaseapp.com",
  projectId: "reflect-manas",
  storageBucket: "reflect-manas.appspot.com",
  messagingSenderId: "362332754367",
  appId: "1:362332754367:web:ba95960ae9752b35a9d10a",
};

// initialize firebase
const app = firebase.initializeApp(firebaseConfig);

// timestamp
const timestamp = firebase.firestore.Timestamp;

const db = app.firestore();

export { db, timestamp };
