// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDAmyVHg6Tomp6Itys4QDWiuPtuAotyCok",
  authDomain: "react-shop-app-4692d.firebaseapp.com",
  projectId: "react-shop-app-4692d",
  storageBucket: "react-shop-app-4692d.appspot.com",
  messagingSenderId: "402235974314",
  appId: "1:402235974314:web:fcc1561d679df3122b26d3",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { app, auth };
