// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB6xmm6VLvhSOZzM4sByw9UtClBhR0BkBg",
  authDomain: "agro-e20ca.firebaseapp.com",
  projectId: "agro-e20ca",
  storageBucket: "agro-e20ca.appspot.com",
  messagingSenderId: "313768956112",
  appId: "1:313768956112:web:7dd0b750d70928d4758ed5"
};
const app = initializeApp(firebaseConfig);

// Initialize Firebase
const auth = getAuth(app);
const db = getFirestore(app);

export { app, auth, db };