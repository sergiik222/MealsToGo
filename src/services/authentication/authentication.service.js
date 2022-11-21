import { FirebaseAuth } from "../firebase/firebase.index";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";

export const loginRequest = (email, password) =>
  signInWithEmailAndPassword(FirebaseAuth, email, password);

export const registerRequest = (email, password) =>
  createUserWithEmailAndPassword(FirebaseAuth, email, password);
