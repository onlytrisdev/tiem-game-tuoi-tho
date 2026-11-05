if (typeof firebase === 'undefined') throw new Error('hosting/init-error: Firebase SDK not detected. You must include it before /__/firebase/init.js');
firebase.initializeApp({
  "apiKey": "AIzaSyDyhVsEvSJzCKXYELLM2nRK4bDJ8Y7CVzY",
  "authDomain": "lines-98-game.firebaseapp.com",
  "databaseURL": "https://lines-98-game-default-rtdb.firebaseio.com",
  "messagingSenderId": "862488686126",
  "projectId": "lines-98-game",
  "storageBucket": "lines-98-game.appspot.com"
});