import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBNrXDMQzDcNPQ4EGKhJpUIUii56DW8Bug",
  authDomain: "cardapio-digital-b64d8.firebaseapp.com",
  projectId: "cardapio-digital-b64d8",
  storageBucket: "cardapio-digital-b64d8.appspot.com",
  messagingSenderId: "739126006422",
  appId: "1:739126006422:web:498a4262ef3882292e68b7",
  measurementId: "G-9GTK41X9QF",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Autenticacao
const authFirebase = getAuth(app);

// Banco de dados
const dbBanco = getFirestore(app);

export { authFirebase, dbBanco };
