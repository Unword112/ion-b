import firebase from 'firebase';
import 'firebase/auth';

var firebaseConfig = {
    apiKey: "AIzaSyAgPb1PWhgodriuZ-f6atUG371OvCfRa_s",
    authDomain: "fir-219d1.firebaseapp.com",
    projectId: "fir-219d1",
    storageBucket: "fir-219d1.appspot.com",
    messagingSenderId: "576108716783",
    appId: "1:576108716783:web:55e811f708e7e6f1f6b11a",
    measurementId: "G-5V46KD18P5"
  };
  // Initialize Firebase
  const app = firebase.initializeApp(firebaseConfig);

  export const auth = app.auth();