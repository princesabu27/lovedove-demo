document.addEventListener('scroll', () => {
    const childDiv = document.querySelector('.child');
    const scrollPosition = window.scrollY;
    const parentHeight = document.querySelector('.parent').offsetHeight;

    if (scrollPosition > parentHeight / 1000) {
        childDiv.classList.add('show');
    } else {
        childDiv.classList.remove('show');
    }
});
