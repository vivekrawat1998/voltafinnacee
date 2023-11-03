import { initializeApp } from "firebase/app";
import { getFirestore , collection } from 'firebase/firestore'


  const firebaseConfig = {
    apiKey: "AIzaSyDhNSA2cHoHEi2b0X2UU2GyoAVm62Cm7nk",
    authDomain: "volta-finance.firebaseapp.com",
    projectId: "volta-finance",
    storageBucket: "volta-finance.appspot.com",
    messagingSenderId: "913103272735",
    appId: "1:913103272735:web:11ba8b7a95e57e85a4ce2a",
    measurementId: "G-SJ9MNWNZWR"
  
  // Initialize Firebase

  }


  const app = initializeApp(firebaseConfig);
  export const db = getFirestore(app);
 export const volta= collection( db , "contacts");
export default app