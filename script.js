function toggleClass(){
    const toggle = document.querySelector('.hamburger');
    toggle.classList.toggle('open');
    const close = document.querySelector('.navbar');
    close.classList.toggle('visible');
}