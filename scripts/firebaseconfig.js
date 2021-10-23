(function (window){
  'use strict';
    var App = window.App || {};

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const FirebaseConfig = {
    apiKey: "AIzaSyBBk4y_jVIXP3apoEImTHW-sB2l5GnAbhA",
    authDomain: "coffeerun-9092f.firebaseapp.com",
    projectId: "coffeerun-9092f",
    storageBucket: "coffeerun-9092f.appspot.com",
    messagingSenderId: "203530664093",
    appId: "1:203530664093:web:f6c213aad925a58fcf7c74",
    measurementId: "G-GSKMVXXNN4"
  };

  // Initialize Firebase
  App.FirebaseConfig = FirebaseConfig;
  firebase.initializeApp(App.FirebaseConfig);

  window.app = App;
})(window);