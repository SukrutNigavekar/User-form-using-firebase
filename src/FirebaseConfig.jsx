// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBdCigFTtv71pdBGfxWgTfMoIGjKl5oxB8",
  authDomain: "react-project-1-b3a5e.firebaseapp.com",
  projectId: "react-project-1-b3a5e",
  storageBucket: "react-project-1-b3a5e.appspot.com",
  messagingSenderId: "198838724669",
  appId: "1:198838724669:web:844242f32993b687856254",
  measurementId: "G-WX2S29EYGP"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);