// JavaScript for handling burger menu toggle
const burger = document.getElementById('burger');
const navbarLinks = document.getElementById('navbarLinks');

burger.addEventListener('click', () => {
    navbarLinks.classList.toggle('active');
});

