// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-7926a.firebaseapp.com",
  projectId: "mern-estate-7926a",
  storageBucket: "mern-estate-7926a.firebasestorage.app",
  messagingSenderId: "616495777774",
  appId: "1:616495777774:web:7bd1a6e7482d5eb9a970ff"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);