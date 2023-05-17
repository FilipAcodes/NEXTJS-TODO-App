"use client";

import { useState } from "react";
import ".//EditModal.css";
const EditModal = ({ taskId, handleUpdate, onClose }) => {
  const [editedTask, setEditedTask] = useState("");

  const handleInputChange = (event) => {
    setEditedTask(event.target.value);
  };

  const handleUpdateTask = () => {
    handleUpdate(taskId, editedTask);
    onClose();
  };

  return (
    <div className="modal-overlay">
      <div>
        <h2>Edit Task</h2>
        <input
          type="text"
          value={editedTask}
          onChange={handleInputChange}
          placeholder="Enter new task"
        />
        <button onClick={handleUpdateTask}>Update</button>
        <button onClick={onClose}>Cancel</button>
      </div>
    </div>
  );
};

export default EditModal;
