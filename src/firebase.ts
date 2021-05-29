import * as firebase from "firebase";

let firebaseConfig = {
  apiKey: "AIzaSyDmza760gAOtqWDnVTArkNpbaPr3jfCjTk",
  authDomain: "dormup-c85fb.firebaseapp.com",
  projectId: "dormup-c85fb",
  storageBucket: "dormup-c85fb.appspot.com",
  messagingSenderId: "45859120733",
  appId: "1:45859120733:web:bf07f7fe55d180add58fb4",
  measurementId: "G-C2PMK2NDWL",
};

const app = firebase.default.initializeApp(firebaseConfig);
export const db = app.firestore(); 
export const auth = app.auth(); 