import React, { useState } from "react";
import { Button, Modal } from "flowbite-react";

function ModalBase({ children }) {
  const [showModal, setShowModal] = useState(false);

  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <React.Fragment>
      <Button onClick={handleOpenModal}>Toggle modal</Button>
      <Modal show={showModal} onClose={handleCloseModal}>
        <Modal.Header>Text Editor</Modal.Header>
        <Modal.Body>{children}</Modal.Body>
      </Modal>
    </React.Fragment>
  );
}

export default ModalBase;
