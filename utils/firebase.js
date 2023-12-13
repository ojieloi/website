import firebase from "firebase/compat/app";
import "firebase/compat/firestore";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAn4kQuReeRtnYmkfmdWd9rvDCozAcWp9Q",
  authDomain: "website-7eca3.firebaseapp.com",
  projectId: "website-7eca3",
  storageBucket: "website-7eca3.appspot.com",
  messagingSenderId: "1081419120587",
  appId: "1:1081419120587:web:dd6914109ac77443f9804e",
  measurementId: "G-KPG9G8B7MQ",
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

const firestore = firebase.firestore();

export { firestore };
