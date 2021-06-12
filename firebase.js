import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCBfJ81INM-w97aQm15JEnx8CIYgw28-tM",
  authDomain: "whatsapp-49c16.firebaseapp.com",
  projectId: "whatsapp-49c16",
  storageBucket: "whatsapp-49c16.appspot.com",
  messagingSenderId: "32337511231",
  appId: "1:32337511231:web:07f6c33da15bd91ab9898a"
};

const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

const db = app.firestore();
const auth = app.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };
