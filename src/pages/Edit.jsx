import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

export default function Edit() {
  const params = useParams();
  const [edit, setEdit] = useState("");
  const redirect = useNavigate();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    await fetch(`https://63288bff9a053ff9aaba5f25.mockapi.io/crud/${params.id}`)
      .then((response) => response.json())
      .then((data) => {
        setEdit(data.task);
      })
      .catch((error) => console.log(error));
  };

  const handleOnEditSubmit = async () => {
    await fetch(
      `https://63288bff9a053ff9aaba5f25.mockapi.io/crud/${params.id}`,
      {
        method: "PUT",
        body: JSON.stringify({
          task: edit,
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      }
    )
      .then((response) => {
        if (response.status !== 200) {
          return;
        } else {
          redirect("/");
          return response.json();
        }
      })
      .catch((error) => console.log(error));
  };

  console.log(params);
  console.log(edit);
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
      }}
    >
      <input
        placeholder="Name"
        name="name"
        value={edit}
        onChange={(e) => {
          setEdit(e.target.value);
        }}
      />
      <button
        class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={(e) => {
          e.preventDefault();
          handleOnEditSubmit();
        }}
      >
        Save
      </button>
    </form>
  );
}
