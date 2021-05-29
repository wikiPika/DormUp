import firebase from 'firebase/app';
import 'firebase/firestore';
import "firebase/auth"; 
const firebaseConfig = {
    apiKey: "AIzaSyDmza760gAOtqWDnVTArkNpbaPr3jfCjTk",
    authDomain: "dormup-c85fb.firebaseapp.com",
    projectId: "dormup-c85fb",
    storageBucket: "dormup-c85fb.appspot.com",
    messagingSenderId: "45859120733",
    appId: "1:45859120733:web:bf07f7fe55d180add58fb4",
    measurementId: "G-C2PMK2NDWL"
  };

firebase.initializeApp(firebaseConfig); 
export const db = firebase.firestore();
export const auth = firebase.auth();
