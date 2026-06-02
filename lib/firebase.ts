import { initializeApp, getApps, getApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getFirestore as getFirestoreLite } from 'firebase/firestore/lite';

const firebaseConfig = {
    apiKey: "AIzaSyA0Q8zjdN3iaIdVED5Uo214isb6shTOY9Q",
    authDomain: "papacasample.firebaseapp.com",
    projectId: "papacasample",
    storageBucket: "papacasample.firebasestorage.app",
    messagingSenderId: "443144285445",
    appId: "1:443144285445:web:fd3c768b5623d099295b6c",
    measurementId: "G-T4SWGLPRD7"
};

export const app = getApps().length > 0 ? getApp() : initializeApp(firebaseConfig);

// Standard Firestore for Client-side operations (Admin CMS forms)
export const db = getFirestore(app);

// Lite Firestore for Server-Side Rendering (Fast initial loads, no open sockets)
export const dbLite = getFirestoreLite(app);
