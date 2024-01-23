// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-blog-5cc6f.firebaseapp.com",
  projectId: "mern-blog-5cc6f",
  storageBucket: "mern-blog-5cc6f.appspot.com",
  messagingSenderId: "585120652559",
  appId: "1:585120652559:web:aece09683c4894d884b27a",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
