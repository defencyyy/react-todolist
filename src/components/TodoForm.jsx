import React, { useState, useRef } from "react";

function TodoForm(props) {
  const [input, setInput] = useState(props.edit ? props.edit.value : "");

  const inputRef = useRef(null);

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    props.onSubmit({
      id: Math.floor(Math.random() * 10000),
      text: input,
    });

    setInput("");
  };

  return (
    <form className="todo_form">
      {props.edit ? (
        <>
          <input
            placeholder="Update Listing"
            value={input}
            onChange={handleChange}
            name="text"
            ref={inputRef}
            className="input-edit"
          />
          <button onClick={handleSubmit} className="edit-button">
            update
          </button>
        </>
      ) : (
        <>
          <input
            placeholder="Add Listing"
            value={input}
            onChange={handleChange}
            name="text"
            className="input-add"
            ref={inputRef}
          />
          <button onClick={handleSubmit} className="add-button">
            add
          </button>
        </>
      )}
    </form>
  );
}

export default TodoForm;
