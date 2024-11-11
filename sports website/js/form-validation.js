document.addEventListener("DOMContentLoaded", function () {
    const contactForm = document.getElementById("contactForm");

    contactForm.addEventListener("submit", function (event) {
        event.preventDefault();

        const nameInput = document.getElementById("name");
        const emailInput = document.getElementById("email");
        const messageInput = document.getElementById("message");
        const formMessage = document.getElementById("formMessage");

        // Reset error messages
        nameInput.classList.remove("error");
        emailInput.classList.remove("error");
        messageInput.classList.remove("error");
        formMessage.textContent = "";

        let isValid = true;

        // Name validation
        if (nameInput.value.trim() === "") {
            nameInput.classList.add("error");
            formMessage.textContent = "Please fill out all fields correctly.";
            isValid = false;
        }

        // Email validation
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(emailInput.value.trim())) {
            emailInput.classList.add("error");
            formMessage.textContent = "Please provide a valid email.";
            isValid = false;
        }

        // Message validation
        if (messageInput.value.trim() === "") {
            messageInput.classList.add("error");
            formMessage.textContent = "Please fill out all fields correctly.";
            isValid = false;
        }

        if (isValid) {
            formMessage.textContent = "Thank you! Your message has been sent.";
            formMessage.style.color = "green";
            contactForm.reset();
        } else {
            formMessage.style.color = "red";
        }
    });
});









