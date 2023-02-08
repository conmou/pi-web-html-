const firebase = require("firebase");
const firebaseConfig = {
  apiKey: "AIzaSyCaz_xTEVUDL1uAgqcAG3-cWkcBtAJTc7k",
  authDomain: "api-test-71c64.firebaseapp.com",
  projectId: "api-test-71c64",
  storageBucket: "api-test-71c64.appspot.com",
  messagingSenderId: "150620082507",
  appId: "1:150620082507:web:5ef67478fcadcb581918ce",
  measurementId: "G-VH5DJDS6KB"
};
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const User = db.collection("pi2");
module.exports = User;
