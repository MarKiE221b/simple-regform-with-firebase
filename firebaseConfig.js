// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDOalnAGI4ILkeZBD7udUYBjA77cLaJuD4",
  authDomain: "testproj-next.firebaseapp.com",
  projectId: "testproj-next",
  storageBucket: "testproj-next.appspot.com",
  messagingSenderId: "425438502281",
  appId: "1:425438502281:web:b9144f8256d21dd0e19558"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const database = getFirestore();