// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBR9Cyi-JdB0ZPq7kSZ2rBfJuMl3FwzPW0",
  authDomain: "slack-clone-be2e1.firebaseapp.com",
  databaseURL: "https://slack-clone-be2e1.firebaseio.com",
  projectId: "slack-clone-be2e1",
  storageBucket: "slack-clone-be2e1.appspot.com",
  messagingSenderId: "524965581108",
  appId: "1:524965581108:web:607ad92ed514e3a2ff1561",
  measurementId: "G-QN84V88333",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
