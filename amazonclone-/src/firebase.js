import firebase from 'firebase';



const firebaseConfig = {
    apiKey: "AIzaSyA7x0Hi60lGnvOT1TYZV_gwECW8UDdXTxQ",
    authDomain: "e-commerce-34a07.firebaseapp.com",
    projectId: "e-commerce-34a07",
    storageBucket: "e-commerce-34a07.appspot.com",
    messagingSenderId: "49438603242",
    appId: "1:49438603242:web:2334e2708117023181e493",
    measurementId: "G-GSKSTP7KWW"
  };


  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  
  export { db, auth };