"use client";

import { useState } from "react";
import EditModal from "./EditModal";

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
      <button onClick={openModal}>Edit</button>
    </div>
  );
};

export default EditButton;
