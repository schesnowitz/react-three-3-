import { useState } from "react";
import BookCreate from "./components/BookCreate";

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
    <div>
      {books.length}
      <BookCreate onSubmitForm={createBook} />
    </div>
  );
}

export default App;
