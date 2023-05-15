"use client";
import { useGlobalContext } from "../context/store";
import axios from "axios";
import { useEffect } from "react";
const Leftcontainer = () => {
  const { tasks, setTasks } = useGlobalContext();
  useEffect(() => {
    axios.get("/api/GetTask").then((res) => {
      setTasks(res.data.data);
    });
  }, []);
  if (!tasks) return <h1>Loading...</h1>;

  return (
    <div>
      <h1>Your to-dos will appear here!</h1>
      <ul>
        {tasks.map((e, index) => {
          return <li key={index}>{e.task}</li>;
        })}
      </ul>
    </div>
  );
};

export default Leftcontainer;
