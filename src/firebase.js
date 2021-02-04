import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
 // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  apiKey: "AIzaSyCl2CZArlv5rV4JvsY9NRPbqbOd8HJxT8s",
  authDomain: "facebook-messenger-clone-7289d.firebaseapp.com",
  projectId: "facebook-messenger-clone-7289d",
  storageBucket: "facebook-messenger-clone-7289d.appspot.com",
  messagingSenderId: "136899198047",
  appId: "1:136899198047:web:e45646e2d7d2990f44efea",
  measurementId: "G-CXQWJ676EB"

});

const db = firebaseApp.firestore();

export default db;