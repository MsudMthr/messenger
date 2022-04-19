import firebase from 'firebase/app'
import "firebase/auth";

export const auth = firebase.initializeApp({
  apiKey: "AIzaSyCloG32mhDOVzk27cFFHtFaPSklbLfBDZk",
  authDomain: "msudmthr-3446a.firebaseapp.com",
  projectId: "msudmthr-3446a",
  storageBucket: "msudmthr-3446a.appspot.com",
  messagingSenderId: "459661171928",
  appId: "1:459661171928:web:9b9aa4c0f34de8403b8bad",
}).auth();
