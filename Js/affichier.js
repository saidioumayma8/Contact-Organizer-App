
let contacts = [];
function loadContacts() {
    
    contacts = JSON.parse(localStorage.getItem('contacts')) || [];

 
    displayContacts(contacts);
}


function saveContacts() {
    
    localStorage.setItem('contacts', JSON.stringify(contacts));
}
function displayContacts(contactsToDisplay) {
   
    const tbody = document.querySelector('#contactList');

    
    tbody.innerHTML = '';

    
    contactsToDisplay.forEach(contact => {
        const row = document.createElement('tr');
        row.innerHTML = 
        `    

            <td>${contact.name}</td>
            <td>${contact.email}</td>
            <td>${contact.gender}</td>
            <td>${contact.city}</td>
            <td>${contact.phone}</td>
            <td class="action-buttons">
            
                <button class="delete" onclick="deleteContact(${contact.id})">Delete</button>
            </td>
        `;
      
        
        tbody.appendChild(row);
    });
}

function deleteContact(id) {
    
    contacts = contacts.filter(contact => contact.id !== id);

    
    saveContacts();

    
    displayContacts(contacts);
}

function saveContacts() {

    localStorage.setItem('contacts', JSON.stringify(contacts));
}

function loadContacts() {

    const storedContacts = localStorage.getItem('contacts');
    if (storedContacts) {
        contacts = JSON.parse(storedContacts);
    }
}


window.onload = function() {
    loadContacts();
    displayContacts(contacts);
};