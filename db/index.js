import firebase from "firebase/app";
import "firebase/firestore";

const config = {
  apiKey: "AIzaSyBknw1wnjYVo8Ex7oEdht7DFDMEHKqvdGE",
  authDomain: "test-8agency.firebaseapp.com",
  projectId: "test-8agency",
  storageBucket: "test-8agency.appspot.com",
  messagingSenderId: "335401340710",
  appId: "1:335401340710:web:4feeebf8f9a49fe2d37be7",
};

firebase.initializeApp(config);

const db = firebase.firestore(); // this will let you query the database
export default db;
