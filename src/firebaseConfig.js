// src/firebaseConfig.js
import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider, signInWithPopup, signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut } from 'firebase/auth';
import { getFirestore, collection, getDocs } from 'firebase/firestore';
import { getFunctions } from 'firebase/functions';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyAAYqlPPn8p59t-r8sV7zxzHgQu_IG9Uyw",
  authDomain: "scamcollege-76961.firebaseapp.com",
  projectId: "scamcollege-76961",
  storageBucket: "scamcollege-76961.appspot.com",
  messagingSenderId: "665850794796",
  appId: "1:665850794796:web:7ccfbbc4dd1f1a104f5289",
  measurementId: "G-MG8BXBWL7S"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const firestore = getFirestore(app);
const storage = getStorage(app);
const functions = getFunctions(app);
const db = getFirestore(app);

export {
  auth,
  GoogleAuthProvider,
  signInWithPopup,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
  db,
  functions,
  storage,
  collection,
  getDocs
};