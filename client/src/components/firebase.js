// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDdvujbkOnz_9_o_OSMMgOo0qDK3HODKDE",
  authDomain: "hackathon-59794.firebaseapp.com",
  projectId: "hackathon-59794",
  storageBucket: "hackathon-59794.appspot.com",
  messagingSenderId: "917444324454",
  appId: "1:917444324454:web:fe1297984b6e570cf851a7",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
