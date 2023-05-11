"use client";
import { useState } from "react";
import "./rightcontainer.css";
const Rightcontainer = () => {
  const [text, setText] = useState("");

  async function createTodo() {
    const res = await fetch("someplace");
    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }
    return res.json();
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("sent to server or something");
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
