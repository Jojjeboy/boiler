// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
export const firebaseConfig = {
  apiKey: "AIzaSyBADJxSDkRUxA31OzI208NyPKYq9eu22xM",
  authDomain: "boiler-cc09b.firebaseapp.com",
  projectId: "boiler-cc09b",
  storageBucket: "boiler-cc09b.firebasestorage.app",
  messagingSenderId: "21273476254",
  appId: "1:21273476254:web:9de370204dad8684288f8f",
  measurementId: "G-5VL6FPQSH3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


console.log('Firebase initialized', analytics.toString());