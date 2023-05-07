import { initializeApp, getApps, getApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"

// (X) Replace with your own Firebase config
const firebaseConfig = {
    apiKey: "AIzaSyBUMo-p7oLloJz6CoqKzX27c6zYEocJdPA",
    authDomain: "cu-dining-753c3.firebaseapp.com",
    projectId: "cu-dining-753c3",
    storageBucket: "cu-dining-753c3.appspot.com",
    messagingSenderId: "1041862238319",
    appId: "1:1041862238319:web:b7424b90f05272408f2d9a",
    measurementId: "G-MFR19M5HV1"
};

const app = getApps().length ? getApp() : initializeApp(firebaseConfig)

const db = getFirestore(app)

export { db }
