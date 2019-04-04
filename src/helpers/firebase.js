import firebase, { firestore } from "firebase/app";
import "firebase/auth";

const fb = firebase.initializeApp(JSON.parse(process.env.VUE_APP_FIREBASE_CONFIG));

export const provider = new firebase.auth.GoogleAuthProvider();
export const auth = firebase.auth();