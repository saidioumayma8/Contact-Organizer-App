let contacts = [];

document.querySelector("form").addEventListener("submit", function (e) {
    e.preventDefault();

    const nom = document.getElementById("nom").value.trim();
    const prenom = document.getElementById("prenom").value.trim();
    const email = document.getElementById("email").value.trim();
    const gender = document.querySelector("input[name='gender']:checked")?.value;
    const ville = document.getElementById("ville").value;
    const telephone = document.getElementById("telephone").value.trim();

    if (!nom || !prenom || !email || !gender || !ville || !telephone) {
        alert("Please fill all fields correctly!");
        return;
    }

    const contact = {
        id: Date.now(),
        name: `${prenom} ${nom}`,
        email,
        gender,
        city: ville,
        phone: telephone,
    };

    contacts.push(contact);
    localStorage.setItem("contacts", JSON.stringify(contacts));
    alert("Contact added successfully!");
    this.reset();
});
