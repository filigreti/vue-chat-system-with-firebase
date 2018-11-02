import firebase from 'firebase'
import firestore from 'firebase/firestore'




var config = {
    apiKey: "AIzaSyC91LGQeCtKpIrzQRF0LPc9bk3ogHPDOwc",
    authDomain: "chat-bot-86582.firebaseapp.com",
    databaseURL: "https://chat-bot-86582.firebaseio.com",
    projectId: "chat-bot-86582",
    storageBucket: "chat-bot-86582.appspot.com",
    messagingSenderId: "769113449857"
  };
  const firebaseApp = firebase.initializeApp(config);
firebaseApp.firestore().settings({ timestampsInSnapshots: true })


  export default firebaseApp.firestore()