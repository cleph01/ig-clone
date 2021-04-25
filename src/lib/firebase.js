import Firebase from 'firebase';

import 'firebase/firestore';

import 'firebase/auth';

// here i want to import the seed file
// import { seedDatabase } from '../seed';

const config = {
  apiKey: 'AIzaSyBORB99EiER3wyCsxSgzKKpmdJPqpw0_c4',
  authDomain: 'socialiite-app-dev-9f7d8.firebaseapp.com',
  projectId: 'socialiite-app-dev-9f7d8',
  storageBucket: 'socialiite-app-dev-9f7d8.appspot.com',
  messagingSenderId: '269034692912',
  appId: '1:269034692912:web:22d0a3259384646ee7a8f5',
  measurementId: 'G-LJYS6SE76V'
};

const firebase = Firebase.initializeApp(config);

const { FieldValue } = Firebase.firestore;

// here is where I want to call the seed file
// seedDatabase(firebase);

console.log('firebase', firebase);

export { firebase, FieldValue };
