/**
 * Script Principal - Proyecto Taberna Calavera
 * Autor: Alexis Carrera
 * Descripción: Maneja la lógica de interfaz, animaciones de scroll, 
 * carrusel automático y efectos ambientales (niebla).
 */

document.addEventListener("DOMContentLoaded", function() {

    // ========================================================================
    // 1. EFECTOS AMBIENTALES (Inyección DOM)
    // ========================================================================
    
    /**
     * Inyecta dinámicamente los contenedores para el efecto de niebla (Fog)
     * al inicio del body para evitar ensuciar el HTML de cada página.
     */
    const fogContainer = document.createElement('div');
    fogContainer.className = 'fog-wrapper';
    fogContainer.innerHTML = `
        <div class="fog-layer fog-layer-1"></div>
        <div class="fog-layer fog-layer-2"></div>
    `;
    
    // Inserta la niebla como primer hijo del body
    if (document.body) {
        document.body.prepend(fogContainer);
    }


    // ========================================================================
    // 2. LÓGICA DEL CARRUSEL (Hero Section)
    // ========================================================================

    const slides = document.querySelectorAll('.carousel-slide');
    const indicators = document.querySelectorAll('.indicator');
    
    // Verificación de seguridad: Solo ejecutar si existe un carrusel en la página actual
    if (slides.length > 0) {
        
        let currentSlide = 0;
        const slideInterval = 5000; // Tiempo en ms (5 segundos)
        let slideTimer; // Variable para almacenar el intervalo

        /**
         * Función para avanzar a la siguiente diapositiva.
         * Utiliza aritmética modular para crear un bucle infinito.
         */
        const nextSlide = () => {
            // Eliminar estado activo de la diapositiva actual
            slides[currentSlide].classList.remove('active');
            if(indicators[currentSlide]) indicators[currentSlide].classList.remove('active');

            // Calcular el índice de la siguiente diapositiva
            currentSlide = (currentSlide + 1) % slides.length;

            // Activar la nueva diapositiva
            slides[currentSlide].classList.add('active');
            if(indicators[currentSlide]) indicators[currentSlide].classList.add('active');
        };

        // Iniciar el ciclo automático
        slideTimer = setInterval(nextSlide, slideInterval);

        // Configuración de interactividad manual (Clic en indicadores)
        if (indicators.length > 0) {
            indicators.forEach((dot, index) => {
                dot.addEventListener('click', () => {
                    // 1. Detener el ciclo automático para evitar saltos bruscos
                    clearInterval(slideTimer); 
                    
                    // 2. Limpiar clase 'active' del elemento anterior
                    slides[currentSlide].classList.remove('active');
                    indicators[currentSlide].classList.remove('active');
                    
                    // 3. Actualizar índice y activar el seleccionado
                    currentSlide = index;
                    slides[currentSlide].classList.add('active');
                    indicators[currentSlide].classList.add('active');
                    
                    // 4. Reiniciar el ciclo automático
                    slideTimer = setInterval(nextSlide, slideInterval);
                });
            });
        }
    }


    // ========================================================================
    // 3. ACTUALIZACIÓN DINÁMICA DEL FOOTER
    // ========================================================================
    
    const yearSpan = document.getElementById('year');
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }


    // ========================================================================
    // 4. API INTERSECTION OBSERVER (Scroll Reveal)
    // ========================================================================
    
    /**
     * Configuración del observador:
     * threshold: 0.15 significa que la animación inicia cuando el 15% 
     * del elemento es visible en el viewport.
     */
    const observerOptions = {
        root: null, 
        rootMargin: '0px',
        threshold: 0.15 
    };

    const observer = new IntersectionObserver((entries, obs) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Añadir clase que desencadena la transición CSS
                entry.target.classList.add('active');
                // Dejar de observar para mejorar rendimiento (animación de una sola vez)
                obs.unobserve(entry.target); 
            }
        });
    }, observerOptions);

    // Seleccionar y observar todos los elementos con la clase .smoke-reveal
    const hiddenElements = document.querySelectorAll('.smoke-reveal');
    hiddenElements.forEach((el) => observer.observe(el));

});