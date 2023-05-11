"use client";
import { useState } from "react";
import "./rightcontainer.css";
const Rightcontainer = () => {
  const [text, setText] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("sent to server or something");
  };

  return (
    <div>
      <h1>Enter your todos!</h1>
      <form onSubmit={handleSubmit} className="formcontainer">
        <input
          onChange={(e) => setText(e.target.value)}
          type="text"
          placeholder="Enter to-dos!"
          value={text}
        />
        <button type="submit" className="submitbutton">
          Add!
        </button>
      </form>
    </div>
  );
};

export default Rightcontainer;
