let elements = Array.from(document.querySelectorAll('.reveal'));

elements.map(elem => {
    document.addEventListener('scroll', e => {
        let top = elem.getBoundingClientRect().top - window.innerHeight;
        let bottom = elem.getBoundingClientRect().bottom - window.innerHeight;
        -window.innerHeight < bottom && top < 0 ? elem.classList.add('reveal_active') : elem.classList.remove('reveal_active');
    });
});
