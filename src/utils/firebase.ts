// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAOQqRxGHSU2_j9kNZ5KBv8p2a7Myh2e6Q",
  authDomain: "aagman-api-firebase-a3d16.firebaseapp.com",
  projectId: "aagman-api-firebase-a3d16",
  storageBucket: "aagman-api-firebase-a3d16.appspot.com",
  messagingSenderId: "492408090164",
  appId: "1:492408090164:web:ab4bd094ceabfdbcd12461",
  measurementId: "G-GH367W4KQS",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
