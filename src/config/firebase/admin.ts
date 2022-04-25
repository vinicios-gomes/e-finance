import * as admin from 'firebase-admin';
import serviceAccountKey from './firebase-key.json';

if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert({
      projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
      clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
      privateKey: process.env.FIREBASE_PRIVATE_KEY,
    }),
  });
}

const firestore = admin.firestore();
const auth = admin.auth();

export { firestore, auth };