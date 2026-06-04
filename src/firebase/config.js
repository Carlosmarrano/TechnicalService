// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import {getFirestore} from "firebase/firestore/lite"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC_K0rp3tT6zYSoaku4LMYT7iPjcAwC7Bg",
  authDomain: "thecnicalservicepage.firebaseapp.com",
  projectId: "thecnicalservicepage",
  storageBucket: "thecnicalservicepage.firebasestorage.app",
  messagingSenderId: "1012780536176",
  appId: "1:1012780536176:web:121cb59cb618609e36bfb5",
  measurementId: "G-HCPZPQC6KV"
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth(FirebaseApp);
export const FirebaseDB = getFirestore(FirebaseApp)