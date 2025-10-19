import { initializeApp, getApps, getApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

// For local development, you need to set up your web app credentials.
// 1. Go to Project Settings in Firebase console.
// 2. In "Your apps", select your web app or create a new one.
// 3. Under "Firebase SDK snippet", choose "Config".
// 4. Copy the firebaseConfig object and create a .env.local file.
// 5. Add the keys from firebaseConfig to .env.local, prefixed with NEXT_PUBLIC_.
//    e.g., NEXT_PUBLIC_FIREBASE_API_KEY="..."

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
};

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore(app);

export { db };
