import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc, getDocs } from "firebase/firestore"; 

const firebaseConfig = {
  apiKey: "AIzaSyCRJhCZRAN8Y-qiyTr4ZPSwPzFtniRCr-Y",
  authDomain: "ecommerceada-bc99d.firebaseapp.com",
  projectId: "ecommerceada-bc99d",
  storageBucket: "ecommerceada-bc99d.firebasestorage.app",
  messagingSenderId: "613744318728",
  appId: "1:613744318728:web:3c857c9d426b38d42b34bd",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db, collection, addDoc, getDocs };