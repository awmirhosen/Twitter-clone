// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyByhmESOXQpIIRa8rLsHpua9D_1KJ8dq2E",
    authDomain: "twitter-8c45c.firebaseapp.com",
    projectId: "twitter-8c45c",
    storageBucket: "twitter-8c45c.appspot.com",
    messagingSenderId: "296317749710",
    appId: "1:296317749710:web:520ae7c70b03b4be3fc39f"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();
export { app, db, storage };