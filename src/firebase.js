//  TODO: Add SDKs for Firebase products that you want to use
//      https://firebase.google.com/docs/web/setup#available-libraries 

import firebase from 'firebase';

  // Your web app's Firebase configuration
  const config = {
    apiKey: "AIzaSyBP9tO4U4Ffn7HTcI8bC57kjXpmxizG9S8",
    authDomain: "city-builder-8d103.firebaseapp.com",
    databaseURL: "https://city-builder-8d103.firebaseio.com",
    projectId: "city-builder-8d103",
    storageBucket: "city-builder-8d103.appspot.com",
    messagingSenderId: "1021961181135",
    appId: "1:1021961181135:web:a9df5c615a73f17e27e4ba"
  };
  // Initialize Firebase
  firebase.initializeApp(config);

  export default firebase;
