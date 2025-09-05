import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyB3nl_uMoDV8Uau7YwP4WRwlp__XOZxgPQ",
  authDomain: "pesantren-app-e9ca2.firebaseapp.com",
  projectId: "pesantren-app-e9ca2",
  storageBucket: "pesantren-app-e9ca2.firebasestorage.app",
  messagingSenderId: "3392917634",
  appId: "1:3392917634:web:560a37a3c6c9543faf249b",
  measurementId: "G-QX8HEG9HSB"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);