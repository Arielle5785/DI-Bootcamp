// Retrieve the form and console.log it.
let forms = document.querySelector('form')
// console.log(forms)
// Retrieve the inputs by their id and console.log them.

// Retrieve the inputs by their name attribute and console.log them.
// let fieldsID = document.querySelectorAll('input');
// fieldsID.forEach((input, index) => {
//     console.log(`Input ${index}:`, input.id);
// });
// When the user submits the form (ie. submit event listener)
// use event.preventDefault(), why ? to not refresh the screen and keep the info typed.
// get the values of the input tags,
// make sure that they are not empty,
forms.addEventListener('submit', function(event) {
    event.preventDefault()
    let firstName = document.querySelector('#fname').value;
    // console.log(`First Name: ${document.querySelector('#fname').value}`);
    let lastName = document.querySelector('#lname').value;
    if (fname.value === '' || lname.value === ''){
        alert('Enter your first name and last name, please.');
        return;
    }
    // console.log(`First Name: ${firstName}`);
    // console.log(`Last Name: ${lastName}`);
    let userList = document.querySelector('.usersAnswer');
    let li1 = document.createElement('li');
    let li2 = document.createElement('li');
    li1.textContent = `First Name: ${firstName}`;
    li2.textContent = `Last Name: ${lastName}`;
    userList.appendChild(li1);
    userList.appendChild(li2);
});


// create an li per input value,
// then append them to a the <ul class="usersAnswer"></ul>, below the form.
// The output should be :

// <ul class="usersAnswer">
//     <li>first name of the user</li>
//     <li>last name of the user</li>
// </ul>

// let userList = document.querySelector('.userAnswer');
// let li1 = document.createElement('li');
// let li2 = document.createElement('li');
// li1.textContent = `first name of the user is ${firstName}`;
// li2.textContent = `last name of the user is ${lastName}`;
// userList.appendChild(li1);
// userList.appendChild(li2);
