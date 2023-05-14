"use client";

import { useState } from "react";
import "./rightcontainer.css";
import axios from "axios";
import { useGlobalContext } from "../context/store";

const Rightcontainer = () => {
  const [text, setText] = useState("");
  const { setTasks } = useGlobalContext();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    axios
      .post(`/api/SetTask`, { task: text })
      .then((res) => {
        setText("");
        axios.get("/api/GetTask").then((res) => {
          setTasks(res.data.data);
        });
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="container">
      <h1>Enter your todos!</h1>
      <form onSubmit={handleSubmit} className="formcontainer">
        <input
          onChange={(e) => setText(e.target.value)}
          type="text"
          placeholder="Enter to-dos!"
          value={text}
        />
        <button type="submit" className="submitbutton">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Rightcontainer;
