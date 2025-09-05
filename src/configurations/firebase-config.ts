// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAOuVna8bEJ8BzlZ2lyht0uSorCjz9Wzko",
    authDomain: "my-bakery-shop-55611.firebaseapp.com",
    projectId: "my-bakery-shop-55611",
    storageBucket: "my-bakery-shop-55611.firebasestorage.app",
    messagingSenderId: "782003491600",
    appId: "1:782003491600:web:ff8430887c415dffa98b95"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app); //key for authentification