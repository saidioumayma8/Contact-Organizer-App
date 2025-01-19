function loadContacts() {
    const contacts = JSON.parse(localStorage.getItem("contacts")) || [];
    const tbody = document.querySelector("#contactList");
    tbody.innerHTML = ""; // Clear existing content

    contacts.forEach((contact) => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${contact.name}</td>
            <td>${contact.email}</td>
            <td>${contact.gender}</td>
            <td>${contact.city}</td>
            <td>${contact.phone}</td>
            <td>
                <button class="btn btn-danger btn-sm" onclick="deleteContact(${contact.id})">Delete</button>
            </td>
        `;
        tbody.appendChild(row);
    });
}

// Delete a contact by its ID
function deleteContact(id) {
    let contacts = JSON.parse(localStorage.getItem("contacts")) || [];
    contacts = contacts.filter((contact) => contact.id !== id);
    localStorage.setItem("contacts", JSON.stringify(contacts));
    loadContacts(); // Reload the contact list
}

// Load contacts when the page loads
window.onload = loadContacts;