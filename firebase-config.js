import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyCJQb710ox8HSX90mSwRPdP4ofatDrWzG4",
  authDomain: "login-26443.firebaseapp.com",
  projectId: "login-26443",
  storageBucket: "login-26443.firebasestorage.app",
  messagingSenderId: "484981618164",
  appId: "1:484981618164:web:649c5ffc1da50ffcc335a1",
  measurementId: "G-K4NQGQMVL4"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
