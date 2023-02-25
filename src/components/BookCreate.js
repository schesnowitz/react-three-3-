import { useState } from "react";


function BookCreate({ onSubmitForm }) {

  const [title, setTitle] = useState("");

  const handleInputChange = (event) => {
    setTitle(event.target.value)
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    // call the props with the title argument as this is what user is passing in
    onSubmitForm(title);
    // to empty the text input after submission ...
    setTitle('')
  };

  return (
    <div>
    <form onSubmit={handleFormSubmit}>
      <label>Title</label>
      <input value={title} onChange={handleInputChange} />
      <button>Create Book</button>
    </form>
    </div>
  )
}

export default BookCreate;