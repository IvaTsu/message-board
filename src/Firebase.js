 import * as firebase from 'firebase';

 // Initialize Firebase
 var config = {
    apiKey: "AIzaSyBPzNEzafhbyYxdwjrKAPOnv-rAnL5rDBE",
    authDomain: "message-board-8e6bc.firebaseapp.com",
    databaseURL: "https://message-board-8e6bc.firebaseio.com",
    projectId: "message-board-8e6bc",
    storageBucket: "message-board-8e6bc.appspot.com",
    messagingSenderId: "773453152586"
  };
  firebase.initializeApp(config);

  export const database = firebase.database().ref('posts/');
  export const auth = firebase.auth();
  export const googleProvider = new firebase.auth.GoogleAuthProvider();
  export const twitterProvider = new firebase.auth.TwitterAuthProvider();
  export const facebookProvider = new firebase.auth.FacebookAuthProvider();