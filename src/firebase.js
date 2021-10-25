import firebase from 'firebase';

const firebaseConfig = {
        apiKey: "AIzaSyA5W60nJHYgOzFbL0Tv0fgnUcRD36MpZCs",
        authDomain: "eyar-tinder.firebaseapp.com",
        databaseURL: "https://eyar-tinder-default-rtdb.firebaseio.com",
        projectId: "eyar-tinder",
        storageBucket: "eyar-tinder.appspot.com",
        messagingSenderId: "293531185296",
        appId: "1:293531185296:web:6065b0927d6b303a832815",
        measurementId: "G-G6E2HD1B4P"
      };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const database = firebaseApp.firestore();

  export default database;