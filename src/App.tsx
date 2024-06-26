import React from "react";
import BookForm from "./components/BookForm";
import BookList from "./components/BookList";
import SearchBar from "./components/SearchBar";
import useLocalStorage from "./hooks/useLocalStorage";
import { Book } from "./types/BookTypes";

import "./App.scss";

function App() {
  // Declare the use of useLocalStorage with the Book array type
  const [books, setBooks] = useLocalStorage<Book[]>("books", []);
  const [searchQuery, setSearchQuery] = React.useState<string>("");
  const [editBook, setEditBook] = React.useState<Book | null>(null);

  const handleFormSubmit = (book: Book) => {
    if (editBook && books.some((b) => b.id === book.id)) {
      setBooks(books.map((b) => (b.id === book.id ? book : b)));
    } else {
      const newBook = { ...book, id: Math.random() }; // Ensure unique ID for new books
      setBooks([...books, newBook]);
    }
    setEditBook(null); // Reset edit book after submitting
  };

  const handleDelete = (bookId: number) => {
    setBooks(books.filter((book) => book.id !== bookId));
  };

  const handleEdit = (book: Book) => {
    setEditBook(book);
  };

  const handleSearch = (query: string) => {
    setSearchQuery(query);
  };

  const filteredBooks = books.filter((book) =>
    book.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="app">
      <SearchBar onSearch={handleSearch} />
      <BookForm onSubmit={handleFormSubmit} initialData={editBook} />
      <BookList
        books={filteredBooks}
        onEdit={handleEdit}
        onDelete={handleDelete}
      />
    </div>
  );
}

export default App;
