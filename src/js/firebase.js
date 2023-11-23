import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBVmTkM5EIWAfmPm8pRorE22r3PO1UcmDg",
  authDomain: "pokemonpokedox.firebaseapp.com",
  projectId: "pokemonpokedox",
  storageBucket: "pokemonpokedox.appspot.com",
  messagingSenderId: "843992063858",
  appId: "1:843992063858:web:ae50f0521d5d2591be47eb"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
