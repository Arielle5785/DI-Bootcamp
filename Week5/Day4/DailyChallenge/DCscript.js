document.querySelector('form').addEventListener('submit', function (event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const lastname = document.getElementById('lastname').value;
    const userName = { name, lastname };
    const jsonUserName = JSON.stringify(userName);
    console.log(jsonUserName);
    const jsonDisplay = document.createElement('p');
    jsonDisplay.textContent = jsonUserName
    document.body.appendChild(jsonDisplay);
    document.getElementById('name').value = '';
    document.getElementById('lastname').value = '';
});