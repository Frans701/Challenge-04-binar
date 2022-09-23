import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export const Todos = ({ name, id, onDelete, complete, handleUpdateCheck }) => {
  const [isEdit, setIsEdit] = useState(false);
  const redirect = useNavigate();

  const handleEdit = () => {
    setIsEdit(!isEdit);
    redirect(`/edit/${id}`);
  };

  const handleDelete = () => {
    onDelete(id);
  };

  const handleCheck = (id, data) => {
    handleUpdateCheck(id, data);
  };

  return (
    <div>
      <div className="flex mt-3 justify-between w-full border p-3">
        <p
          style={
            complete
              ? {
                  textDecoration: "line-through",

                  color: "red",
                }
              : { textDecoration: "none" }
          }
        >
          <div className="user-name">{name}</div>
        </p>

        <div>
          <div className="flex items-center">
            {complete === true ? (
              <input
                id="default-checkbox"
                type="checkbox"
                value={complete}
                defaultChecked
                onChange={() => handleCheck(id, complete)}
                class="block w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              />
            ) : (
              <input
                id="default-checkbox"
                type="checkbox"
                value={complete}
                onChange={() => handleCheck(id, complete)}
                class="block w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              />
            )}

            <button
              class=" block ml-2 bg-yellow-400 hover:bg-yellow-700 font-medium px-4 rounded"
              onClick={handleEdit}
            >
              Edit
            </button>
            <button
              class="block ml-2 bg-red-700 text-white font-medium px-2 rounded"
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
