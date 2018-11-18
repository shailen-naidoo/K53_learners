import firebase, { firestore } from "firebase/app";
import "firebase/auth";

const fb = firebase.initializeApp({
  apiKey: "AIzaSyB0lhXA-afxkMB_O4telpDu7JdHWfthZGo",
  authDomain: "k53-learners.firebaseapp.com",
  databaseURL: "https://k53-learners.firebaseio.com",
  projectId: "k53-learners",
  storageBucket: "k53-learners.appspot.com",
  messagingSenderId: "370320088979"
});

export const provider = new firebase.auth.GoogleAuthProvider();
export const auth = firebase.auth();
export const LOCAL = firebase.auth.Auth.Persistence.LOCAL;