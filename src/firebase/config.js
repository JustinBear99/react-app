import * as firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyASpn0YxrzO39w_V5i3d3XjUMV7Stk5aEg",
    authDomain: "justin-asparagus.firebaseapp.com",
    databaseURL: "https://justin-asparagus.firebaseio.com",
    projectId: "justin-asparagus",
    storageBucket: "justin-asparagus.appspot.com",
    messagingSenderId: "393796590407",
    appId: "1:393796590407:web:529749cbd2933e7dce8a62"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const projectStorage = firebase.storage();
  const projectFirestore = firebase.firestore();

  export { projectStorage, projectFirestore };