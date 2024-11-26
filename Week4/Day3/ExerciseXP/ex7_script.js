let allBooks = [
    {
        title: "Harry Potter and the Philosopher\'s stone",
        author: "J. K. Rowlings",
        image: "https://upload.wikimedia.org/wikipedia/en/6/6b/Harry_Potter_and_the_Philosopher%27s_Stone_Book_Cover.jpg",
        alreadyRead: true,
    },
    {
        title: "A la recherche du temps perdu",
        author: "Marcel Proust",
        image: "https://media.lireka.com/L2JhY2tvZmZpY2UvbWVkaWEvaW1hZ2VzL2Jvb2svOTc4MjA3MDExMTI2OC9mZDY4NzJjYjJjZGIxNDNlZWY2NDNjYmQ0NjcyOGYwYzVhMjc4ODFjLmpwZWc=/fd6872cb2cdb143eef643cbd46728f0c5a27881c-500-750.jpeg?resize=fit&h=750&w=500&gq=1&v=1",
        alreadyRead: true,

    },
    {
        title: "Mrs Dalloway",
        author: "Virgina Woolf",
        image: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcSY801P9g9icDV9-th3eyxCWR23ygV6YGKa4PDHMpKY23jQC1FhDGfeRf6RoD-RtYViL0a9czn5YL0LwLqO92OWA1gWgRuH_eFpwLCvIVmL50NC4_DhFrjE&usqp=CAc",
        alreadyRead: false,

    }
]

const section = document.createElement("section");
document.body.appendChild(section);
allBooks.forEach(book => {
    const bookDiv = document.createElement("div");
    bookDiv.style.border = "1px solid #ccc"; 
    bookDiv.style.margin = "10px";
    bookDiv.style.padding = "10px";
    bookDiv.style.width = "200px";
    const bookDetails = document.createElement("p");
    bookDetails.textContent = `${book.title} written by ${book.author}`;
    bookDiv.appendChild(bookDetails);

    // Change the text color to red if the book is already read
    if (book.alreadyRead) {
        bookDetails.style.color = "red";
    }

    // Create and add the book's image
    const bookImage = document.createElement("img");
    bookImage.src = book.image;
    bookImage.alt = `${book.title} cover`;
    bookImage.style.width = "100px";
    bookDiv.appendChild(bookImage);

    // Append the book's div to the section
    section.appendChild(bookDiv);
});