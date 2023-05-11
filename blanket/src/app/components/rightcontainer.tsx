"use client";
import { useState } from "react";

const Rightcontainer = () => {
  const [text, setText] = useState("");

  return (
    <div>
      <h1>Enter your todos!</h1>
      <form>
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
