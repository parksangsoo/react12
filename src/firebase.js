// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB2dihONGJaQSeDa4lup-YBLolUDdnA2f8",
  authDomain: "react12-4d861.firebaseapp.com",
  projectId: "react12-4d861",
  storageBucket: "react12-4d861.appspot.com",
  messagingSenderId: "20142546796",
  appId: "1:20142546796:web:8981e2c3ed762d529c5d49",
  measurementId: "G-ZEFS9RWDQH"
};

// Initialize Firebase
initializeApp(firebaseConfig);

export const db = getFirestore();