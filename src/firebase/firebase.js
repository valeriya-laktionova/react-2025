import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDBxEMNaOaJ6-rA85TM-UAi-OkQQ85X9oI",
  authDomain: "deliveryapp-3e263.firebaseapp.com",
  projectId: "deliveryapp-3e263",
  storageBucket: "deliveryapp-3e263.firebasestorage.app",
  messagingSenderId: "1001322335726",
  appId: "1:1001322335726:web:7266ac065ac0af9b7bd2ff",
  measurementId: "G-8DKY2JK97M",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
