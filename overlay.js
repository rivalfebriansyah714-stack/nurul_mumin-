// Buat overlay logo
const loader = document.createElement("div");
loader.id = "pageLoading";
loader.style.cssText = `
  position:fixed; top:0; left:0; width:100%; height:100%;
  background:#ffffff; display:flex; align-items:center;
  justify-content:center; z-index:3000;
`;
loader.innerHTML = `<img src="img/logo.png" alt="Logo" style="width:100px; animation:pulse 1.5s infinite;">`;
document.body.appendChild(loader);

// Tambahin animasi
const style = document.createElement("style");
style.textContent = `
@keyframes pulse {
  0% { transform: scale(1); opacity: 1; }
  50% { transform: scale(1.1); opacity: 0.7; }
  100% { transform: scale(1); opacity: 1; }
}`;
document.head.appendChild(style);

// Hilangin overlay setelah halaman selesai load
window.addEventListener("load", () => {
  const loader = document.getElementById("pageLoading");
  if (loader) {
    loader.style.opacity = "0";
    loader.style.transition = "opacity 0.5s ease";
    setTimeout(() => loader.remove(), 500);
  }
});