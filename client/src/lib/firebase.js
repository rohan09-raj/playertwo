// Import the functions you need from the SDKs you need
import {initializeApp} from 'firebase/app';
import { getAuth , signOut, createUserWithEmailAndPassword, signInWithEmailAndPassword , updateProfile, signInAnonymously, onAuthStateChanged} from "firebase/auth";
import {getFirestore, updateDoc, arrayUnion, arrayRemove, FieldValue, query, limit, collection, doc, getDocs,setDoc, addDoc, where} from "firebase/firestore";

// import {getAnalytics} from 'firebase/analytics';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional


const firebaseConfig = {
  apiKey: 'AIzaSyDV7Yipfi4skLRAZIkoJmz34OBovpubr4o',
  authDomain: 'two-player-7f82a.firebaseapp.com',
  projectId: 'two-player-7f82a',
  storageBucket: 'two-player-7f82a.appspot.com',
  messagingSenderId: '708936855083',
  appId: '1:708936855083:web:b8e3d5fbbe9a94070d846e',
  measurementId: 'G-TM47X20JV1',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore();
const auth = getAuth(app);

// export {onAuthStateChanged, createUserWithEmailAndPassword, signOut, arrayUnion, arrayRemove, firebase, db, updateDoc, limit, collection, signInAnonymously, updateProfile, query, where, setDoc, addDoc, doc, getDocs ,auth, signInWithEmailAndPassword, FieldValue};
export {onAuthStateChanged , db , auth}; 
