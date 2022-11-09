import admin from 'firebase-admin';
import firebaseAccountCredentials from '../config/firebase.json' assert {type: 'json'};
import firebaseConfig from '../config/firebase.js';

admin.initializeApp({
  credential: admin.credential.cert(firebaseAccountCredentials),
  databaseURL: firebaseConfig.authDomain,
});

const database = admin.firestore();

export default database;
