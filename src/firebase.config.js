// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDbSvLntAxnq_do-_GZHhb7E9iQS5j-9pc",
  authDomain: "house-marketplace-89b3d.firebaseapp.com",
  projectId: "house-marketplace-89b3d",
  storageBucket: "house-marketplace-89b3d.appspot.com",
  messagingSenderId: "856048027667",
  appId: "1:856048027667:web:cbeeb2ebef33e4965357e6",
};

// Initialize Firebase
initializeApp(firebaseConfig);

export const db = getFirestore();
