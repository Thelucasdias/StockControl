// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBemvjMnrxNfr8V-Ty8u7Hae9lw2avW_zA",
  authDomain: "stock-control-b7c78.firebaseapp.com",
  projectId: "stock-control-b7c78",
  storageBucket: "stock-control-b7c78.appspot.com",
  messagingSenderId: "703691141571",
  appId: "1:703691141571:web:2757d4b8fd26c43db64d76",
  measurementId: "G-0WPDYFBSMX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
let analytics;
if (typeof window !== 'undefined') {
    analytics = getAnalytics(app);
}
export { app, analytics };