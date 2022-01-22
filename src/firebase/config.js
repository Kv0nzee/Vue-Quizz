import firebase from "firebase/app";
import "firebase/firestore"
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBmyok50g4KCeWopcWBYUTSpd4tfMyNwS4",
    authDomain: "blog-system-cc938.firebaseapp.com",
    projectId: "blog-system-cc938",
    storageBucket: "blog-system-cc938.appspot.com",
    messagingSenderId: "971403279648",
    appId: "1:971403279648:web:b068e53ab765d8a67e2b45",
    measurementId: "G-FY4GMDRSZC"
  };
  //init firebase
firebase.initializeApp(firebaseConfig)

// database setup
let db = firebase.firestore();
export {db};