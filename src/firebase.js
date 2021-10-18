// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyD94eKR76zxcZhLe8sckz4xW6xbrI9IR8I",
    authDomain: "fir-ce701.firebaseapp.com",
    projectId: "fir-ce701",
    storageBucket: "fir-ce701.appspot.com",
    messagingSenderId: "555638217084",
    appId: "1:555638217084:web:e6a8d56e84e37f62c6acf9",
    measurementId: "G-612GWYRNRK"
}

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);