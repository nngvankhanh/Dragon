// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDKUUagREJCfahu34z5655tlQblEWFVhCs",
  authDomain: "dragon-game-e5c6e.firebaseapp.com",
  projectId: "dragon-game-e5c6e",
  storageBucket: "dragon-game-e5c6e.appspot.com",
  messagingSenderId: "934820460640",
  appId: "1:934820460640:web:299f876cd2445781bbeb05",
  measurementId: "G-BMT6JJ5MJG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);