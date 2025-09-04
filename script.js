// Sidebar toggle
const menuBtn = document.getElementById('menuBtn');
const sidebar = document.querySelector('.sidebar');
const closeBtn = document.querySelector('.close-btn');
const overlay = document.querySelector('.overlay');
const darkModeBtn = document.getElementById('darkModeBtn');

// Toggle sidebar
if (menuBtn) {
    menuBtn.addEventListener('click', () => {
        if (sidebar.style.width === '250px') {
            sidebar.style.width = '0';
            overlay.classList.remove('active');
        } else {
            sidebar.style.width = '250px';
            overlay.classList.add('active');
        }
    });
}

// Close sidebar with button
if (closeBtn) {
    closeBtn.addEventListener('click', () => {
        sidebar.style.width = '0';
        overlay.classList.remove('active');
    });
}

// Close sidebar when clicking overlay
if (overlay) {
    overlay.addEventListener('click', () => {
        sidebar.style.width = '0';
        overlay.classList.remove('active');
    });
}

// Dark mode toggle
if (darkModeBtn) {
    darkModeBtn.addEventListener('click', () => {
        document.body.classList.toggle('dark');
    });
}

// Header transparan effect saat scroll
window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    if (window.scrollY > 10) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// Animasi scroll (fade-in)
const containers = document.querySelectorAll('.container');
window.addEventListener('load', () => {
    containers.forEach((container) => {
        setTimeout(() => {
            container.classList.add('show');
        }, 300);
    });
});

// Cari tombol dark mode di halaman
const darkModeToggle = document.getElementById("darkModeToggle");

// Cek apakah dark mode aktif sebelumnya
if (localStorage.getItem("darkMode") === "enabled") {
    document.body.classList.add("dark-mode");
}
