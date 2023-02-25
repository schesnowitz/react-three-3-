function BookShow({book, onDelete}) {

  const handleClicker = () => {
    onDelete(book.id);
  };


  return (
    <div className="book-show">{book.title}
    <div className="actions">
      <button className="delete" onClick={handleClicker}>Delete</button>
    </div>
    </div>
  )
}

export default BookShow; 