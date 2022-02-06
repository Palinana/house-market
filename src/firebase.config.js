import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDbau5SXmw8duDu-uGrvi8UvRlMpNzkE6E",
  authDomain: "house-market-db844.firebaseapp.com",
  projectId: "house-market-db844",
  storageBucket: "house-market-db844.appspot.com",
  messagingSenderId: "760979702616",
  appId: "1:760979702616:web:843a6ad78edfdec82a5b2d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore();
