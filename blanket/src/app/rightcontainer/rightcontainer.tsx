"use client";

import { useState } from "react";
import "./rightcontainer.css";

const Rightcontainer = () => {
  const [text, setText] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const res = await fetch("/api/createTodo", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ todo: text }),
    });
    if (res.ok) {
      console.log("Todo item created successfully.");
    } else {
      console.log("Failed to create todo item.");
    }
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
