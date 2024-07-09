// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

const apiKey =
  import.meta.env.VITE_FIREBASE_API_KEY ?? process.env.VITE_FIREBASE_API_KEY;
const authDomain =
  import.meta.env.VITE_FIREBASE_AUTH_DOMAIN ??
  process.env.VITE_FIREBASE_AUTH_DOMAIN;
const projectId =
  import.meta.env.VITE_FIREBASE_PROJECT_ID ??
  process.env.VITE_FIREBASE_PROJECT_ID;
const storageBucket =
  import.meta.env.VITE_FIREBASE_STORAGE_BUCKET ??
  process.env.VITE_FIREBASE_STORAGE_BUCKET;
const messagingSenderId =
  import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID ??
  process.env.VITE_FIREBASE_MESSAGING_SENDER_ID;
const appId =
  import.meta.env.VITE_FIREBASE_APP_ID ?? process.env.VITE_FIREBASE_APP_ID;

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey,
  authDomain,
  projectId,
  storageBucket,
  messagingSenderId,
  appId,
};

console.log(
  apiKey,
  authDomain,
  projectId,
  storageBucket,
  messagingSenderId,
  appId
);

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { app, auth };
