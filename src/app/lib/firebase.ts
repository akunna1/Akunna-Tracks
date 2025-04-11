// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAx0NTFNyt7dVTmbaroCpzwa0RS7clW4rg",
  authDomain: "akunna-tracks-85bef.firebaseapp.com",
  projectId: "akunna-tracks-85bef",
  storageBucket: "akunna-tracks-85bef.firebasestorage.app",
  messagingSenderId: "716218325515",
  appId: "1:716218325515:web:a00e0cb817de8cf92e050e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore
const db = getFirestore(app);

// Export Firebase app and Firestore instance
export { app, db };
