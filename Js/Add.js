// Declare the users array outside the form submission handler
let users = [];

// Listen for form submission
document.querySelector("form").addEventListener("submit", function (e) {
    e.preventDefault(); // Prevent default form submission

    // Get form data
    const nom = document.getElementById("nom").value.trim();
    const prenom = document.getElementById("prenom").value.trim();
    const email = document.getElementById("email").value.trim();
    const gender = document.querySelector("input[name='gender']:checked")?.value;
    const ville = document.getElementById("ville").value;
    const telephone = document.getElementById("telephone").value.trim();

    // Validate fields
    let isValid = true;
    clearErrors();

    if (!validateName(nom)) {
        showError("nom", "Nom must only contain letters and cannot be empty.");
        isValid = false;
    }

    if (!validateName(prenom)) {
        showError("prenom", "Prénom must only contain letters and cannot be empty.");
        isValid = false;
    }

    if (!validateEmail(email)) {
        showError("email", "Please enter a valid email address.");
        isValid = false;
    }

    if (!gender) {
        showError("gender", "Please select a gender.");
        isValid = false;
    }

    if (!ville) {
        showError("ville", "Please select a city.");
        isValid = false;
    }

    if (!validatePhone(telephone)) {
        showError("telephone", "Téléphone must be exactly 10 digits.");
        isValid = false;
    }

    if (!isValid) return;

    // Add 
    const user = { nom, prenom, email, gender, ville, telephone };
    users.push(user); 
    console.log("User added:", user);  
    console.log("Current users array:", users);  

    // Optional: Update user list (display the users added)
    /*updateUserList();

    // Reset the form and clear the city dropdown
    this.reset();
    document.getElementById("ville").selectedIndex = 0;*/
});

// Validation
function validateName(name) {
    const nameRegex = /^[a-zA-Z\s]+$/;
    return nameRegex.test(name) && name.length > 0;
}

function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function validatePhone(phone) {
    const phoneRegex = /^\d{10}$/;
    return phoneRegex.test(phone);
}

// Error 
function showError(fieldId, message) {
    const inputElement = document.getElementById(fieldId);
    const errorDiv = document.createElement("div");
    errorDiv.className = "text-danger mt-1";
    errorDiv.textContent = message;
    inputElement.parentElement.appendChild(errorDiv);
}

function clearErrors() {
    const errorMessages = document.querySelectorAll(".text-danger");
    errorMessages.forEach((message) => message.remove());
}

// Update User List Function (to show added users in the console or on the page)
/*function updateUserList() {
    // Log all users to the console
    console.log("Updated user list:", users);

    // Optionally: if you want to display users on the page
    const userList = document.getElementById("user-list");
    userList.innerHTML = ""; // Clear current list

    users.forEach((user, index) => {
        const listItem = document.createElement("li");
        listItem.className = "list-group-item d-flex justify-content-between align-items-center";

        listItem.innerHTML = `
            <span>
                <strong>${user.nom} ${user.prenom}</strong> <br>
                <em>${user.email}</em> | ${user.gender} | ${user.ville} | ${user.telephone}
            </span>
            <button class="btn btn-danger btn-sm" onclick="deleteUser(${index})">Delete</button>
        `;

        userList.appendChild(listItem);
    });
}

// Function to delete a user by index (if you want to implement deletion)
function deleteUser(index) {
    users.splice(index, 1); // Remove user from the array
    updateUserList(); // Refresh the list
}*/
