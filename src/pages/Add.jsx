import React from "react";
import { useNavigate } from "react-router-dom";
import { AddTodos } from "../components/AddTodos";

export default function Add() {
  const redirect = useNavigate();
  const onAdd = async (name) => {
    await fetch("https://63288bff9a053ff9aaba5f25.mockapi.io/crud", {
      method: "POST",
      body: JSON.stringify({
        task: name,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => {
        if (response.status !== 201) {
          return;
        } else {
          redirect("/");
          return response.json();
        }
      })
      .catch((error) => console.log(error));
  };
  return (
    <div>
      <AddTodos onAdd={onAdd} />
    </div>
  );
}
