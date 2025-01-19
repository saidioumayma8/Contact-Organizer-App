let contacts = [];

document.querySelector("form").addEventListener("submit", function (e) {
    e.preventDefault();

    // Get input values
    const nom = document.getElementById("nom").value.trim();
    const prenom = document.getElementById("prenom").value.trim();
    const email = document.getElementById("email").value.trim();
    const gender = document.querySelector("input[name='gender']:checked")?.value;
    const ville = document.getElementById("ville").value.trim();
    const telephone = document.getElementById("telephone").value.trim();

    // Input validation
    let valid = true;

    // Clear previous errors before validating
    clearAllErrors();

    if (!nom) {
        showError("nom", "Nom is required.");
        valid = false;
    }

    if (!prenom) {
        showError("prenom", "Prénom is required.");
        valid = false;
    }

    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        showError("email", "Invalid email format.");
        valid = false;
    }

    if (!gender) {
        alert("Please select a gender.");
        valid = false;
    }

    if (!ville) {
        showError("ville", "Ville is required.");
        valid = false;
    }

    if (!telephone || !/^\d{10}$/.test(telephone)) {
        showError("telephone", "Phone number must be 10 digits.");
        valid = false;
    }

    // Stop if validation fails
    if (!valid) return;

    // Create contact object
    const contact = {
        id: Date.now(),
        name: `${prenom} ${nom}`,
        email,
        gender,
        city: ville,
        phone: telephone,
    };

    // Save contact
    contacts.push(contact);
    localStorage.setItem("contacts", JSON.stringify(contacts));
    alert("Contact added successfully!");
    this.reset(); // Reset form
});

// Helper functions for showing and clearing errors
function showError(fieldId, message) {
    const field = document.getElementById(fieldId);
    let error = field.nextElementSibling;

    // Only create a new error message if it doesn't exist
    if (!error || error.className !== "error-message") {
        error = document.createElement("div");
        error.className = "error-message text-danger";
        field.parentNode.appendChild(error);
    }

    error.textContent = message;
}

function clearError(fieldId) {
    const field = document.getElementById(fieldId);
    const error = field.nextElementSibling;

    if (error && error.className === "error-message") {
        error.remove();
    }
}

// Clear all error messages
function clearAllErrors() {
    const errors = document.querySelectorAll(".error-message");
    errors.forEach(error => error.remove());
}
