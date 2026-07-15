// ===========================
// ST JOSE WOODWORK VERSION 2
// ===========================

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', function (e) {
        const target = document.querySelector(this.getAttribute('href'));

        if (target) {
            e.preventDefault();

            target.scrollIntoView({
                behavior: "smooth"
            });
        }
    });
});

// Fade in sections on scroll
const sections = document.querySelectorAll("section");

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add("show");

        }

    });

}, {

    threshold: .2

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
