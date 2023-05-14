"use client";

import { useEffect, useState } from "react";
import "./rightcontainer.css";
import axios from "axios";

const Rightcontainer = () => {
  const [text, setText] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    axios
      .post(`/api/SetTask`, { task: text })
      .then((res) => {
        setText("");
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    axios.get("/api/GetTask").then((res) => {
      console.log(res);
    });
  }, []);

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
