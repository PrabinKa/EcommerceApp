import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDPVRa2vCq29fXV9fTM8Sx_YoYkVZoZ_bU",
    authDomain: "ecommerce-app-74cf0.firebaseapp.com",
    projectId: "ecommerce-app-74cf0",
    storageBucket: "ecommerce-app-74cf0.appspot.com",
    messagingSenderId: "565650989877",
    appId: "1:565650989877:web:759ca217235ca5cb29a27c",
    measurementId: "G-NXYEDLGCDL"
  };

  if(!firebase.apps.lenght){
    firebase.initializeApp(firebaseConfig)
  }

  export {firebase}