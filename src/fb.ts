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

/*
let firstNames = ["Girish", "Greash", "Tymur", "Timmer", "Yash", "Yass", "Jackie", "Jakey"]
let lastNames = ["Dodda", "Dodder", "Arsentiev", "Arsonist", "Chhatre", "Chowder", "Liu", "Loo"]
let colleges = ["College of Lake County", "UoI Urbana-Champagne", "Northwestern University", "University of Chicago",
    "Stanford University", "Perdue University", "University of Michigan", "Loyola University"]
let hobbies = ["archery", "bass-fishing", "cooking", "dogs", "environment", "foraging", "gaming", "hockey", "ice-skating", "jousting", "kayaking", "logging", "minecraft", "norse-mythology",
    "oranges", "politics", "role-playing", "rioting", "sewing", "programming", "technology", "skiing", "scuba-diving", "fishing", "running", "boxing", "biking"]

db.collection("users").add({
    first_name: firstNames[random(0, 8)],
    last_name: lastNames[random(0, 8)],
    age: Math.round(Math.random() * 100),
    college: colleges[random(0, 8)],
    tags: randomArr(random(1, 5), hobbies),
    pfp: "https://upload.wikimedia.org/wikipedia/commons/0/0e/Lakeyboy_Silhouette.PNG",
    bio: "i'm sure this person has something interesting to say!",
    major: "Human Resources",
    gender: randomArr(1, ["M", "F"])[0],
});

function random(min, max) {
    return Math.round(Math.random() * (max - min)) + min;
}

function randomArr(a, arr) {
    let r: any = [];
    for (let i = 0; i < a; i++) {
        r.push(arr[random(0, arr.length)])
    }
    return r;
}
*/
