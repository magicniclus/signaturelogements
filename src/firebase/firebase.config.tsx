import { FirebaseApp, getApps, initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: "breuillet-47fdc.firebaseapp.com",
  databaseURL:
    "https://breuillet-47fdc-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "breuillet-47fdc",
  storageBucket: "breuillet-47fdc.appspot.com",
  messagingSenderId: "334551426297",
  appId: "1:334551426297:web:2d04ce01844d2a6d5a2e28",
};

// Vérifier si Firebase a déjà été initialisé
let app: FirebaseApp; // Typage explicite de `app`
if (!getApps().length) {
  app = initializeApp(firebaseConfig);
} else {
  app = getApps()[0];
}

const auth = getAuth(app);
const database = getDatabase(app);

export { app, auth, database };
