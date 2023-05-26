/* ============================================= */
/*          NAVBAR TOGGLE BUTTON                 */
/* ============================================= */
const toggleBtn = document.getElementsByClassName("toggle-btn")[0];
const navbarLinks = document.getElementsByClassName("navbar-links")[0];

toggleBtn.addEventListener('click', (e) => {
    e.preventDefault()
    navbarLinks.classList.toggle('active');
})

/* ============================================= */
/*          PROJECT INFO TOGGLE BUTTON           */
/* ============================================= */
let projectInfoToggle = document.querySelectorAll(".project-toggle-btn");
let projectDetails = document.querySelectorAll(".project-details");

for (let i = 0; i < projectInfoToggle.length; i++) {
    projectInfoToggle[i].addEventListener("click", (e) => {
        projectDetails[i].classList.toggle('active');
        projectInfoToggle[i].classList.toggle('active');
    })
}