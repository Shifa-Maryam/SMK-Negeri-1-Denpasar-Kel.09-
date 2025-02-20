// Sticky Navbar Effect on Scroll
window.addEventListener("scroll", () => {
    const navbar = document.querySelector("nav");
    if (!navbar) return; // Pastikan navbar ada sebelum mengubah gaya

    if (window.scrollY > 50) {
        navbar.style.backgroundColor = "#0d47a1";
        navbar.style.boxShadow = "0 4px 10px rgba(0, 0, 0, 0.1)";
    } else {
        navbar.style.backgroundColor = "#1565c0";
        navbar.style.boxShadow = "none";
    }
});

// Smooth Scroll to Sections on Navbar Click
const navLinks = document.querySelectorAll('nav a');
if (navLinks.length > 0) {
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href').slice(1); // Mendapatkan id tanpa '#'
            const target = document.getElementById(targetId);

            if (target) {
                window.scrollTo({
                    top: target.offsetTop - 70,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Scroll Animations on Section Hover
const sections = document.querySelectorAll('section');
sections.forEach(section => {
    section.addEventListener('mouseenter', () => {
        section.style.transition = 'transform 0.3s ease';
        section.style.transform = 'scale(1.02)';
    });
    section.addEventListener('mouseleave', () => {
        section.style.transform = 'scale(1)';
    });
});

// Card Hover Effect
const cards = document.querySelectorAll('.card');
cards.forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.transition = 'transform 0.3s ease';
        card.style.transform = 'translateY(-5px)';
    });
    card.addEventListener('mouseleave', () => {
        card.style.transform = 'translateY(0)';
    });
});
