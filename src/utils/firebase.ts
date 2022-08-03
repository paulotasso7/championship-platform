// firebase imports

import { initializeApp } from "firebase/app";
import { GoogleAuthProvider } from "firebase/auth";
import { getAuth } from "firebase/auth";
import "firebase/firestore";
import { firebaseConfig } from "../utils/config";

// constants
const Firebase = initializeApp(firebaseConfig);
const googleProvider = new GoogleAuthProvider();

// exports
export const Providers = {
  google: googleProvider,
};
export const auth = getAuth(Firebase);
export default Firebase;
