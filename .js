const background = document.querySelector('.background');

window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    background.style.transform = `translateY(${scrollY * 0.5}px)`;
});
