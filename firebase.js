import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { getAuth, signInWithEmailAndPassword as signIn, GoogleAuthProvider, signInWithPopup,createUserWithEmailAndPassword } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAOXZMT24YNnMtWRXBmXEwLFi_AOXJjtOw",
  authDomain: "jobportalproject-482f7.firebaseapp.com",
  projectId: "jobportalproject-482f7",
  storageBucket: "jobportalproject-482f7.appspot.com",
  messagingSenderId: "762502573562",
  appId: "1:762502573562:web:92c009c6085ab33ffd8843"
};

// Initialize Firebase app
const app = initializeApp(firebaseConfig);


const firestore = getFirestore(app);
// Get authentication instance
const auth = getAuth(app);

// Sign in with email and password
const signInWithEmailAndPassword = async (email, password) => {
  try {
    await signIn(auth, email, password);
    console.log("Signed in successfully!");
    // Handle successful sign-in (e.g., redirect)
  } catch (error) {
    console.error("Error signing in:", error.message);
    // Handle sign-in error (e.g., display error message)
  }
};

// Sign in with Google
const signInWithGoogle = async () => {
  try {
    const provider = new GoogleAuthProvider();
    await signInWithPopup(auth, provider);
    console.log("Signed in with Google successfully!");
    // Handle successful sign-in (e.g., redirect)
  } catch (error) {
    console.error("Error signing in with Google:", error.message);
    // Handle sign-in error (e.g., display error message)
  }
};

// Sign up with email and password
const signUpWithEmailAndPassword = async (email, password) => {
  try {
    await createUserWithEmailAndPassword(auth, email, password);
    console.log("User account created successfully!");
    // Handle successful account creation (e.g., redirect)
  } catch (error) {
    console.error("Error signing up:", error.message);
    // Throw error to handle in the component or UI
    throw error;
  }
};

export { auth, signInWithEmailAndPassword, signInWithGoogle, signUpWithEmailAndPassword,firestore };
