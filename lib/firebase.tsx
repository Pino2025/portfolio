// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBGhJnGC1XLZkslKhwjAyk4kGU_uus5p4U",
  authDomain: "web-dev-59e11.firebaseapp.com",
  projectId: "web-dev-59e11",
  storageBucket: "web-dev-59e11.firebasestorage.app",
  messagingSenderId: "151776671872",
  appId: "1:151776671872:web:6a67d9c623873cfe0cce65",
  measurementId: "G-BL7DXLB0XZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);