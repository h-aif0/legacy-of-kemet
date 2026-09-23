const form = document.getElementById("contactForm");

form.addEventListener("submit", function (e) {

    e.preventDefault();

    const name = document.getElementById("name");
    const email = document.getElementById("email");
    const message = document.getElementById("message");

    name.style.borderColor = "#d4af37";
    email.style.borderColor = "#d4af37";
    message.style.borderColor = "#d4af37";

    if (name.value.trim() === "") {
        alert("Please enter your name.");
        name.style.borderColor = "red";
        name.focus();
        return;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email.value.trim())) {
        alert("Please enter a valid email.");
        email.style.borderColor = "red";
        email.focus();
        return;
    }

    if (message.value.trim().length < 10) {
        alert("Message must be at least 10 characters.");
        message.style.borderColor = "red";
        message.focus();
        return;
    }

    alert("Your message has been sent successfully!");

    form.reset();
});