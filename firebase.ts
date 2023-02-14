// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD0DsZK1opy2cUFcldhXWOca1OPVGhIGTM",
  authDomain: "chatgpt-app-edf1e.firebaseapp.com",
  projectId: "chatgpt-app-edf1e",
  storageBucket: "chatgpt-app-edf1e.appspot.com",
  messagingSenderId: "815107257578",
  appId: "1:815107257578:web:03295f8ceb47ed1a921393"
};


// Initialize Firebase
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
