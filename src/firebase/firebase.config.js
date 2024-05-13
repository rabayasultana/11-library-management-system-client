// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBOT9Mfso3xC2TNwaswlp5PPh8v1qOKYPE",
  authDomain: "assignment-11-library.firebaseapp.com",
  projectId: "assignment-11-library",
  storageBucket: "assignment-11-library.appspot.com",
  messagingSenderId: "538164192458",
  appId: "1:538164192458:web:6ea71dd0b7f40725ca4033"
};

// Initialize Firebase
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;