"use client";

import { useState } from "react";
import EditModal from "./EditModal";
import { AiFillEdit } from "react-icons/ai";
import "./EditButton.css";

const EditButton = ({ handleUpdate, taskId }) => {
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <div className="modal">
      {modalOpen && (
        <EditModal
          taskId={taskId}
          handleUpdate={handleUpdate}
          onClose={closeModal}
        />
      )}
      <button onClick={openModal} className="editButton">
        <AiFillEdit />
      </button>
    </div>
  );
};

export default EditButton;
