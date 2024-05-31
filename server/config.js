import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyB6xmm6VLvhSOZzM4sByw9UtClBhR0BkBg",
    authDomain: "agro-e20ca.firebaseapp.com",
    projectId: "agro-e20ca",
    storageBucket: "agro-e20ca.appspot.com",
    messagingSenderId: "313768956112",
    appId: "1:313768956112:web:7dd0b750d70928d4758ed5"
};

const auth = getAuth();
const db = getFirestore();
const app = initializeApp(firebaseConfig);
export default { firebaseConfig, auth, db };