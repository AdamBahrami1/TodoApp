import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore'; // Import Firestore

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCduTsifiKCBnkDeddqNH72vuvEv_D68Fg",
  authDomain: "todocorr-156fc.firebaseapp.com",
  projectId: "todocorr-156fc",
  storageBucket: "todocorr-156fc.appspot.com",
  messagingSenderId: "334121169210",
  appId: "1:334121169210:web:00afe250ee637d19082003",
  measurementId: "G-DSR80QC2QE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Create the auth and db objects
export const auth = getAuth(app);
export const db = getFirestore(app); // Initialize Firestore and export it

export default app;
