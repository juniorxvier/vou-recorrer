document.addEventListener("DOMContentLoaded", function() {
    const hiddenElements = document.querySelectorAll('.hidden');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
                observer.unobserve(entry.target); // Para que a animação ocorra apenas uma vez
            }
        });
    }, {
        threshold: 0.1 // Quando 10% do elemento está visível, a animação começa
    });

    hiddenElements.forEach((el) => observer.observe(el));
});
