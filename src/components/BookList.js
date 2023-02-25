import BookShow from "./BookShow";


function BookList({ books, onDelete }) {
  const showTheBooks = books.map((book) => {
    return <BookShow onDelete={onDelete} key={book.id} book={book} />
  });

  return (
 
    <div className="book-list">{showTheBooks}</div>
  )
}

export default BookList;