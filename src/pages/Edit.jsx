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
    <div className="container p-4 w-[500px] mx-auto">
      <h1 className="text-2xl font-bold text-center mb-3"> TodoEdit</h1>
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <div className="flex border border-gray p-4 mt-4">
          <input
            className="form-control w-full min-w-0 block  px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300  transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
            placeholder="Name"
            name="name"
            value={edit}
            onChange={(e) => {
              setEdit(e.target.value);
            }}
          />
          <button
            className="flex justify-center btn inline-block  xl:w-[200px] px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase  hover:bg-blue-700 focus:bg-blue-700   focus:outline-none focus:ring-0 active:bg-blue-800  transition duration-150 ease-in-out flex items-center"
            onClick={(e) => {
              e.preventDefault();
              handleOnEditSubmit();
            }}
          >
            Save
          </button>
        </div>
      </form>
    </div>
  );
}
