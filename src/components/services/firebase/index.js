import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyBQpu8Pg_aOkVudCXejjLRTY6gsHSXKlt0",
  authDomain: "ecommercepetshop-6a090.firebaseapp.com",
  projectId: "ecommercepetshop-6a090",
  storageBucket: "ecommercepetshop-6a090.appspot.com",
  messagingSenderId: "980713720969",
  appId: "1:980713720969:web:299e8092877749f7cf4a58"
};

const app = initializeApp(firebaseConfig);
export const firestoredb = getFirestore(app)