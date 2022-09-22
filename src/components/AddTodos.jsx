import React from "react";

export const AddTodos = ({ onAdd }) => {
  const handleOnSubmit = (evt) => {
    evt.preventDefault();
    onAdd(evt.target.name.value);
    evt.target.name.value = "";
  };

  return (
    <form onSubmit={handleOnSubmit}>
      <h3>Add User</h3>
      <input placeholder="Name" name="name" />
      <button onSubmit={handleOnSubmit}>Add</button>
      <hr />
    </form>
  );
};
