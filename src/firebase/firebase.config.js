// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyA1RcqAvOKLbcgWoiWDB418NbR7cx7IVnw",
    authDomain: "brand-shop-client-rashed.firebaseapp.com",
    projectId: "brand-shop-client-rashed",
    storageBucket: "brand-shop-client-rashed.appspot.com",
    messagingSenderId: "883272704697",
    appId: "1:883272704697:web:e633b7f2f05739993af168"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;