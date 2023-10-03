// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCxBBaK7oca-7WzLZGGLBiU44wPlFrOmsA",
  authDomain: "fir-web-8c464.firebaseapp.com",
  projectId: "fir-web-8c464",
  storageBucket: "fir-web-8c464.appspot.com",
  messagingSenderId: "220861554340",
  appId: "1:220861554340:web:8bc5942002a20fb7ecd031"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth;