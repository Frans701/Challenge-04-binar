import React, { useEffect, useState } from "react";
import { Todos } from "../components/Todos";
import { AddTodos } from "../components/AddTodos";
import "../App.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function Home() {
  const [todos, setTodos] = useState([]);
  const [refetch, setRefetch] = useState(true);
  const [search, setSearch] = useState("");
  const redirect = useNavigate();

  useEffect(() => {
    if (refetch) {
      fetchData();
      handleSearch();
    }
  }, [refetch]);

  const fetchData = async () => {
    await fetch("https://63288bff9a053ff9aaba5f25.mockapi.io/crud")
      .then((response) => response.json())
      .then((data) => {
        setTodos(data);
        setRefetch(false);
      })
      .catch((error) => console.log(error));
  };

  const onDelete = async (id) => {
    await fetch(`https://63288bff9a053ff9aaba5f25.mockapi.io/crud/${id}`, {
      method: "DELETE",
    })
      .then((response) => {
        if (response.status !== 200) {
          return;
        } else {
          setTodos(
            todos.filter((user) => {
              return user.id !== id;
            })
          );
        }
      })
      .catch((error) => console.log(error));
  };

  const handleAdd = () => {
    redirect(`/add`);
  };

  const handleSearch = async () => {
    await fetch(
      `https://63288bff9a053ff9aaba5f25.mockapi.io/crud?search=${search}`
    )
      .then((response) => response.json())
      .then((data) => {
        setTodos(data);
        setRefetch(false);
      })
      .catch((error) => console.log(error));
  };

  const handleTodo = async () => {
    await fetch(
      `https://63288bff9a053ff9aaba5f25.mockapi.io/crud?complete=false`
    )
      .then((response) => response.json())
      .then((data) => {
        setTodos(data);
        setRefetch(false);
      })
      .catch((error) => console.log(error));
  };

  const handleDone = async () => {
    await fetch(
      `https://63288bff9a053ff9aaba5f25.mockapi.io/crud?complete=true`
    )
      .then((response) => response.json())
      .then((data) => {
        setTodos(data);
        setRefetch(false);
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className="App">
      <div className="container p-4 w-[750px] mx-auto">
        <h1 className="text-2xl font-bold"> TodoSearch</h1>
        <div className="mb-3 border border-gray p-4 mt-4">
          <div className="input-group flex w-96 mb-4">
            <button
              className="btn inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase  hover:bg-blue-700 focus:bg-blue-700   focus:outline-none focus:ring-0 active:bg-blue-800  transition duration-150 ease-in-out flex items-center"
              onClick={() => handleSearch()}
            >
              <svg
                aria-hidden="true"
                focusable="false"
                data-prefix="fas"
                data-icon="search"
                class="w-4"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <path
                  fill="currentColor"
                  d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"
                ></path>
              </svg>
            </button>
            <input
              className="form-control w-full min-w-0 block  px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300  transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              type="text"
              placeholder="Search Todo"
              value={search}
              onChange={(e) => {
                e.preventDefault();
                setSearch(e.target.value);
              }}
            />
          </div>
          <div className="flex justify-between">
            <button
              className="flex justify-center btn inline-block  xl:w-96 px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase  hover:bg-blue-700 focus:bg-blue-700   focus:outline-none focus:ring-0 active:bg-blue-800  transition duration-150 ease-in-out flex items-center"
              onClick={() => handleSearch()}
            >
              Search
            </button>
            <button
              className="flex justify-center btn inline-block  xl:w-[250px] px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase  hover:bg-blue-700 focus:bg-blue-700   focus:outline-none focus:ring-0 active:bg-blue-800  transition duration-150 ease-in-out flex items-center"
              onClick={handleAdd}
            >
              Add
            </button>
          </div>
        </div>

        <h1 className="text-2xl font-bold">TodoList</h1>
        <div className="mt-3">
          <div className="flex justify-between">
            <button
              className="flex justify-center btn inline-block  xl:w-[200px] px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase  hover:bg-blue-700 focus:bg-blue-700   focus:outline-none focus:ring-0 active:bg-blue-800  transition duration-150 ease-in-out flex items-center"
              onClick={() => handleSearch()}
            >
              All
            </button>

            <button
              className="flex justify-center btn inline-block  xl:w-[200px] px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase  hover:bg-blue-700 focus:bg-blue-700   focus:outline-none focus:ring-0 active:bg-blue-800  transition duration-150 ease-in-out flex items-center"
              onClick={() => handleDone()}
            >
              Done
            </button>
            <button
              className="flex justify-center btn inline-block  xl:w-[200px] px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase  hover:bg-blue-700 focus:bg-blue-700   focus:outline-none focus:ring-0 active:bg-blue-800  transition duration-150 ease-in-out flex items-center"
              onClick={() => handleTodo()}
            >
              Todo
            </button>
          </div>
        </div>

        {todos.map((user) => (
          <Todos
            id={user.id}
            key={user.id}
            name={user.task}
            complete={user.complete}
            onDelete={onDelete}
          />
        ))}
      </div>
    </div>
  );
}
