import BookShow from "./BookShow";


function BookList({ books }) {
  const showTheBooks = books.map((book) => {
    return <BookShow key={book.id} book={book} />
  });

  return (
 
    <div className="book-list">{showTheBooks}</div>
  )
}

export default BookList;