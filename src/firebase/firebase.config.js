// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyABj4PyqBHC4-I5_1NonraJwGmYRyKNav8",
  authDomain: "dragon-news-d2c91.firebaseapp.com",
  projectId: "dragon-news-d2c91",
  storageBucket: "dragon-news-d2c91.firebasestorage.app",
  messagingSenderId: "360840006447",
  appId: "1:360840006447:web:47057d4edda7fefad0afda"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app