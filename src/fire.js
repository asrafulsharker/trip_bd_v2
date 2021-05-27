import firebase from "firebase";


  var firebaseConfig = {
    apiKey: "AIzaSyBlV1CBE79eppUvsNfNUhrcFqOhcvdglsk",
    authDomain: "trip-bd-v1.firebaseapp.com",
    projectId: "trip-bd-v1",
    storageBucket: "trip-bd-v1.appspot.com",
    messagingSenderId: "689392528391",
    appId: "1:689392528391:web:b031fd25c979758b498ea2",
    measurementId: "G-4624ML67GP"
  };
  // Initialize Firebase
 const fire = firebase.initializeApp(firebaseConfig);
//   firebase.analytics();


export default fire;