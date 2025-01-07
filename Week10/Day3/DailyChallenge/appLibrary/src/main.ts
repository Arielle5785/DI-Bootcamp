interface Book { title: string, author: string, isbn: string, publishedYear: number, genre?: string }

class Library {
  // private books: Book[] = [];// made an error: with the line 22: Property 'books' is private and only accessible within class 'Library'.
  protected books: Book[] = []

  public addBook(book: Book): void {
    this.books.push(book);
  }

  public getBookDetails(isbn: string): Book | undefined {
    return this.books.find((book) => book.isbn === isbn);
  }
}
class DigitalLibrary extends Library {
  public readonly website: string;

  constructor(website: string) {
    super(); // Call the parent class constructor
    this.website = website;
  }
  public listBooks(): string[] {
    return this.books.map((book) => book.title);
  }
}

const library = new DigitalLibrary("www.mylibrary.com");

library.addBook({
  title: "The Great Gatsby",
  author: "F. Scott Fitzgerald",
  isbn: "9780743273565",
  publishedYear: 1925,
  genre: "Fiction",
});

library.addBook({
  title: "1984",
  author: "George Orwell",
  isbn: "9780451524935",
  publishedYear: 1949,
});

console.log(library.getBookDetails("9780743273565"));
// Output: { title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', isbn: '9780743273565', publishedYear: 1925, genre: 'Fiction' }

console.log(library.listBooks());
// Output: [ 'The Great Gatsby', '1984' ]

console.log(library.website);
// Output: www.mylibrary.com