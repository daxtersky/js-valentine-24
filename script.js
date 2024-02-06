const section__content = document.querySelectorAll('.section__content');

const observer = new IntersectionObserver((entries, showOnScroll) => {
    entries.forEach((entry) => {
    console.log(entry);
    if (entry.isIntersecting) {
        entry.target.classList.add('show');
    } else {
        entry.target.classList.remove('show');
    }
    });
}, {
    rootMargin: '0px',
    threshold: 0.005,
});

section__content.forEach((el) => observer.observe(el));