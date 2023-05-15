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

  const handleDeleteTask = (taskId: string) => {
    axios.delete(`/api/DeleteTask/${taskId}`).then((res) => {
      axios.get("/api/GetTask").then((res) => {
        setTasks(res.data.data);
      });
    });
  };

  if (!tasks) return <h1>Loading...</h1>;
  return (
    <div>
      <h1>Your to-dos will appear here!</h1>
      <ul>
        {tasks.map((e) => {
          return (
            <li key={e._id}>
              {e.task}
              <button onClick={() => handleDeleteTask(e._id)}>X</button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Leftcontainer;
