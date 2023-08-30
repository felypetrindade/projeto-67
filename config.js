import firebase from 'firebase';

// adicione SDK do Firebase
var firebaseConfig = {
    apiKey: "AIzaSyANAY_HbLUrSkNP6M_xcs6rVYIlKZPlSss",
    authDomain: "projeto-67-38741.firebaseapp.com",
    projectId: "projeto-67-38741",
    storageBucket: "projeto-67-38741.appspot.com",
    messagingSenderId: "1076819705274",
    appId: "1:1076819705274:web:c3ce256b1681a4cb8fb183"
  };
// Initialice o Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();