/**
 * FLYWEIGHT PATTERN
 * Reuse existing instances when working with identical objects
 * 
 * - The flyweight pattern is a useful way to conserve memory when we're creating a large number 
 *   of similar objects.
 */

/**
 * We want users to be able to add books. All books have a title, an author, and an isbn number. However,
 * a library usually doesn't have just one copy of a book: It usually has multiple copies of the same book.
 * 
 * It wouldn't be very useful to create a new book instance each time if there are multiple copies of the exact
 * same book. Instead, we want to create multiple instances of the Book constructor, that represent a single book.
 */
class Book{
  constructor(title, author, isbn){
    this.title = title;
    this.author = author;
    this.isbn = isbn;
  }
}

const books = new Map();
const createBook = (title, author, isbn) => {
  const existingBook = books.has(isbn);
  if(existingBook){
    return books.get(isbn);
  }

  const book = new Book(title, author, isbn);
  books.set(isbn, book);

  return book;
}

const bookList = [];
const addBook = (title, author, isbn, availability, sales) => {
  const book = {
    ...createBook(title, author, isbn),
    sales,
    availability,
    isbn
  };

  bookList.push(book);
  return book;
}

addBook("Harry Potter", "JK Rowling", "AB123", false, 100);
addBook("Harry Potter", "JK Rowling", "AB123", true, 50);
addBook("To Kill a Mockingbird", "Harper Lee", "CD345", true, 10);
addBook("To Kill a Mockingbird", "Harper Lee", "CD345", false, 20);
addBook("The Great Gatsby", "F. Scott Fitzgerald", "EF567", false, 20);

/**
 * Perfect! Instead of creating a new Book instance each time we add a copy, we can effectively use the
 * already existing Book instance for that particular copy. Let's create 5 copies of 3 books: Harry Potter,
 * To Kill a Mockingbird, and The Great Gatsby.
 */

/**
 * The flyweight pattern is useful when you're creating a huge number of objects, which could potentially
 * drain all available RAM. It allows us to minimize the amount of consumed memory.
 * 
 * In JavaScript, we can easily solve this problem through prototypal inheritance. Nowadays, hardware
 * has GBs of RAM, which makes the flyweight pattern less important.
 */