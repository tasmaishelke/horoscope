// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey: "AIzaSyCiSvbDPQgfuouoozZEKtNN3fVh2zgvvGE",
  authDomain: "horoscope-4b2b3.firebaseapp.com",
  projectId: "horoscope-4b2b3",
  storageBucket: "horoscope-4b2b3.appspot.com",
  messagingSenderId: "827636212836",
  appId: "1:827636212836:web:190245fd34ec10398d2b71",
  measurementId: "G-KFNVX08NEF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;

export const database = getFirestore(app)