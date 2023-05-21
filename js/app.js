const toggleBtn = document.getElementsByClassName("toggle-btn")[0];
const navbarLinks = document.getElementsByClassName("navbar-links")[0];

toggleBtn.addEventListener('click', (e) => {
    e.preventDefault()
    navbarLinks.classList.toggle('active');
})