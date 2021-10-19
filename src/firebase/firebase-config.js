import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/firebase-functions';
import 'firebase/database';

const firebaseConfig = {
    apiKey: "AIzaSyBScbaX_dr_ctN1T9tHIvSyfBpyHFKn1hc",
    authDomain: "tiendita-7ed13.firebaseapp.com",
    databaseURL: "https://tiendita-7ed13-default-rtdb.firebaseio.com",
    projectId: "tiendita-7ed13",
    storageBucket: "tiendita-7ed13.appspot.com",
    messagingSenderId: "699743008278",
    appId: "1:699743008278:web:3f4b31dd2c36d25ac7a737"
  };
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
//const usersRef = db.collection('users')
const db = firebase.firestore();
const google = new firebase.auth.GoogleAuthProvider();
const facebook = new firebase.auth.FacebookAuthProvider();
const functions = firebase.functions();
const database =  firebase.database();





export {
    db,
    google,
    facebook,
    firebase,  
    functions,
    database as default
}

