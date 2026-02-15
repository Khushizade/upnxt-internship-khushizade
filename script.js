// DARK MODE TOGGLE

const toggleButton = document.getElementById("modeToggle");

toggleButton.addEventListener("click", function () {
    document.body.classList.toggle("dark-mode");

    // Change icon
    if (document.body.classList.contains("dark-mode")) {
        toggleButton.textContent = "☀️";
    } else {
        toggleButton.textContent = "🌙";
    }
});


// DONATION BUTTON + COUNTER

const donateBtn = document.getElementById("donateBtn");
const donationText = document.getElementById("donationCount");

let count = 0;

donateBtn.addEventListener("click", function (e) {
    e.preventDefault(); // Prevent page jump

    count++;
    alert("Thank you for supporting our mission!");

    donationText.textContent = "Total Support Clicks: " + count;
});


// FORM VALIDATION

const form = document.getElementById("contactForm");
const messageBox = document.getElementById("formMessage");

form.addEventListener("submit", function (e) {

    e.preventDefault(); // Stop page refresh

    const name = form.querySelector("input[type='text']").value.trim();
    const email = form.querySelector("input[type='email']").value.trim();
    const message = form.querySelector("textarea").value.trim();

    if (name === "" || email === "" || message === "") {
        messageBox.style.color = "red";
        messageBox.textContent = "Please fill in all fields before submitting.";
        return;
    }

    messageBox.style.color = "green";
    messageBox.textContent = "Thank you! We will contact you soon.";

    form.reset();
});
// SCROLL REVEAL ANIMATION

const reveals = document.querySelectorAll(".reveal");

window.addEventListener("scroll", function () {

    reveals.forEach(function (section) {

        const windowHeight = window.innerHeight;
        const sectionTop = section.getBoundingClientRect().top;

        if (sectionTop < windowHeight - 100) {
            section.classList.add("active");
        }
    });

});
// ===============================
// PAGE NAVIGATION
// ===============================

function goToAbout() {
    window.location.href = "about.html";
}

function goHome() {
    window.location.href = "index.html";
}
// ===============================
// MOBILE MENU TOGGLE
// ===============================

const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", function () {
    navLinks.classList.toggle("show");
});



