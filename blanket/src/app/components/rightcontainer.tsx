import { useState } from "react";

const Rightcontainer = () => {
  return (
    <div>
      <h1>Enter your todos!</h1>
      <form>
        <input type="text" placeholder="Enter to-dos!" />
        <button type="submit">Add!</button>
      </form>
    </div>
  );
};

export default Rightcontainer;
