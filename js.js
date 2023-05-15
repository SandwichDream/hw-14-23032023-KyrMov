window.onload = async () => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => {
        users.forEach(user => {
            let card = document.createElement("div");
            let name = document.createElement("h5");
            let username = document.createElement('p');
            let email = document.createElement('p');

            card.classList.add("card");
            name.classList.add("name");
            username.classList.add("content");
            email.classList.add("content");
            name.textContent = user.name;
            username.textContent = `Username: ${user.username}`;
            email.textContent = `Email: ${user.email}`;

            card.appendChild(name);
            card.appendChild(username);
            card.appendChild(email);

            let container = document.querySelector(".container");
            container.appendChild(card);
        });
    })
    .catch(error => {
        console.log("Помилка при отриманні користувачів:", error);
    });
}