// firebasedb.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCKTu_k-yvrKnade2Gz5-WEAFkjPQ2IXrQ",
  authDomain: "todocorr-156fc.firebaseapp.com",
  projectId: "todocorr-156fc",
  storageBucket: "todocorr-156fc.appspot.com",
  messagingSenderId: "334121169210",
  appId: "1:334121169210:web:00afe250ee637d19082003",
  measurementId: "G-DSR80QC2QE"
};

// Initialize the Firebase app
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export default db;


