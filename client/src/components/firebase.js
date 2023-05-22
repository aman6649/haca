// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD00NvOf_YcbafluK3uTo9piCXi2u01kAs",
  authDomain: "haca-dceff.firebaseapp.com",
  projectId: "haca-dceff",
  storageBucket: "haca-dceff.appspot.com",
  messagingSenderId: "336840466469",
  appId: "1:336840466469:web:1c9aeea6f6928a8c535fcc",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
