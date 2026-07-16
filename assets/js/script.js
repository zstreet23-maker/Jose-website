// ===========================
// ST JOSE WOODWORK
// Version 2
// ===========================

// Fade in sections
const sections = document.querySelectorAll("section");

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add("show");

        }

    });

}, {

    threshold: 0.2

});

sections.forEach(section => {

    section.classList.add("hidden");

    observer.observe(section);

});

// Floating Call Button

const callButton = document.createElement("a");

callButton.href = "tel:8645169410";

callButton.innerHTML = "📞";

callButton.className = "floating-call";

document.body.appendChild(callButton);

// Copyright Year

const footerYear = document.getElementById("year");

if (footerYear) {

    footerYear.textContent = new Date().getFullYear();

}
