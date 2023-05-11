"use client";
import { useState } from "react";

const Rightcontainer = () => {
  const [text, setText] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("sent to server or something");
  };

  return (
    <div>
      <h1>Enter your todos!</h1>
      <form onSubmit={handleSubmit}>
        <input
          onChange={(e) => setText(e.target.value)}
          type="text"
          placeholder="Enter to-dos!"
          value={text}
        />
        <button type="submit">Add!</button>
      </form>
    </div>
  );
};

export default Rightcontainer;
