import React from "react";

export const AddTodos = ({ onAdd }) => {
  const handleOnSubmit = (evt) => {
    evt.preventDefault();
    onAdd(evt.target.name.value);
    evt.target.name.value = "";
  };

  return (
    <div className="container p-4 w-[500px] mx-auto">
      <h1 className="text-2xl font-bold text-center mb-3"> TodoInput</h1>
      <form onSubmit={handleOnSubmit}>
        <div className="flex border border-gray p-4 mt-4">
          <input
            placeholder="Name"
            name="name"
            className="form-control w-full min-w-0 block  px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300  transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
          />
          <button
            className="flex justify-center btn inline-block  xl:w-[200px] px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase  hover:bg-blue-700 focus:bg-blue-700   focus:outline-none focus:ring-0 active:bg-blue-800  transition duration-150 ease-in-out flex items-center"
            onSubmit={handleOnSubmit}
          >
            Add
          </button>
        </div>
      </form>
    </div>
  );
};
