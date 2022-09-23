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
      <div className="flex mt-3 justify-between w-full border p-3">
        <div className="user-name">{name}</div>
        <div>
          <div className="user-name">{complete}</div>
          <div className="ml-3">
            <button
              class="bg-yellow-400 hover:bg-yellow-700 font-medium py-1 px-4 rounded"
              onClick={handleEdit}
            >
              Edit
            </button>
            <button
              class="ml-2 bg-red-700 text-white font-medium py-1 px-4 rounded"
              onClick={handleDelete}
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
