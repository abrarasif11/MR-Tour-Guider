// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCMAC-9zVknh-IFjuIEA4_jAplY-V5b12M",
    authDomain: "tour-guider-90aac.firebaseapp.com",
    projectId: "tour-guider-90aac",
    storageBucket: "tour-guider-90aac.appspot.com",
    messagingSenderId: "786295847478",
    appId: "1:786295847478:web:4c9d88b2b9d4c042277697"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;