import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";

import { BrowserRouter } from "react-router-dom";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDmkOTnjiLZcPZpRfeEOKCQx2AUePYnA5k",
  authDomain: "championship-platform.firebaseapp.com",
  projectId: "championship-platform",
  storageBucket: "championship-platform.appspot.com",
  messagingSenderId: "565790506408",
  appId: "1:565790506408:web:166b2b3f2b4bf9ee05b19d",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
