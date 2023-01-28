const hamburger = document.querySelector('.hamburger');
const sidemenu = document.querySelector('.sidemenu');
const logo = document.querySelector('.logo');
const tailwindLogo = document.querySelector('.tailwindLogo');

hamburger.addEventListener('click', ()=> {
    sidemenu.classList.add('active');
});

tailwindLogo.addEventListener('click', ()=> {
    sidemenu.classList.remove('active');
})