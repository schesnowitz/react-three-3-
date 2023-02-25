import { useState } from "react";
import BookCreate from "./components/BookCreate";
import BookList from "./components/BookList";


function App() {
  const [books, setBooks] = useState([]);

  const deleteBookById = (id) => {
    const updatedBooks = books.filter((book) => {
      return book.id !== id;
    }); 
    setBooks(updatedBooks);
  };

  const createBook = (title) => {
    // console.log('book title -> ',title);
    const updateBooks = [...books, { 
      id: Math.round(Math.random() * 9999), 
      title: title 
    }];
    setBooks(updateBooks);
  };

  return (
    <div className="app"> 
      <BookList books={books} onDelete={deleteBookById} />
      <BookCreate onSubmitForm={createBook} />
    </div>
  );
}

export default App;

