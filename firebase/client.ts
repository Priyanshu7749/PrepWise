import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyByZzQlMfNXliLLlnHfodmaT4LgSOAnGyA",
  authDomain: "prepwise-36f8a.firebaseapp.com",
  projectId: "prepwise-36f8a",
  storageBucket: "prepwise-36f8a.firebasestorage.app",
  messagingSenderId: "599888743162",
  appId: "1:599888743162:web:a1d1497bed59984c16d743",
  measurementId: "G-23ZFBVMN4D"
};

// Initialize Firebase
const app = !getApps.length ?  initializeApp(firebaseConfig) : getApp();

export const auth = getAuth(app);
export const db = getFirestore(app);