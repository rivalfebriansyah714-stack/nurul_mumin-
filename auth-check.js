import { auth } from "./firebase.js";
import { onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

// Buat overlay logo supaya gak kelihatan kilatan index.html
const loader = document.createElement("div");
loader.id = "authLoading";
loader.style.cssText = `
  position:fixed; top:0; left:0; width:100%; height:100%;
  background:#fff; display:flex; align-items:center;
  justify-content:center; z-index:2000;
`;
loader.innerHTML = `<img src="img/logo.png" alt="Logo" style="width:100px; animation:pulse 1.5s infinite;">`;
document.body.appendChild(loader);

// Animasi logo
const style = document.createElement("style");
style.textContent = `
@keyframes pulse {
  0% { transform: scale(1); opacity: 1; }
  50% { transform: scale(1.1); opacity: 0.7; }
  100% { transform: scale(1); opacity: 1; }
}`;
document.head.appendChild(style);

// Cek user login
onAuthStateChanged(auth, (user) => {
  if (!user) {
    window.location.replace("login.html");
  } else {
    const loader = document.getElementById("authLoading");
    if (loader) loader.remove();
  }
});