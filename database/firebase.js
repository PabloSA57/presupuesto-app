import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import { API_KEY_FIREBASE } from "@env";

const firebaseConfig = {
  apiKey: API_KEY_FIREBASE,
  authDomain: "presupuesto-app-e5cb9.firebaseapp.com",
  projectId: "presupuesto-app-e5cb9",
  storageBucket: "presupuesto-app-e5cb9.appspot.com",
  messagingSenderId: "1061924200767",
  appId: "1:1061924200767:web:187210433f685524d0b38a",
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

export default {
  firebase,
  db,
};