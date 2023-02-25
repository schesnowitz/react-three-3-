import { useState } from "react";
import BookCreate from "./components/BookCreate";
import BookList from "./components/BookList";


function App() {
  const [books, setBooks] = useState([]);



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
      <BookList books={books} />
      <BookCreate onSubmitForm={createBook} />
    </div>
  );
}

export default App;
