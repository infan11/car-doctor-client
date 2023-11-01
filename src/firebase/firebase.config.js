// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD4xgoe_VDpc0K1mSsYNCe_5vKlKHHNnEE",
  authDomain: "cars-doctor-53c26.firebaseapp.com",
  projectId: "cars-doctor-53c26",
  storageBucket: "cars-doctor-53c26.appspot.com",
  messagingSenderId: "166551481248",
  appId: "1:166551481248:web:0fab1fd50f5abeca6092c5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;