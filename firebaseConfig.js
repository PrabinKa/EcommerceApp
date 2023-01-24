// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDPVRa2vCq29fXV9fTM8Sx_YoYkVZoZ_bU",
  authDomain: "ecommerce-app-74cf0.firebaseapp.com",
  projectId: "ecommerce-app-74cf0",
  storageBucket: "ecommerce-app-74cf0.appspot.com",
  messagingSenderId: "565650989877",
  appId: "1:565650989877:web:759ca217235ca5cb29a27c",
  measurementId: "G-NXYEDLGCDL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const  firestore = getFirestore(app);

export { firestore }