import { useState } from "react";
import BookCreate from "./components/BookCreate";
function App () {

const [books, setBooks] = useState([]);

 const createBook = (title) => {
  console.log('book title -> ',title);
 };
// PASS DOWN BookCreate handler
  return(
    <div><BookCreate onSubmitForm={createBook}  /></div>
  )
}

export default App;