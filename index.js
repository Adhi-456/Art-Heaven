// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-auth.js";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC1y3RyGZy_JYQAF6XdrcMM6vmdt9jAaSk",
  authDomain: "arth-95ade.firebaseapp.com",
  projectId: "arth-95ade",
  storageBucket: "arth-95ade.appspot.com",
  messagingSenderId: "711871168097",
  appId: "1:711871168097:web:23240d1808b1e1734c7420"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

const submit = document.getElementById('button');
submit.addEventListener("click", function(event) {
  event.preventDefault();

  // inputs
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed up
      const user = userCredential.user;
      alert("Registered");
      // ..
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      
    });
});