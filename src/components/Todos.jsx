import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export const Todos = ({ name, id, onDelete, complete }) => {
  const [isEdit, setIsEdit] = useState(false);
  const redirect = useNavigate();

  const handleEdit = () => {
    setIsEdit(!isEdit);
    redirect(`/edit/${id}`);
  };

  const handleDelete = () => {
    onDelete(id);
  };

  return (
    <div>
      <div className="flex mt-4 justify-center">
        <div className="user-name">{name}</div>
        <div className="user-name">{complete}</div>
        <div className="ml-4">
          <button
            class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-4 rounded"
            onClick={handleEdit}
          >
            Edit
          </button>
          <button
            class="ml-4 bg-red-700 text-white font-bold py-1 px-4 rounded"
            onClick={handleDelete}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};
