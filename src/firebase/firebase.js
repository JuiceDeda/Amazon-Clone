import firebase from "firebase";


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAn0aOB2YY7gNvks1JeTYhVYr4N1BnfI58",
  authDomain: "clone-e5d5e.firebaseapp.com",
  projectId: "clone-e5d5e",
  storageBucket: "clone-e5d5e.appspot.com",
  messagingSenderId: "29353936073",
  appId: "1:29353936073:web:566688f81374cde1077918",
  measurementId: "G-8Y670S1VPQ"
};
const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };