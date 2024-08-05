import { Book, createBook, addBook, books, bookList } from './index.js';

describe("addBook", () => {
    afterEach(() => {
        books.clear();
        bookList.length = 0;
    });

    it("should add a new book with availability and sales data", () => {
        const book = addBook("Dune", "Frank Herbert", "9780441172719", 10, 5);
        expect(book).toHaveProperty("title", "Dune");
        expect(book).toHaveProperty("sales", 5);
        expect(book).toHaveProperty("availability", 10);
        expect(bookList).toHaveLength(1);
    });

    it("should create only unique Book instances for unique ISBNs", () => {
        addBook("Harry Potter", "JK Rowling", "AB123", false, 100);
        addBook("Harry Potter", "JK Rowling", "AB123", true, 50);
        addBook("To Kill a Mockingbird", "Harper Lee", "CD345", true, 10);
        addBook("To Kill a Mockingbird", "Harper Lee", "CD345", false, 20);
        addBook("The Great Gatsby", "F. Scott Fitzgerald", "EF567", false, 20);

        // Assert that there are only 3 unique Book instances in the map
        expect(books.size).toBe(3);

        // Optionally, assert that there are 5 copies in the bookList
        expect(bookList.length).toBe(5);
    });

    it("should utilize createBook to handle ISBN uniqueness", () => {
        addBook("Foundation", "Isaac Asimov", "9780553293357", 20, 12);
        const book2 = addBook("Foundation", "Isaac Asimov", "9780553293357", 15, 8);


        expect(book2.isbn).toBeDefined();
        expect(books.get(book2.isbn)).toBeInstanceOf(Book);
        expect(books.size).toBe(1);
    });
});