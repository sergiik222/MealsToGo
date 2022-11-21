import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCTlwmjt-cYEDL5gsAyTtDWWKbuLIeQoAQ",
  authDomain: "mealstogo-83c0f.firebaseapp.com",
  projectId: "mealstogo-83c0f",
  storageBucket: "mealstogo-83c0f.appspot.com",
  messagingSenderId: "944540926647",
  appId: "1:944540926647:web:716060d998ff83b6234332",
};

export const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth(FirebaseApp);
