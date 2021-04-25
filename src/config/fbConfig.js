import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

var firebaseConfig = {
    apiKey: "AIzaSyBCNZ3XO3ydxJhbRXqzGFoePl2wrYyVbtY",
    authDomain: "simple-one-f8e0b.firebaseapp.com",
    projectId: "simple-one-f8e0b",
    storageBucket: "simple-one-f8e0b.appspot.com",
    messagingSenderId: "1061072208683",
    appId: "1:1061072208683:web:d31c898f645bb0891fbb6e"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase;