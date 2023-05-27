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

/* ============================================= */
/*              SUBMIT FORM BUTTON               */
/* ============================================= */
const submitBtn = document.getElementById("submit-btn");
const userName = document.getElementById("name");
const userEmail = document.getElementById("email");
const userMessage = document.getElementById("message");

submitBtn.addEventListener("click", (e) => {
    e.preventDefault();
    if (userName.value == "" || userEmail.value == "" || userMessage.value == "") {
        alert ("Please make sure to fill out all fields before submitting.");
    } else {
        Email.send({
            SecureToken : "86712dc0-ab8b-4707-a9b9-160f1582aa01",
            To : 'joncramer96@gmail.com',
            From : userEmail.value,
            Subject : "New Contact Form Inquiry",
            Body : userMessage.value
        }).then(
          message => alert(message)
        )
    }
});