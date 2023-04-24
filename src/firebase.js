// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import { getStorage } from 'firebase/storage';
import { getFirestore } from 'firebase/firestore/lite';

const firebaseConfig = {
  apiKey: "AIzaSyDtcKGJZzcqYYKbw_qFiFkT8If6NReDXuw",
  authDomain: "react-portfolio-8ac99.firebaseapp.com",
  projectId: "react-portfolio-8ac99",
  storageBucket: "react-portfolio-8ac99.appspot.com",
  messagingSenderId: "1097440233769",
  appId: "1:1097440233769:web:57b1a28742512bc84d0f38"
};
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
const provider = new GoogleAuthProvider();
export const db = getFirestore(app);
export const storage = getStorage(app);


export const signInWithGoogle = () => signInWithPopup(auth, provider);