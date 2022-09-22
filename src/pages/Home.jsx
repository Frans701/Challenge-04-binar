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
      <h1>Todos</h1>
      <button
        class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-4 rounded"
        onClick={handleAdd}
      >
        Add
      </button>
      <h1>todo search</h1>
      <input
        type="text"
        value={search}
        onChange={(e) => {
          e.preventDefault();
          setSearch(e.target.value);
        }}
      />
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={() => handleSearch()}
      >
        Search
      </button>
      <h1>Todo</h1>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={() => handleTodo()}
      >
        Todo
      </button>
      <h1>Done</h1>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={() => handleDone()}
      >
        Done
      </button>
      <h1>All</h1>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={() => handleSearch()}
      >
        All
      </button>

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
  );
}
