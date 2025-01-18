let contacts = [];

function loadContacts() {
    contacts = JSON.parse(localStorage.getItem("contacts")) || [];
    displayContacts(contacts);
}

function displayContacts(contactList) {
    const tbody = document.querySelector("#contactList");
    tbody.innerHTML = "";

    contactList.forEach((contact) => {
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

function deleteContact(id) {
    contacts = contacts.filter((contact) => contact.id !== id);
    localStorage.setItem("contacts", JSON.stringify(contacts));
    loadContacts();
}

window.onload = loadContacts;
