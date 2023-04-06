// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey: "AIzaSyBwmQ1U9DOAKi8-amSH_VSsd9S4ly9WsuQ",
  authDomain: "tryfire-2e12d.firebaseapp.com",
  projectId: "tryfire-2e12d",
  storageBucket: "tryfire-2e12d.appspot.com",
  messagingSenderId: "698585622351",
  appId: "1:698585622351:web:610a5b49ab856f4d43873a",
  measurementId: "G-1Q7422364N"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const firestore = getFirestore(app);
