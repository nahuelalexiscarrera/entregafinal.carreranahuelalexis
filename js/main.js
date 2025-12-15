document.addEventListener("DOMContentLoaded", function() {
    
    // --- 1. Lógica del Footer (Año actual) ---
    const yearSpan = document.getElementById('year');
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }

    // --- 2. Efecto de aparición (Humo/Niebla) ---
    const observerOptions = {
        root: null,
        threshold: 0.15 // Se activa al verse el 15% del elemento
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                observer.unobserve(entry.target); // Dejar de observar una vez animado
            }
        });
    }, observerOptions);

    const hiddenElements = document.querySelectorAll('.smoke-reveal');
    hiddenElements.forEach((el) => observer.observe(el));
});